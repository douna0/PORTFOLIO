"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React , {useEffect, useState } from 'react'
import { Home, Boxes, Mail,Wrench, User } from "lucide-react";
import Transitions from './Transitions';

const NavLinks = [
    { name: "Home", link: "/", icon: Home },
    { name: "About", link: "/aboutMe", icon: User },
    { name: "Projects", link: "/projects", icon: Boxes },
    { name: "Skills" , link:"/skills" , icon: Wrench},
    { name: "Contact", link: "/contact", icon: Mail },
  ];
const Navigation = () => {
    const [isRouting ,setisRouting ]=useState(false)
    const path=usePathname()
    const [prevPath,setprevPath]=useState("/")

    useEffect(()=>{
        if(prevPath!==path){
            setisRouting(true)
        }
    },[path,prevPath])

    useEffect(()=>{
        if(isRouting){
            setprevPath(path);
            const timeout=setTimeout(()=>{
                setisRouting(false)
            },900)
            return()=>clearTimeout(timeout)
        }
    })
  return (
    <div style={{left:"20%"}}
    className='fixed z-[9999] -bottom-0 w-[50%] md:w-[20%] max-h-[100px] bg-black rounded-t-full flex justify-between items-center border border-white '>
        {isRouting && <Transitions/>}
        {NavLinks.map((nav)=>(
            <Link
            key={nav.name}
            href={nav.link}
           className='flex justify-center items-center min-w-[20%] py-2 mt-6'
            >
                <nav.icon className={`w-[24px] h-[24px] ${path===nav.link? "text-purple-800":"text-white"}`}/>
            </Link>
        )
        )}
    </div>
  )
}

export default Navigation