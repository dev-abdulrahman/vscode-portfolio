import React from 'react';
import { Send, Github, Linkedin, Instagram, Facebook } from 'lucide-react';

export const Contact = () => {
  return (
    <>
      <div className='max-w-2xl mx-auto space-y-8'>
        <h2 className='text-2xl font-bold text-blue-500'>Contact Me</h2>
        <form className='space-y-4'>
          <div className='space-y-2'>
            <label className='block text-gray-300'>Name</label>
            <input
              type='text'
              className='w-full px-4 py-2 bg-[#2d2d2d] rounded border border-[#404040] focus:border-blue-500 focus:outline-none'
            />
          </div>
          <div className='space-y-2'>
            <label className='block text-gray-300'>Email</label>
            <input
              type='email'
              className='w-full px-4 py-2 bg-[#2d2d2d] rounded border border-[#404040] focus:border-blue-500 focus:outline-none'
            />
          </div>
          <div className='space-y-2'>
            <label className='block text-gray-300'>Message</label>
            <textarea
              rows={6}
              className='w-full px-4 py-2 bg-[#2d2d2d] rounded border border-[#404040] focus:border-blue-500 focus:outline-none'
            ></textarea>
          </div>
          <button
            type='submit'
            className='px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 flex items-center space-x-2'
          >
            <span>Send Message</span>
            <Send className='w-4 h-4' />
          </button>
          <div className='flex space-x-4 '>
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
          </div>
        </form>
      </div>
    </>
  );
};
