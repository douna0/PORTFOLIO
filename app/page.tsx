'use client';
import Image from "next/image";
import Link from "next/link";
import Chatbot from "./chatbot/chatbot";
import { useState } from "react";

export default function Home() {
  const [showChatbot,setShowChatbot]=useState(false);
  const toggleChatbot=()=>setShowChatbot(!showChatbot);
  return (
    <main className="w-screen h-screen relative">
       
        <div className="flex items-center w-full h-full bg-cover bg-center" style={{backgroundImage:"url(/main-bg.webp)"}}>
            <div className="pl-20 md:pl-40 pb-56 md:pb-20 flex flex-col gap-5 z-[10] max-w-[750px]  ">
              
              <h1 className="text-[50px] sm:text-[40px] md:text-[50px] text-white font-semibold">
                  Hanane Boudlal {""}
                  <span className="text-transparent sm:text-[40px] md:text-[50px] bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
                      Third year <br/> bachelor`s degree student 
                  </span>
              </h1>
              <p className="text-gray-200 hidden md:block">
                hi i am hanane a big shit here 
              </p>
              <div className="flex-col md:flex-row hidden md:flex gap-5 ">
                  <Link href="/my-skills" className="rounded-[30px] relative group bg-purple-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px] ">Learn More </Link>
                  <Link href="/my-skills" className="rounded-[20px] relative group bg-transparent border  border-white  px-5 py-3 text-lg text-white max-w-[200px] ">
                    <div className="absolute rounded-[20px] bg-white inset-0 opacity-0 group-hover:opacity-20"/>
                    My Projects
                  </Link>
                  <Link href="/my-skills" className="rounded-[20px] relative  group px-5 py-3 text-lg text-white max-w-[200px] border  border-white  ">
                    <div className="absolute rounded-[20px] inset-0 opacity-0 group-hover:opacity-20"/>
                    Contact me 
                  </Link>

              </div>
            </div>
        </div>


        <div className="absolute bottom-10 left-5 z-[20]">
          <button onClick={toggleChatbot} className="bg-blue-600 text-white px-4 py-2 rounded-b-full">
            {showChatbot ? "Hide ChatBot":"Open ChatBot"}
          </button>
        </div>
        {showChatbot &&(
          <div className="absolute bottom-20 left-5 z-[20] w-[300px] h-[400px]">
            <Chatbot/>
          </div>
        )}


        <div className="absolute flex bottom-10 z-[20] right-5  flex-col  md:hidden gap-5  ">
                  <Link href="/my-skills" className="rounded-[20px] group bg-purple-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px] ">
                        Learn More
                   </Link>
                  <Link href="/my-skills" className="rounded-[20px] group bg-transparent  px-5 py-3 text-lg text-white max-w-[200px] border border-white">
                        My Projects
                  </Link>
                  <Link href="/my-skills" className="rounded-[20px] group bg-transparent  px-5 py-3 text-lg text-white max-w-[200px]  border-white">
                       Contact me 
                  </Link>

        </div>
        <div className="absolute bottom-0 right-0 z-[10]">
          <Image src="/horse.png" alt="horse" height={300} width={300} className="absolute right-55 top-40"/>
          <Image src="/cliff.webp" alt="cliff" width={480} height={480}/>
        </div>
        <div className="absolute bottom-0 z-[5] w-full h-auto" >
          <Image src="/trees.webp" alt="trees" width={2000} height={2000} className="w-full h-full"/>
        </div>
        <Image src="/stars.png" alt="stars" height={300} width={300} className="absolute top-10 left-0 z-[10] "/>

    </main>
  );
}
