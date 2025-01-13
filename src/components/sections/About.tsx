import React from 'react';
import { Github, Linkedin, Instagram, Facebook } from 'lucide-react';

export const About = () => {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-2 gap-8">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-blue-500">Basic Details</h2>
          <div className="space-y-2">
            <p><span className="text-pink-500">const</span> <span className="text-blue-400">name</span> = <span className="text-green-400">"Your Name"</span>;</p>
            <p><span className="text-pink-500">const</span> <span className="text-blue-400">title</span> = <span className="text-green-400">"Full Stack Developer"</span>;</p>
            <p><span className="text-pink-500">const</span> <span className="text-blue-400">email</span> = <span className="text-green-400">"your.email@example.com"</span>;</p>
            <p><span className="text-pink-500">const</span> <span className="text-blue-400">location</span> = <span className="text-green-400">"Your Location"</span>;</p>
          </div>
        </div>
        <div className="flex flex-col items-center space-y-4">
          <img
            src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7"
            alt="Profile"
            className="w-48 h-48 rounded-full object-cover"
          />
          <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Download Resume
          </button>
        </div>
      </div>
      
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-blue-500">About Me</h2>
        <p className="text-gray-300 leading-relaxed">
          A passionate full-stack developer with expertise in modern web technologies.
          I love creating elegant solutions to complex problems and am constantly
          learning new technologies to stay at the forefront of web development.
        </p>
        
        <div className="flex space-x-4">
          <a href="#" className="text-gray-400 hover:text-white">
            <Github className="w-6 h-6" />
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <Instagram className="w-6 h-6" />
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <Facebook className="w-6 h-6" />
          </a>
        </div>
      </div>
    </div>
  );
};