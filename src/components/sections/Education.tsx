import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

const educationTimeline = [
  {
    id: 1,
    year: '2016 - 2018',
    degree: 'Masters of Technology (M.Tech)',
    institution: 'SGGSIE&T',
    location: 'Nanded, Maharashtra',
    description:
      'Post graduated with honors. Specialized in Information Technology and Data Structures.',
    achievements: [
      'Conducted workshops for skill improvements',
      'Teaching Assistant for B.Tech students',
      'Completed thesis on Big Data processing using Hadoop',
    ],
  },
  {
    id: 2,
    year: '2011 - 2015',
    degree: 'Bachelor of Engineer (B.E)',
    institution: 'MPGI',
    location: 'Nanded, Maharashtra',
    description:
      'Completed the bachelors degree in programming and computer science engineering.',
    achievements: ['Best Paper Presentation Award'],
  },
  {
    id: 3,
    year: '2009 - 2011',
    degree: 'HSC',
    institution: 'Latur Board',
    location: 'Nanded, Maharashtra',
    description: '',
    achievements: [],
  },
  {
    id: 4,
    year: '2009',
    degree: 'SSC',
    institution: 'Latur Board',
    location: 'Nanded, Maharashtra',
    description: '',
    achievements: [],
  },
];

export const Education = () => {
  return (
    <div className='space-y-8'>
      <h2 className='text-2xl font-bold text-blue-500'>Education</h2>
      <div className='space-y-8'>
        {educationTimeline.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2 }}
            className='relative pl-8 border-l-2 border-blue-500'
          >
            <div className='absolute left-[-9px] top-0'>
              <div className='w-4 h-4 rounded-full bg-blue-500'>
                <GraduationCap className='w-3 h-3 text-white absolute top-0.5 left-0.5' />
              </div>
            </div>
            <div className='bg-[#2d2d2d] p-4 rounded-lg'>
              <div className='text-sm text-blue-400'>{item.year}</div>
              <h3 className='text-lg font-semibold text-gray-200 mt-1'>
                {item.degree}
              </h3>
              <div className='text-gray-400'>{item.institution}</div>
              <div className='text-gray-500 text-sm'>{item.location}</div>
              <p className='mt-2 text-gray-300'>{item.description}</p>
              <div className='mt-4 space-y-2'>
                <div>
                  {item.achievements.length !== 0 ? (
                    <>
                      <h4 className='text-sm font-semibold text-gray-300'>
                        Key Achievements:
                      </h4>
                      <ul className='list-disc list-inside text-gray-400 text-sm'>
                        {item.achievements.map((achievement, i) => (
                          <li key={i}>{achievement}</li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    ''
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
