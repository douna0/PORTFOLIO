import React from 'react'


type AbouteMeCardProps = {
    formation: string;
    location: string;
    date:string 
  };
const  AboutMeCard=({formation,date,location}:AbouteMeCardProps) =>{
  return (
    <div className='text-gray-300 rounded-lg p-6 flex relative mb-6 '
    style={{ backgroundColor: 'rgba(31, 41, 55, 0.4)' , maxWidth: '600px'}}>


        <div className='w-20 flex-shrink-0 relative z-10 flex flex-col items-center mr-4'>
            <div className='text-center mb-3 font-semibold text-lg'>{date}</div>
            <div className='w-6 h-6 rounded-full  flex items-center justify-center'>
                <div className='w-3 h-3 rounded-full bg-white '></div>
            </div>
        </div>

        <div className='flex-grow'>
            <h2 className='text-xl font-semibold mb-2'>{formation}</h2>
            <p className='text-gray-400'>
                <span className='inline-flex items-center'>
                    <svg className='w-4 h-4 mr-1' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z' />
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 11a3 3 0 11-6 0 3 3 0 016 0z' />
                    </svg>
                    {location}
                </span>
            </p>
        </div>
    </div>
  )
}

export default AboutMeCard
