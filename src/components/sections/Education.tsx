import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

const educationTimeline = [
  {
    id: 1,
    year: '2018 - 2022',
    degree: 'Bachelor of Science in Computer Science',
    institution: 'University Name',
    location: 'City, Country',
    description: 'Graduated with honors. Specialized in Software Engineering and Data Structures.',
    achievements: [
      'Dean\'s List for Academic Excellence',
      'Led the University Programming Club',
      'Completed thesis on Machine Learning Applications'
    ]
  },
  {
    id: 2,
    year: '2016 - 2018',
    degree: 'Associate Degree in Computer Programming',
    institution: 'College Name',
    location: 'City, Country',
    description: 'Foundation courses in programming and computer science fundamentals.',
    achievements: [
      'First Class Honors',
      'Best Project Award',
      'Teaching Assistant for Programming 101'
    ]
  }
];

export const Education = () => {
  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold text-blue-500">Education</h2>
      <div className="space-y-8">
        {educationTimeline.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2 }}
            className="relative pl-8 border-l-2 border-blue-500"
          >
            <div className="absolute left-[-9px] top-0">
              <div className="w-4 h-4 rounded-full bg-blue-500">
                <GraduationCap className="w-3 h-3 text-white absolute top-0.5 left-0.5" />
              </div>
            </div>
            <div className="bg-[#2d2d2d] p-4 rounded-lg">
              <div className="text-sm text-blue-400">{item.year}</div>
              <h3 className="text-lg font-semibold text-gray-200 mt-1">
                {item.degree}
              </h3>
              <div className="text-gray-400">{item.institution}</div>
              <div className="text-gray-500 text-sm">{item.location}</div>
              <p className="mt-2 text-gray-300">{item.description}</p>
              <div className="mt-4 space-y-2">
                <h4 className="text-sm font-semibold text-gray-300">Key Achievements:</h4>
                <ul className="list-disc list-inside text-gray-400 text-sm">
                  {item.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};