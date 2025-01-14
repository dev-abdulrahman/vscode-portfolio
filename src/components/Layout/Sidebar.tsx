import React from 'react';
import {
  FileText,
  User,
  Code2,
  Briefcase,
  BookOpen,
  Mail,
  Settings,
  Search,
  Package,
  GraduationCap,
  Sun,
  Moon,
  Github, Linkedin, Instagram, Facebook,
} from 'lucide-react';
import { useStore } from '../../store/useStore';
import { About } from '../sections/About';
import { Skills } from '../sections/Skills';
import { Projects } from '../sections/Projects';
import { Career } from '../sections/Career';
import { Blogs } from '../sections/Blogs';
import { Contact } from '../sections/Contact';
import { Education } from '../sections/Education';

const menuItems = [
  { id: 'about', icon: User, label: 'About', component: <About /> },
  { id: 'skills', icon: Code2, label: 'Skills', component: <Skills /> },
  { id: 'projects', icon: Package, label: 'Projects', component: <Projects /> },
  { id: 'career', icon: Briefcase, label: 'Career', component: <Career /> },
  { id: 'blogs', icon: BookOpen, label: 'Blogs', component: <Blogs /> },
  { id: 'education', icon: GraduationCap, label: 'Education', component: <Education /> },
  { id: 'contact', icon: Mail, label: 'Contact', component: <Contact /> },
];

export const Sidebar = () => {
  const { addTab, theme, toggleTheme } = useStore();

  return (
    <div className="flex h-full">
      <div className={`w-12 ${theme === 'dark' ? 'bg-[#333333]' : 'bg-gray-200'} flex flex-col items-center py-4 space-y-4`}>
        <FileText className={`w-6 h-6 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`} />
        <Search className={`w-6 h-6 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`} />
        <Settings className={`w-6 h-6 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`} />
        <button
          onClick={toggleTheme}
          className={`w-6 h-6 ${theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}
        >
          {theme === 'dark' ? <Sun /> : <Moon />}
        </button>
      </div>
      <div className={`w-60 ${theme === 'dark' ? 'bg-[#252526]' : 'bg-gray-100'} p-2`}>
        <h2 className={`text-xs uppercase tracking-wider mb-2 px-2 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
          Explorer
        </h2>
        <div className="space-y-1">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() =>
                addTab({
                  id: item.id,
                  title: item.label,
                  content: item.component,
                })
              }
              className={`w-full flex items-center space-x-2 px-2 py-1 ${
                theme === 'dark'
                  ? 'text-gray-300 hover:bg-[#37373d]'
                  : 'text-gray-700 hover:bg-gray-200'
              } rounded`}
            >
              <item.icon className="w-4 h-4" />
              <span>{item.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}