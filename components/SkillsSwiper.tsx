"use client";
import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/autoplay';

type Skill = {
  name: string;
  image: string;
  width: number;
  height: number;
};

type SkillsSwiperProps = {
  frontendSkills: Skill[];
  programmingSkills: Skill[];
  machineLearning:Skill[];
};

const SkillsSwiper = ({ frontendSkills, programmingSkills,machineLearning }: SkillsSwiperProps) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return (

    <div className="w-full">
      <div className='w-full mb-8'>
        <h3 className='text-2xl text-transparent bg-clip-text bg-purple-500 mb-4'> 
          Front-End Development 
        </h3>
        <Swiper
          slidesPerView={4}
          spaceBetween={20}
          loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            reverseDirection: true,
          }}
          speed={2000}
          modules={[Autoplay]}
          className='w-full'
        >
          {frontendSkills.map((skill, index) => (
            <SwiperSlide key={index} className="flex justify-center">
              <div className="text-center">
                <Image
                  src={skill.image}
                  alt={skill.name}
                  width={skill.width}
                  height={skill.height}
                />
                {/*<p className="mt-2 text-2xl text-white">{skill.name}</p>*/}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {programmingSkills && programmingSkills.length>0 && (
      <div className='w-full'>
        <h3 className='text-2xl text-transparent bg-clip-text bg-purple-500  mb-4'> 
          Programming Languages 
        </h3>
        <Swiper
          slidesPerView={4}
          spaceBetween={20}
          loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            reverseDirection: true,
          }}
          speed={2000}
          modules={[Autoplay]}
          className='w-full'
        >
          {programmingSkills.map((skill, index) => (
            <SwiperSlide key={index} className="flex justify-center">
              <div className="text-center">
                <Image
                  src={skill.image}
                  alt={skill.name}
                  width={skill.width}
                  height={skill.height}
                />
                {/*<p className="mt-2 text-2xl text-white">{skill.name}</p>*/}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      )};

      {machineLearning && machineLearning.length>0 && (
      <div className='w-full'>
        <h3 className='text-2xl text-transparent bg-clip-text bg-purple-500 mb-4'> 
          Machine Learning 
        </h3>
        <Swiper
          slidesPerView={4}
          spaceBetween={20}
          loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            reverseDirection: true,
          }}
          speed={2000}
          modules={[Autoplay]}
          className='w-full'
        >
          {machineLearning.map((skill, index) => (
            <SwiperSlide key={index} className="flex justify-center">
              <div className="text-center">
                <Image
                  src={skill.image}
                  alt={skill.name}
                  width={skill.width}
                  height={skill.height}
                />
                {/*<p className="mt-2 text-2xl text-white">{skill.name}</p>*/}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      )}
    </div>
  );
};

export default SkillsSwiper;