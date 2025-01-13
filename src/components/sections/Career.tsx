import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const careerTimeline = [
  {
    id: 1,
    year: '2023 - Present',
    company: 'Tech Corp',
    position: 'Senior Full Stack Developer',
    description: 'Leading development of enterprise applications using React and Node.js.',
  },
  {
    id: 2,
    year: '2021 - 2023',
    company: 'StartupX',
    position: 'Full Stack Developer',
    description: 'Developed and maintained multiple web applications using modern technologies.',
  },
  {
    id: 3,
    year: '2019 - 2021',
    company: 'Digital Solutions Inc',
    position: 'Frontend Developer',
    description: 'Specialized in creating responsive and interactive user interfaces.',
  },
];

export const Career = () => {
  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold text-blue-500">Career Journey</h2>
      <div className="space-y-8">
        {careerTimeline.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2 }}
            className="relative pl-8 border-l-2 border-blue-500"
          >
            <div className="absolute left-[-9px] top-0">
              <div className="w-4 h-4 rounded-full bg-blue-500">
                <Briefcase className="w-3 h-3 text-white absolute top-0.5 left-0.5" />
              </div>
            </div>
            <div className="bg-[#2d2d2d] p-4 rounded-lg">
              <div className="text-sm text-blue-400">{item.year}</div>
              <h3 className="text-lg font-semibold text-gray-200 mt-1">
                {item.position}
              </h3>
              <div className="text-gray-400">{item.company}</div>
              <p className="mt-2 text-gray-300">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};