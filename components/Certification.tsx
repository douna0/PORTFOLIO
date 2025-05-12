/* eslint-disable @next/next/no-img-element */
import React from 'react'

interface CertificationCardProps {
    title: string;
    year: string;
    description: string;
    logoImage?: string;
    secondLogoImage?: string;
}
const  Certification: React.FC<CertificationCardProps> = ({
    title,
    year,
    description,
    logoImage
  }) => {

  return (
    <div className='flex flex-col text-gray-300 rounded-lg p-4  relative mb-4 '
    style={{ backgroundColor: 'rgba(31, 41, 55, 0.4)' , maxWidth: '600px'}}>

      <h3 className='text-2xl font-bold '>
      {logoImage ? (
            <img 
              src={logoImage} 
              alt="Logo" 
              className="w-50 h-50 object-contain"
            />
          ) : (
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-purple-500 font-bold text-lg">
              ?
            </div>
          )}     
        {title} {year}
      </h3>
      <p className='text-gray-300 text-lg'>
        {description}
      </p>
    </div>
  )
}

export default Certification
