import React from 'react';
import { motion } from 'framer-motion';

const skillCategories = {
  frontend: [
    { name: 'React', icon: '⚛️' },
    { name: 'TypeScript', icon: '📘' },
    { name: 'HTML5', icon: '🌐' },
    { name: 'CSS3', icon: '🎨' },
    { name: 'JavaScript', icon: '💛' },
  ],
  backend: [
    { name: 'Node.js', icon: '🟢' },
    { name: 'Python', icon: '🐍' },
    { name: 'PostgreSQL', icon: '🐘' },
    { name: 'MongoDB', icon: '🍃' },
  ],
  tools: [
    { name: 'Git', icon: '📚' },
    { name: 'VS Code', icon: '💻' },
    { name: 'Docker', icon: '🐳' },
    { name: 'AWS', icon: '☁️' },
  ],
};

export const Skills = () => {
  return (
    <div className="space-y-8">
      {Object.entries(skillCategories).map(([category, skills]) => (
        <div key={category} className="space-y-4">
          <h2 className="text-2xl font-bold text-blue-500 capitalize">
            {category}
          </h2>
          <div className="flex flex-wrap gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className="bg-[#2d2d2d] p-4 rounded-lg flex items-center space-x-2"
              >
                <span className="text-2xl">{skill.icon}</span>
                <span className="text-gray-300">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};