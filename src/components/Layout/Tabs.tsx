import React from 'react';
import { X } from 'lucide-react';
import { useStore } from '../../store/useStore';
import { motion } from 'framer-motion';

export const Tabs = () => {
  const { tabs, activeTab, removeTab, setActiveTab, theme } = useStore();

  return (
    <div className={`h-9 ${theme === 'dark' ? 'bg-[#252526]' : 'bg-gray-100'} flex items-center`}>
      {tabs.map((tab) => (
        <motion.div
          key={tab.id}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          className={`
            h-full px-3 flex items-center space-x-2 border-t-2
            ${
              activeTab === tab.id
                ? theme === 'dark'
                  ? 'bg-[#1e1e1e] border-blue-500'
                  : 'bg-white border-blue-500'
                : theme === 'dark'
                ? 'bg-[#2d2d2d] border-transparent'
                : 'bg-gray-200 border-transparent'
            }
          `}
        >
          <button
            onClick={() => setActiveTab(tab.id)}
            className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}
          >
            {tab.title}
          </button>
          <button
            onClick={() => removeTab(tab.id)}
            className={`${theme === 'dark' ? 'hover:bg-[#505050]' : 'hover:bg-gray-300'} rounded p-0.5`}
          >
            <X className={`w-4 h-4 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`} />
          </button>
        </motion.div>
      ))}
    </div>
  );
};