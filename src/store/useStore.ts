import { create } from 'zustand';
import { Tab } from '../types';

interface Store {
  activeTab: string | null;
  tabs: Tab[];
  theme: 'dark' | 'light';
  addTab: (tab: Tab) => void;
  removeTab: (id: string) => void;
  setActiveTab: (id: string) => void;
  toggleTheme: () => void;
}

export const useStore = create<Store>((set) => ({
  activeTab: null,
  tabs: [],
  theme: 'dark',
  addTab: (tab) =>
    set((state) => ({
      tabs: state.tabs.some((t) => t.id === tab.id)
        ? state.tabs
        : [...state.tabs, tab],
      activeTab: tab.id,
    })),
  removeTab: (id) =>
    set((state) => ({
      tabs: state.tabs.filter((tab) => tab.id !== id),
      activeTab:
        state.activeTab === id
          ? state.tabs[state.tabs.length - 2]?.id || null
          : state.activeTab,
    })),
  setActiveTab: (id) => set({ activeTab: id }),
  toggleTheme: () =>
    set((state) => ({ theme: state.theme === 'dark' ? 'light' : 'dark' })),
}));