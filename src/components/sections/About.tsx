import React from 'react';
import { Github, Linkedin, Instagram, Facebook, ArrowDownToLine } from 'lucide-react';
import profile from './../../images/profile.jpg';


export const About = () => {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-2 gap-8">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-blue-500">Basic Details</h2>
          <div className="space-y-2">
            <p>
              <span className="text-pink-500">const </span> 
              <span className="text-blue-400">developer </span> = 
              <span>{" {"}</span>
            </p>
            <div className="ml-10">
              <p>
                <span className="space-x-12 text-blue-400">name: </span> 
                <span className="text-green-400">"Abdul Rahman"</span>
              </p>
              <p>
                <span className="text-blue-400">title: </span>
                <span className="text-green-400">"Senior Software Developer"</span>
              </p>
              <p>
                <span className="text-blue-400">experience: </span>
                <span className="text-green-400">"5+ Years"</span>
              </p>
              <p> 
                <span className="text-blue-400">email: </span>
                <span className="text-green-400">"abdul.dropmail@gmail.com"</span>
              </p>
              <p>
                <span className="text-blue-400">location: </span>
                <span className="text-green-400">"Hyderabad"</span>
              </p>
            </div>
            <p><span>{"}"}</span></p>
          </div>
        </div>
        <div className="flex flex-col items-center space-y-4">
          <img
            src={profile}
            alt="Profile"
            className="w-48 h-48 rounded-full object-cover"
          />
          <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Get Resume <ArrowDownToLine className='w-4 h-4 inine-block' />
          </button>
        </div>
      </div>
      
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-blue-500">About Me</h2>
        <p className="text-gray-300 leading-relaxed">
          Passionate Software Developer with a knack for problem-solving and a love for coding.  With a solid foundation in .NET technologies, Azure, and cloud-based architectures. My experience spans across different modern web technologies like ReactJS, NodeJs, MongoDB, Tailwind CSS, and backend experience includes C#, ASP.NET Core, SQL Server. I enjoy solving complex challenges, implementing innovative solutions, and sharing my knowledge with the developer community through my Instagram page and blog on .NET and C#. I am always eager to learn and grow. Let's build something amazing together!
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