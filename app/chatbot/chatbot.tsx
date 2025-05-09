'use client';

import { useState } from 'react';

function Chatbot() {
    const [question , setQuestion]=useState('');
    const [response , setResponse]=useState('');
    const handleSubmit = async (e:React.FormEvent)=>{
        e.preventDefault();
        const res =await fetch('/api/chat',{
            method :'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({question})
        });
      
const text = await res.text();
console.log("Réponse brute backend:", text);

try {
    const data = JSON.parse(text);
    setResponse(data.reply);
} catch (err) {
    console.error("Erreur de parsing JSON:", err);
    setResponse("Le serveur a renvoyé une réponse invalide.");
}
    };

  return (
    <div className='p-4 max-w-xl mx-auto'>
        <h2 className='text-xl font-bold mb-2'> HananeBot</h2>
        <form onSubmit={handleSubmit} className='mb-4'>
            <input type="text" className='border border-b-cyan-500 p-2 w-full mb-2' placeholder='Ask your question about me ...' value={question} onChange={(e)=>setQuestion(e.target.value)}/>
            <button type="submit" className='bg-blue-600 text-white px-4 py-2 rounded-b-3xl'>Send</button>
            {response && (
                <div className='bg-gray-100 p-3 rounded'>
                    {response}
                </div>
            )
            }
        </form>
        
    </div>
  )
}

export default Chatbot
