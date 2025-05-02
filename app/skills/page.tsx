"use client";
import React from 'react'
import {Swiper , SwiperSlide} from 'swiper/react'
import 'swiper/css'
import Image from 'next/image'
import {Autoplay} from 'swiper/modules'

const  FrontDev =[
{ name: "Python", image: "/python.png", width: 80, height: 80 },
  { name: "React", image: "/react.png", width: 80, height: 80 },
  { name: "Next.js", image: "/next.png", width: 80, height: 80 },
  { name: "C++", image: "/cpp.png", width: 80, height: 80 },
  { name: "Java", image: "/java.png", width: 80, height: 80 },
  { name: "Prolog", image: "/prolog.png", width: 80, height: 80 },
  { name: "Prolog", image: "/html.png", width: 80, height: 80 },
  { name: "Prolog", image: "/tailwind.png", width: 80, height: 80 },
]
const page = () => {
  return (
    <div style={{backgroundImage:"url(/bg-2.jpg)"}}
        className='h-screen w-screen items-center justify-center bg-cover bg-center'>
        <div className='flex flex-col gap-20 max-w-[80%] text-center items-center'>
            <div className='flex flex-col items-center gap-4 '>
                <h1 className='font-stretch-125% text-[50px] text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400'> My Skills </h1>
            </div>
        <Swiper 
        slidesPerView={5}
        loop={true}
        autoplay={{
            delay:0,
            disableOnInteraction:false
        }}
        speed={5000}
        modules={[Autoplay]}
        className='max-w-[80%]'
        >
            {FrontDev.map((skill,index)=>(
                <SwiperSlide key={index}>
                    <Image
                    src={skill.image}
                    alt={skill.name}
                    width={skill.width}
                    height={skill.height} 
                    />
                </SwiperSlide>
            )
            )}
        </Swiper>


        <Swiper 
        slidesPerView={5}
        loop={true}
        autoplay={{
            delay:0,
            disableOnInteraction:false,
            reverseDirection:true,
        }}
        speed={5000}
        modules={[Autoplay]}
        className='max-w-[80%]'
        >
            {FrontDev
            .map((skill,index)=>(
                <SwiperSlide key={index}>
                    <Image
                    src={skill.image}
                    alt={skill.name}
                    width={skill.width}
                    height={skill.height} 
                    />
                </SwiperSlide>
            )
            )}
        </Swiper>
        </div>
    </div>
  )
}

export default page