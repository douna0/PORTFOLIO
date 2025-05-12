/* eslint-disable @next/next/no-img-element */
import React from 'react'

interface RoundImageProps {
  src: string;
  alt: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  border?: boolean;
  borderColor?: string;
  className?: string;
}

const RoundImage: React.FC<RoundImageProps> = ({
  src,
  alt,
  size = 'md',
  border = true,
  borderColor = 'border-purple-700',
  className = '',
}) => {
  // Tailles prédéfinies
  const sizeClasses = {
    sm: 'w-16 h-16',
    md: 'w-24 h-24',
    lg: 'w-32 h-32',
    xl: 'w-40 h-40',
  }
  
  // Classes de base
  const baseClasses = 'rounded-full object-cover overflow-hidden'
  
  // Classes de bordure
  const borderClasses = border ? `border-3 ${borderColor}` : ''
  
  return (
    <div className={`${baseClasses} ${sizeClasses[size]} ${borderClasses} ${className}`}>
      <img 
        src={src} 
        alt={alt} 
        className="w-full h-full object-cover"
        loading="lazy"
      />
    </div>
  )
}

export default RoundImage