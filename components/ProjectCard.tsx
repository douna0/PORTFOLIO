/* eslint-disable @next/next/no-img-element */
'use client';
import React from 'react'
import { ArrowUpRight } from 'lucide-react'

interface Stat {
    label:string;
    value:string | number ;
}
interface ProjectCardProps{
    title?: string;
    description?: string;
    imageUrl?: string;
    technologies?: string[];
    liveLink?: string;
    githubLink?: string;
    projectType?: string;
    stats?: Stat[];
    features?: string[];
    lastUpdated?: string;
}
function ProjectCard({
    title, 
    description,
    imageUrl, 
    technologies,
    liveLink,
    githubLink,
    projectType = "Web App",
    stats = [],
    features = [],
    }:ProjectCardProps){
        return (
            <div className='flex flex-col  rounded-2xl p-8 w-full h-full shadow-sm overflow-auto' style={{ backgroundColor: 'rgba(31, 41, 55, 0.4)' }} >
                <div className="flex justify-between items-start mb-4">
                    <h2 className='text-3xl font-bold text-gray-100'>{title}</h2>
                    {projectType && (
                        <span className='bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full'>{projectType}</span>
                    )}
                </div>

                <p className='text-lg mb-6 text-gray-300'>
                    {description}
                </p>
                {imageUrl && (
                    <div className='mb-6'>
                        <img 
                            src={imageUrl} 
                            alt={title}
                            className="rounded-lg w-full h-64 object-cover"
                        />
                    </div>
                )}
                {features && features.length >0 && (
                    <div className='mb-6 bg-gray-300 rounded-lg p-4'>
                        <h3 className='font-semibold text-gray-900 mb-2'>Key Features</h3>
                        <ul className='space-y-2'>
                            {features.map((feature,index)=>(
                                <li key={index} className='flex items-start'>
                                    <span className='text-green-500'>✓</span>
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {stats && stats.length >0 && (
                    <div className='grid grid-cols-2 gap-4 mb-6'>
                        {stats.map((stat,index)=>(
                            <div key={index} className='bg-gray-300 p-4 rounded-lg'>
                                <p className='text-sm text-gray-500'>{stat.label}</p>
                                <p className='text-xl font-bold'>{stat.value}</p>
                            </div>
                        ))}
                    </div>
                )}

                {technologies && technologies.length >0 && (
                    <div className='mb-6'>
                        <h3 className='text-sm font-medium text-blue-800  mb-2'>Technologies</h3>
                        <div className='flex flex-wrap gap-2'>
                            {technologies.map((tech,index)=>(
                                <div key={index} className='bg-gray-300 px-3 py-1 rounded-full text-sm border border-gray-300'>
                                    {tech}
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                <div className="flex gap-4">
                    {githubLink && (
                        <a href={githubLink} className='flex items-center gap-2 bg-gray-300 px-6 py-3 rounded-full font-medium border border-gray-200 hover:bg-gray-50 transition-colors'>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.163 6.839 9.489.5.092.682-.217.682-.48 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.268 2.75 1.026A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.026 2.747-1.026.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.16 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                            </svg>
                            Star the project 
                        </a>
                    )}
                    {liveLink && (
                        <a href={liveLink} 
                        className="flex items-center gap-2 bg-gray-300 px-6 py-3 rounded-full font-medium border border-gray-200 hover:bg-gray-50 transition-colors"
                        >
                            Live 
                            <ArrowUpRight size={16}/>
                        </a>
                    )}
                </div>
            </div>
        )
}
export default ProjectCard