import React, { useState } from 'react';
import { Search, Bell, Calendar, ChevronDown, Plus, LayoutGrid, Sun, Moon, Menu } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * Header Component
 * Top bar containing user greeting and search/notification actions
 */
export function Header({ onMenuClick }) {
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  return (
    <div className="sticky top-0 z-20 flex items-center justify-between py-4 md:py-6 px-4 md:px-10 bg-white/95 backdrop-blur-xl shadow-premium-md border-b border-gray-100/50">
      {/* Mobile Menu & Greeting Area */}
      <div className="flex flex-1 items-center gap-4">
        <button className="md:hidden p-2 text-gray-900 rounded-xl hover:bg-gray-100 transition-colors" onClick={onMenuClick}>
          <Menu size={24} />
        </button>
        <div className="hidden md:block space-y-1">
          <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 tracking-light">Welcome back, Subhadeep!</h1>
          <p className="text-gray-400 text-sm lg:text-base font-medium">It's a great time to manage your tasks</p>
        </div>
      </div>

      {/* 2. Top-right Buttons and Profile */}
      <div className="flex items-center gap-4">
        {/* Search Action with Animation */}
        <div className="relative flex items-center">
          <motion.div
            initial={false}
            animate={{
              width: isSearchFocused ? 240 : 44,
              borderColor: isSearchFocused ? "var(--color-brand-purple)" : "rgba(243, 244, 246, 1)",
              boxShadow: isSearchFocused ? "0 0 0 1px var(--color-brand-purple)" : "var(--shadow-premium-sm)"
            }}
            className="flex items-center bg-white border rounded-full h-11 overflow-hidden transition-all duration-300"
          >
            <button
              onClick={() => setIsSearchFocused(!isSearchFocused)}
              className="flex-shrink-0 p-2.5 text-gray-400 hover:text-brand-purple transition-colors"
            >
              <Search size={22} />
            </button>
            <input
              type="text"
              placeholder="Search tasks..."
              onFocus={() => setIsSearchFocused(true)}
              onBlur={() => setIsSearchFocused(false)}
              className="w-full bg-transparent border-none focus:ring-0 text-sm font-bold text-gray-900 placeholder:text-gray-300 pr-4 outline-none"
            />
          </motion.div>
        </div>

        {/* Notification Action with Badge */}
        <button className="relative p-3 rounded-full border border-gray-100 bg-white text-gray-400 hover:text-gray-900 hover:shadow-md transition-all">
          <Bell size={22} />
          <span className="absolute top-2.5 right-2.5 w-3.5 h-3.5 bg-[#f43f5e] border-2 border-white rounded-full flex items-center justify-center text-[8px] text-white font-black">3</span>
        </button>

        {/* Light/Dark Mode Toggle Mockup */}
        <div className="flex items-center p-1 bg-gray-50 rounded-full border border-gray-100 min-w-[80px]">
          <button className="flex-1 flex items-center justify-center py-1.5 rounded-full bg-white shadow-sm text-gray-900 font-bold">
            <Sun size={14} />
          </button>
          <button className="flex-1 flex items-center justify-center py-1.5 rounded-full text-gray-300 hover:text-gray-500">
            <Moon size={14} />
          </button>
        </div>

        {/* User Profile Info */}
        <div className="flex items-center gap-3 pl-4 border-l border-gray-100 ml-2">
          <div className="w-10 h-10 rounded-full bg-gray-100 ring-2 ring-purple-50 shadow-sm overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150"
              alt="User profile"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="hidden md:block">
            <p className="text-sm font-black text-gray-900 leading-none mb-1">Subhadeep</p>
            <p className="text-xs text-gray-400 font-bold">subhadeep@tasks.io</p>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * Toolbar Component
 * Secondary action bar under the header
 */
export function Toolbar() {
  return (
    <div className="flex flex-col md:flex-row items-start md:items-center justify-between px-4 md:px-10 mb-6 md:mb-8 mt-2 gap-4">
      {/* Date / Period Filter */}
      <div className="flex items-center gap-3">
        <button className="p-3 rounded-2xl bg-white border border-gray-50 text-gray-400 hover:text-gray-900 shadow-sm">
          <Calendar size={18} />
        </button>
        <button className="flex items-center gap-3 px-6 py-3 rounded-full bg-white border border-gray-50 text-sm font-bold text-gray-900 shadow-sm hover:shadow-md transition-shadow">
          This month
        </button>
      </div>

      {/* Widget/Task Management Actions */}
      <div className="flex items-center gap-3">
        <button className="flex items-center gap-2 px-6 py-3 rounded-2xl text-sm font-bold text-gray-400 hover:text-gray-900 transition-colors">
          <LayoutGrid size={18} />
          Manage widgets
        </button>
        <button className="flex items-center gap-2 px-7 py-3 rounded-2xl bg-[#7c3aed] text-white text-sm font-bold shadow-xl shadow-purple-500/20 hover:brightness-110 active:scale-95 transition-all">
          <Plus size={18} />
          Add new task
        </button>
      </div>
    </div>
  )
}
