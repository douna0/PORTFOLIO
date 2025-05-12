import AboutMeCard from '@/components/AboutMeCard'
import Presentation from '@/components/Presentation'
import CertificationCard from '@/components/Certification'
import RoundImage from '@/components/RoundImage'
import React from 'react'

function page() {
  return (
    <div 
      style={{backgroundImage:"url(bg-3.jpg)"}}
      className='w-screen min-h-screen bg-cover bg-center flex flex-col md:flex-row'
    >
      {/* Section gauche (photo + présentation) */}
      <div className='w-full md:w-1/2 p-4 md:p-8 flex flex-col items-center md:items-end justify-start'>
        <div className='max-w-lg flex flex-col justify-center'>
          <div className="mt-6 md:mt-10 mb-4 md:mb-6 flex justify-center md:justify-end md:pl-6">
            <RoundImage
              src="/hananeboud.jpeg"
              alt="Thaha"
              size="lg"
              borderColor="border-purple-500"
            />
          </div>
          <Presentation></Presentation>
        </div>
      </div>

      {/* Section droite (éducation + certifications) */}
      <div className='w-full md:w-1/2 p-4 md:p-8 overflow-auto'>
        <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-500 to-red-500 bg-clip-text text-transparent text-center mb-6 md:mb-12">Education</h1>
        <div className='flex flex-col space-y-6 md:space-y-10'>
          <AboutMeCard
            date="2022-2025"
            formation="Bachelor's Degree in Computer Science"
            location="Center for Teaching and Research in Computer Science, Avignon, France"
          />
          <AboutMeCard
            date="2021-2022"
            formation="Médecine dentaire"
            location="Faculty of Medicine, UMMTO (Mouloud Mammeri University), Tizi Ouzou, Algeria"
          />
          <AboutMeCard
            date="2020-2021"
            formation="Baccalauréat Spé sciences expérimentales"
            location="Lycée Hamza Ibn El-Hassan El Alaoui Bouira, Algérie"
          />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-500 to-red-500 bg-clip-text text-transparent text-center mt-8 mb-6 md:mb-12">Certifications</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6'>
          <CertificationCard 
            title="Advanced Learning Algorithms" 
            year="2025" 
            description='an online non-credit course authorized by DeepLearning.Ai and Standford University and offered through Coursera' 
            logoImage="/dp.png"
          />
          <CertificationCard 
            title="Supervised Machine Learning : Regression and Classification" 
            year="2025" 
            description='an online non-credit course authorized by DeepLearning.Ai and Standford University and offered through Coursera'
            logoImage="/stanford.png"
          />
          <CertificationCard 
            title="CCNAv7: Introduction to Networks" 
            year="2023" 
            description='through the Cisco networking Academy program' 
            logoImage="/cisco.png"
          />
        </div>
      </div>
    </div>
  )
}

export default page