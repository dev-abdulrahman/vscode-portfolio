import React from 'react';
import { motion } from 'framer-motion';
import react from './../../images/react.gif';
import typescript from './../../images/typescript.gif';
import docker from './../../images/docker.gif';
import tailwind from './../../images/tailwind.gif';
import asp from './../../images/asp.gif';
import dotnet from './../../images/dotnet.gif';
import csharp from './../../images/csharp.gif';
import js from './../../images/js.gif';
import nodejs from './../../images/nodejs.gif';
import git from './../../images/git.gif';
import sql from './../../images/sql.gif';
import html from './../../images/html.gif';
import css from './../../images/css.gif';
import mongodb from './../../images/mongodb.jpg';
import azure from './../../images/azure.gif';
import iis from './../../images/iis.png';
import nginx from './../../images/nginx.png';
import postman from './../../images/postman.png';
import jmeter from './../../images/JMeter.png';
import swagger from './../../images/swagger.png';

const skillCategories = {
  frontend: [
    { name: 'React', icon: react },
    { name: 'TypeScript', icon: typescript },
    { name: 'HTML5', icon: html },
    { name: 'CSS3', icon: css },
    { name: 'Tailwind', icon: tailwind },
    { name: 'JavaScript', icon: js },
  ],
  backend: [
    { name: 'C#', icon: csharp },
    { name: '.NET', icon: dotnet },
    { name: 'ASP.NET Core', icon: asp },
    { name: 'Node', icon: nodejs },
    { name: 'SQL Server', icon: sql },
    { name: 'MongoDB', icon: mongodb },
  ],
  tools: [
    { name: 'Git', icon: git },
    { name: 'Docker', icon: docker },
    { name: 'Azure', icon: azure },
    { name: 'IIS Server', icon: iis },
    { name: 'NGINX', icon: nginx },
    { name: 'Postman', icon: postman },
    { name: 'Swagger', icon: swagger },
    { name: 'JMeter', icon: jmeter },
  ],
};

export const Skills = () => {
  return (
    <div className='space-y-8'>
      {Object.entries(skillCategories).map(([category, skills]) => (
        <div key={category} className='space-y-4'>
          <h2 className='text-2xl font-bold text-blue-500 capitalize'>
            {category}
          </h2>
          <div className='flex flex-wrap gap-4'>
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className='bg-[#2d2d2d] p-4 rounded-lg flex items-center space-x-2'
              >
                <span className='text-2xl '>
                  <img
                    src={skill.icon}
                    className='w-9 h-9 rounded-full bg-current'
                  />
                </span>
                <span className='text-gray-300'>{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
