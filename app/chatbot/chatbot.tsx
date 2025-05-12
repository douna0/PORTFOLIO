'use client';

import { useState } from 'react';

function Chatbot() {
    const [question , setQuestion]=useState('');
    const [displayedResponse ,setDisplayedResponse]=useState('');
    const [isLoading , setIsLoading]=useState(false);
    const handleSubmit = async (e:React.FormEvent)=>{
        e.preventDefault();
        setDisplayedResponse('');
        setIsLoading(true);
        const res =await fetch('/api/chat',{
            method :'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({question})
        });
    
        const reader =res.body?.getReader();
        const decoder=new TextDecoder('utf-8');
       
        if(reader){
            try{
                let buffer='';
                while(true){
                    const {value , done} = await reader.read();
                    if(done) break ; 
                    const chunk =decoder.decode(value,{stream:true});
                    buffer+=chunk ;
                    let processedText='';
                    const lines =buffer.split('\n');
                    for (let i =0 ; i<lines.length-1;i++){
                        const line =lines[i].trim();
                        if (!line) continue ;
                        try{
                            const parsed=JSON.parse(line);
                            if(parsed.message && parsed.message.content){
                                processedText+=parsed.message.content;
                            }
                        // eslint-disable-next-line @typescript-eslint/no-unused-vars
                        }catch(error){
                            console.error('Failed to parse JSON:', line);
                        }
                    }
                    buffer =lines[lines.length-1]
                    if(processedText){
                        setDisplayedResponse(prev=>prev+processedText);
                    }
                }
                if(buffer.trim()){
                    try{
                        const parsed=JSON.parse(buffer);
                        if(parsed.message && parsed.message.content){
                            setDisplayedResponse(prev=>prev+parsed.message.content);
                        }
                    // eslint-disable-next-line @typescript-eslint/no-unused-vars
                    }catch(error){
                        console.error('Failed to parse final JSON chunk');
                    }
                }
    
            }catch(error){
                console.error('Error processing stream:', error);
                setDisplayedResponse(prev => prev + "\nAn error occurred while processing the response.");
            }
        }else{
            setDisplayedResponse("ERREUR :pas de flus de données ")
        }
        setIsLoading(false);
    };

  return (
    <div className='bg-black/30 flex flex-col h-full justify-between border border-gray-700'>
        <div className=' p-3 rounded overflow-y-auto max-h-[300px]'>
        {displayedResponse ? (<p className='text-black'>{displayedResponse}</p>) : (
            isLoading && <p className='text-black'>Give me a sec, I am thinking...</p>
        )}
        </div>
        <form onSubmit={handleSubmit} className='mt-2 flex items-center pb-5'>
            <input type="text" className='bg-transparent text-black border-b border-gray-700 focus:outline-none p-4 flex-grow' placeholder='Ask your question about me ...' value={question} onChange={(e)=>setQuestion(e.target.value)}/>
            <button 
                type="submit" 
                className='bg-gradient-to-r from-purple-500 to-red-500 text-white ml-2 w-10 h-10 rounded-full flex items-center justify-center shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-200'
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="22" y1="2" x2="11" y2="13"></line>
                    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
            </button>
        </form>
        
    </div>
  )
}

export default Chatbot
