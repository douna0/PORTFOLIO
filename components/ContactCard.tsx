import React from 'react'

type ContactCardProps = {
    icon: React.ReactNode;
    title: string;
    contact: string;
  };
const ContactCard =({icon, title ,contact}:ContactCardProps) =>{
  return (
    <div className='text-gray-300 rounded-lg p-8 flex flex-col items-center mb-6'
    style={{ backgroundColor: 'rgba(31, 41, 55, 0.4)' }}>
        <div className='mb-4 '>
            {icon}
        </div>
        <h2 className='text-2xl font-semibold mb-2'>{title}</h2>
        <p className='text-lg'>{contact}</p>
    </div>
  )
}

export default ContactCard;
