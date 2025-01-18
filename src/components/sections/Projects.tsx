import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import ali from './../../images/ali.png';

const projects = [
  {
    id: '1',
    title: 'Brasseler B2B Commerce',
    description:
      'A full-featured e-commerce platform built with ASP.NET MVC and TypeScript',
    technologies: ['C#', 'ASP.NET MVC', 'SQL Server', 'TypeScript', 'KendoUI'],
    github: '#',
    demo: '#',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c',
  },
  {
    id: '2',
    title: 'Hexagon Cloud Admin Portal',
    description:
      'A real-time tenant management application with collaborative features',
    technologies: ['React', 'ASP.NET Core', 'Web API'],
    github: '#',
    demo: '#',
    image: ali,
  },
  {
    id: '3',
    title: 'Intergraph SmartCloud Portal',
    description:
      'A SaaS based portal which provides access to different applications on cloud',
    technologies: [
      'ASP.NET',
      'REST APIs',
      'Angular',
      'TypeScript',
      'SQL Server',
    ],
    github: '#',
    demo: '#',
    image: 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d',
  },
];

export const Projects = () => {
  return (
    <div className='space-y-8'>
      <h2 className='text-2xl font-bold text-blue-500'>Projects</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        {projects.map((project) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className='bg-[#2d2d2d] rounded-lg overflow-hidden'
          >
            <img
              src={project.image}
              alt={project.title}
              className='w-full h-48 object-cover'
            />
            <div className='p-4 space-y-4'>
              <h3 className='text-xl font-semibold text-gray-200'>
                {project.title}
              </h3>
              <p className='text-gray-300'>{project.description}</p>
              <div className='flex flex-wrap gap-2'>
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className='px-2 py-1 text-sm bg-[#1e1e1e] rounded text-blue-400'
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className='flex space-x-4'>
                <a
                  href={project.github}
                  className='flex items-center space-x-2 text-gray-400 hover:text-white'
                >
                  <Github className='w-5 h-5' />
                  <span>Code</span>
                </a>
                <a
                  href={project.demo}
                  className='flex items-center space-x-2 text-gray-400 hover:text-white'
                >
                  <ExternalLink className='w-5 h-5' />
                  <span>Demo</span>
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
