import React, { useState, useEffect } from 'react';
import { Terminal as TerminalIcon } from 'lucide-react';
import { useStore } from '../../store/useStore';

export const Terminal = () => {
  const [text, setText] = useState('');
  const { theme } = useStore();
  const welcomeMessage = 'Welcome to my portfolio! Type "help" for commands...';

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < welcomeMessage.length) {
        setText((prev) => prev + welcomeMessage[index]);
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className={`h-32 ${theme === 'dark' ? 'bg-[#1e1e1e]' : 'bg-gray-50'} border-t ${theme === 'dark' ? 'border-[#333333]' : 'border-gray-200'}`}>
      <div className={`flex items-center px-4 py-1 ${theme === 'dark' ? 'bg-[#252526]' : 'bg-gray-100'} border-b ${theme === 'dark' ? 'border-[#333333]' : 'border-gray-200'}`}>
        <TerminalIcon className={`w-4 h-4 mr-2 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`} />
        <span className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>Terminal</span>
      </div>
      <div className="p-2 font-mono text-sm text-green-400">
        <span className="text-blue-400">➜</span> {text}
        <span className="animate-pulse">_</span>
      </div>
    </div>
  );
};