import React from 'react';
import {
  Github,
  Linkedin,
  Instagram,
  Facebook,
  ArrowDownToLine,
  Rocket,
} from 'lucide-react';
import profile from './../../images/profile.jpg';
// import rocket from './../../images/rocket.png';

export const About = () => {
  return (
    <div className='space-y-8'>
      <div className='grid grid-cols-2 gap-8'>
        <div className='space-y-4'>
          <h2 className='text-xl font-bold text-blue-500'>
            <span className='text-blue-500'>export </span>
            <span className='text-pink-500'>const </span>
            <span className='text-green-400'>getInfo</span> = ( )
            <span className='text-amber-400'>{' => '}</span> {'{'}
          </h2>
          <div className='space-y-2 text-lg'>
            {/* <p>
              <span className='text-pink-500'>const </span>
              <span className='text-blue-400'>getInfo </span> = ( )
              <span className='text-amber-400'>{' => '}</span> {'{'}
            </p> */}
            <p className='text-indigo-400 ml-2'>
              {' '}
              return {'('} <span>{' {'}</span>
            </p>
            <div className='ml-10'>
              <p>
                <span className='space-x-12 text-blue-400'>name: </span>
                <span className='text-green-400'>"Abdul Rahman"</span>,
              </p>
              <p>
                <span className='text-blue-400'>title: </span>
                <span className='text-green-400'>
                  "Senior Software Developer"
                </span>
                ,
              </p>
              <p>
                <span className='text-blue-400'>skills: </span>
                <span className='text-green-400'>
                  ['C#', 'ASP.NET Core', 'React', 'Node', 'SQL']
                </span>
                ,
              </p>
              <p>
                <span className='text-blue-400'>experience: </span>
                <span className='text-green-400'>"5+ Years"</span>,
              </p>
              <p>
                <span className='text-blue-400'>email: </span>
                <span className='text-green-400'>
                  "abdul.dropmail@gmail.com"
                </span>
                ,
              </p>
              <p>
                <span className='text-blue-400'>location: </span>
                <span className='text-green-400'>"Hyderabad"</span>
              </p>
            </div>
            <span className='text-indigo-400'>{'})'}</span>
            <p>
              <span className='text-xl font-bold text-blue-500'>{'}'}</span>
            </p>
          </div>
        </div>
        <div className='flex flex-col items-center space-y-4'>
          <img
            src={profile}
            alt='Profile'
            className='w-48 h-48 rounded-full object-cover'
          />
          <a
            href='https://drive.google.com/file/d/1Mny9OuUKGpFiezVQvC800YfUmVetPdro/view?usp=sharing'
            className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600'
            target='_blank'
          >
            Get Resume <ArrowDownToLine className='w-4 h-4 inline-block' />
          </a>
        </div>
      </div>
      <div className='space-y-4 text-lg ml-2 '>
        <h2 className='text-xl font-bold text-blue-500'>
          <span className='text-blue-500'>export </span>
          <span className='text-pink-500'>const </span>
          <span className='text-green-400'>getDescription</span> = ( )
          <span className='text-amber-400'>{' => '}</span> {'{'}
        </h2>
        <p className='text-indigo-400 ml-2'> return {'<>'} </p>
        <p className='ml-10 text-green-400'>
          <div>
            Passionate Software Developer with a knack for problem-solving and a
            love for coding. With a solid foundation in .NET technologies,
            Azure, and cloud-based architectures. My experience spans across
            different modern web technologies like ReactJS, NodeJs, MongoDB,
            Tailwind CSS, and backend experience includes C#, ASP.NET Core, REST
            APIs, SQL Server.
          </div>
          <div>
            I enjoy solving complex challenges, implementing innovative
            solutions, and sharing my knowledge with the developer community
            through my Instagram page and blog on .NET and C#. I am always eager
            to learn and grow. Let's build something amazing together!{' '}
            {/* <Rocket className='inline-block text-sky-400 hover:text-sky-800' /> */}
            {/* <img
                src={rocket}
                alt='Profile'
                className='w-8 h-8 inline-block rounded-full bg-sky-100'
              /> */}
            {/* <RocketGIF /> */}
          </div>
        </p>
        <p>
          <span className='text-indigo-400 ml-2'>{'</>'}</span>
        </p>
      </div>
      <span className='text-xl font-bold text-blue-500'>{'}'}</span>

      {/* <div className='flex space-x-4'>
        <a href='#' className='text-gray-400 hover:text-white'>
          <Github className='w-6 h-6' />
        </a>
        <a href='#' className='text-gray-400 hover:text-white'>
          <Linkedin className='w-6 h-6' />
        </a>
        <a href='#' className='text-gray-400 hover:text-white'>
          <Instagram className='w-6 h-6' />
        </a>
        <a href='#' className='text-gray-400 hover:text-white'>
          <Facebook className='w-6 h-6' />
        </a>
      </div> */}
    </div>
  );
};
