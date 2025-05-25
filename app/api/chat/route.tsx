/* import { NextRequest  } from 'next/server'
import { readFile } from 'fs/promises';
import path from 'path'

export async function POST(req:NextRequest){
    const { question }=await req.json();
    const  prompt=path.join(process.cwd(), 'app', 'chatbot', 'hanane-infos.txt');
    
    const systemPrompt=await readFile(prompt,'utf-8');
    const res = await fetch('https://ollama.gamathel.fr/api/generate',{
        method : 'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({
            model :'llama3',
            messages:[
                {
                    role:'system',
                    content:systemPrompt
                },
                {
                    role:'user',
                    content:question
                }
            ],
            stream:true
        })
        
    });
   return new Response(res.body,{
    headers:{
        'Content-Type':'text/plain',
        'Transfer-Encoding':'chunked',
    }
   })
} */



   import { NextRequest } from 'next/server'
   import { readFile } from 'fs/promises'
   import path from 'path'
   
   export async function POST(req: NextRequest) {
       const { question } = await req.json()
       const promptPath = path.join(process.cwd(), 'app', 'chatbot', 'hanane-infos.txt')
       const systemPrompt = await readFile(promptPath, 'utf-8')
   
       // ConcatÃ©nation manuelle
       const fullPrompt = `${systemPrompt}\n\nUtilisateur: ${question}\nAssistant:`
   
       const upstreamResponse = await fetch('https://ollama.gamathel.fr/api/generate', {
           method: 'POST',
           headers: { 'Content-Type': 'application/json' },
           body: JSON.stringify({
               model: 'llama3',
               prompt: fullPrompt,
               stream: true
           })
       })
   
       const encoder = new TextEncoder()
       const decoder = new TextDecoder()
   
       const readableStream = new ReadableStream({
           async start(controller) {
               const reader = upstreamResponse.body?.getReader()
               if (!reader) {
                   controller.close()
                   return
               }
   
               while (true) {
                   const { value, done } = await reader.read()
                   if (done) break
   
                   const chunk = decoder.decode(value, { stream: true })
   
                   // on extrait uniquement la partie "response"
                   for (const line of chunk.split('\n')) {
                       if (!line.trim()) continue
                       try {
                           const parsed = JSON.parse(line)
                           if (parsed.response) {
                               const jsonLine = JSON.stringify({ message: { content: parsed.response } }) + '\n'
                               controller.enqueue(encoder.encode(jsonLine))
                           }
                       } catch (err) {
                           console.error('Erreur de parsing JSON du chunk :', err)
                       }
                   }
               }
   
               controller.close()
           }
       })
   
       return new Response(readableStream, {
           headers: {
               'Content-Type': 'text/plain; charset=utf-8',
               'Transfer-Encoding': 'chunked'
           }
       })
   }