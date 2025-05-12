"use client";
import React from 'react';
import SkillsSwiper from '@/components/SkillsSwiper';

// Import uniquement pour l'intellisense, car les imports sont déjà gérés dans SkillsSwiper
import 'swiper/css';

const FrontDev = [
  { name: "React", image: "/react.png", width: 60, height: 60 },
  { name: "Next.js", image: "/next.png", width: 60, height: 60 },
  { name: "Yii2", image: "/yii.png", width: 60, height: 60 },
  { name: "HTML", image: "/html.png", width: 60, height: 60 },
  { name: "Tailwind", image: "/tailwind.png", width: 60, height: 60 },
  
];

const LangagesProg = [
  { name: "C++", image: "/cpp.png", width: 60, height: 60 },
  { name: "Java", image: "/java.png", width: 80, height: 80 },
  { name: "Prolog", image: "/prolog.png", width: 60, height: 60 },
  { name: "Python", image: "/python.png", width: 60, height: 60 },
  { name: "Julia", image: "/julia.png", width: 60, height: 60 },
  { name: "R", image: "/r.png", width: 60, height: 60 },
  { name: "C", image: "/c.png", width: 60, height: 60 },
];

const MachineLearning = [
    { name: "NumPy", image: "/numpy.png", width: 100, height: 100 },
    { name: "Pandas", image: "/pandas.png", width: 80, height: 80 },
    { name: "Matplotlib", image: "/matplot.png", width: 90, height: 90 },
    { name: "Sklearn", image: "/sklearn.png", width: 120, height: 120 },
    { name: "TensorFlow", image: "/tensor.png", width: 60, height: 60 },
  ];

const Page = () => {
  return (
    <div 
      style={{backgroundImage:"url(/bg-2.jpg)"}}
      className='h-screen w-screen flex items-center justify-center bg-cover bg-center'
    >
      <div className='flex flex-col gap-8 max-w-[90%] w-full text-center items-center absolute top-10'>
        <div className='flex flex-col items-center'>
          <h1 className='text-[50px] text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400 mb-8'> 
            My Skills 
          </h1>
        </div>
        
        {/* Utilisation du composant SkillsSwiper avec nos données */}
        <SkillsSwiper 
          frontendSkills={FrontDev} 
          programmingSkills={LangagesProg} 
          machineLearning={MachineLearning}
        />
         
      </div>
    </div>
  );
};

export default Page;