import React from 'react';
import { Titlebar } from './components/Layout/Titlebar';
import { Sidebar } from './components/Layout/Sidebar';
import { Tabs } from './components/Layout/Tabs';
import { Terminal } from './components/Layout/Terminal';
import { useStore } from './store/useStore';

function App() {
  const { activeTab, tabs, theme } = useStore();
  const activeContent = tabs.find((tab) => tab.id === activeTab)?.content;

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-100'} flex items-center justify-center py-[5vh] px-[10vw]`}>
      <div className={`w-full h-[90vh] rounded-lg overflow-hidden shadow-2xl`}>
        <div className={`h-full flex flex-col ${theme === 'dark' ? 'bg-[#1e1e1e] text-gray-300' : 'bg-white text-gray-800'}`}>
          <Titlebar />
          <div className="flex-1 flex overflow-hidden">
            <Sidebar />
            <div className="flex-1 flex flex-col">
              <Tabs />
              <div className="flex-1 overflow-auto p-4">
                {activeContent || (
                  <div className="h-full flex items-center justify-center text-gray-500">
                    Welcome! Click on a menu item to get started.
                  </div>
                )}
              </div>
              <Terminal />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;