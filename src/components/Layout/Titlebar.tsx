import React from 'react';
import { Minus, Square, X } from 'lucide-react';
import { useStore } from '../../store/useStore';

export const Titlebar = () => {
  const { theme } = useStore();

  const handleMaximize = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      document.documentElement.requestFullscreen();
    }
  };

  const handleClose = () => {
    window.close();
  };

  return (
    <div
      className={`h-8 ${
        theme === 'dark' ? 'bg-[#3c3c3c]' : 'bg-gray-200'
      } flex items-center justify-between px-2 select-none`}
    >
      <div className='flex items-center space-x-2'>
        <img src='/vscode-icon.svg' alt='VS Code' className='w-4 h-4' />
        <div className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>
          Portfolio - Visual Studio Code
        </div>
      </div>
      <div className='flex space-x-2'>
        <button
          className={`${
            theme === 'dark' ? 'hover:bg-[#505050]' : 'hover:bg-gray-300'
          } p-2`}
        >
          <Minus
            className={`w-4 h-4 ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
            }`}
          />
        </button>
        <button
          onClick={handleMaximize}
          className={`${
            theme === 'dark' ? 'hover:bg-[#505050]' : 'hover:bg-gray-300'
          } p-2`}
        >
          <Square
            className={`w-4 h-4 ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
            }`}
          />
        </button>
        <button onClick={handleClose} className='hover:bg-[#e81123] p-2'>
          <X
            className={`w-4 h-4 ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
            }`}
          />
        </button>
      </div>
    </div>
  );
};
