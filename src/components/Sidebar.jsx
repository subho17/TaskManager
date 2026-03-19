import React from 'react';
import {
  LayoutGrid,
  ArrowLeftRight,
  Wallet,
  Target,
  Percent,
  BarChart3,
  Settings,
  HelpCircle,
  LogOut,
  ChevronLeft,
  Sun,
  Moon
} from 'lucide-react';
import { cn } from '../lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * Sidebar Component
 * Left-side navigation menu with branding and theme actions
 */
export function Sidebar({ isOpen, onClose }) {
  // Navigation menu items list
  const menuItems = [
    { icon: LayoutGrid, label: 'Dashboard', active: true },
    { icon: ArrowLeftRight, label: 'Transactions' },
    { icon: Wallet, label: 'Wallet' },
    { icon: Target, label: 'Goals' },
    { icon: Percent, label: 'Budget' },
    { icon: BarChart3, label: 'Analytics' },
    { icon: Settings, label: 'Settings' },
  ];

  return (
    <>
      {/* Mobile Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="md:hidden fixed inset-0 z-40 bg-gray-900/20 backdrop-blur-sm"
          />
        )}
      </AnimatePresence>

      <div
        className={cn(
          "w-72 bg-white flex flex-col h-screen fixed md:sticky top-0 py-8 px-6 border-r border-gray-50 z-50 transition-transform duration-300 left-0",
          !isOpen && "-translate-x-full md:translate-x-0"
        )}
      >
      {/* 1. Branding (Logo and Name) */}
      <div className="flex items-center justify-between mb-12">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-white">
            <span className="font-black text-xs relative">T</span>
          </div>
          <span className="font-bold text-2xl tracking-tighter text-gray-900 leading-none">Taskflow</span>
        </div>
        <button onClick={onClose} className="md:hidden p-1.5 rounded-full border border-gray-100 text-gray-400 hover:bg-gray-50 transition-all">
          <ChevronLeft size={16} />
        </button>
      </div>

      {/* 2. Primary Navigation List */}
      <nav className="flex-1 space-y-2">
        {menuItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.button
              key={index}
              whileHover={{ x: 3 }}
              whileTap={{ scale: 0.98 }}
              className={cn(
                "w-full flex items-center gap-4 px-4 py-3.5 rounded-2xl transition-all duration-300 text-base",
                item.active
                  ? "bg-[#7c3aed] text-white shadow-xl shadow-purple-500/20 font-bold"
                  : "text-gray-400 hover:bg-gray-50 hover:text-gray-900"
              )}
            >
              <Icon size={20} />
              {item.label}
            </motion.button>
          );
        })}
      </nav>

      {/* 3. Bottom Actions */}
      <div className="pt-6 border-t border-gray-100 space-y-2 mt-auto">
        <motion.button
          whileHover={{ x: 3 }}
          whileTap={{ scale: 0.98 }}
          className="w-full flex items-center gap-4 px-4 py-3.5 rounded-2xl transition-all duration-300 text-base text-gray-400 hover:bg-gray-50 hover:text-gray-900"
        >
          <HelpCircle size={20} />
          Help Center
        </motion.button>
        <motion.button
          whileHover={{ x: 3 }}
          whileTap={{ scale: 0.98 }}
          className="w-full flex items-center gap-4 px-4 py-3.5 rounded-2xl transition-all duration-300 text-base text-gray-400 hover:bg-red-50 hover:text-red-500"
        >
          <LogOut size={20} />
          Logout
        </motion.button>
      </div>
    </div>
    </>
  );
}
