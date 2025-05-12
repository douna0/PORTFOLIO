import { NextRequest  } from 'next/server'
import { readFile } from 'fs/promises';
import path from 'path'

export async function POST(req:NextRequest){
    const { question }=await req.json();
    const  prompt=path.join(process.cwd(), 'app', 'chatbot', 'hanane-infos.txt');
    
    const systemPrompt=await readFile(prompt,'utf-8');
    const res = await fetch('http://localhost:11434/api/chat',{
        method : 'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({
            model :'mistral',
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
}