import React, { useState, useEffect } from 'react';

/**
 * Main Application Components
 */
import { Sidebar } from './components/Sidebar';
import { Header, Toolbar } from './components/Header';
import { MetricsCards } from './components/MetricsCards';
import { TaskTable } from './components/TaskTable';
import { MoneyFlow, Budget } from './components/Charts';
import { SavingGoals } from './components/SavingGoals';
import { Auth } from './components/Auth';

/**
 * Professional Animations
 */
import { motion, AnimatePresence } from 'framer-motion';

/**
 * Mock Data for the Dashboard
 * Represents a distributed task scheduler's metrics and recent activity
 */
const MOCK_METRICS = {
  total: 15700,
  success: 8500,
  failed: 6222,
  pending: 32913
};

const MOCK_TASKS = [
  { id: '1', name: 'YouTube API Task', status: 'SUCCESS', method: 'VISA **3254', category: 'Subscription' },
  { id: '2', name: 'Reserved Worker', status: 'FAILED', method: 'Mastercard **2154', category: 'Shopping' },
  { id: '3', name: 'Sync Job', status: 'FAILED', method: 'Mastercard **2154', category: 'Infrastructure' },
];

/**
 * Main App Component
 * Manages the high-level layout and entry animations
 */
function App() {
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Initial loading effect for a professional entry feel
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex min-h-screen bg-[#f4f6fb] font-sans text-gray-900 selection:bg-purple-100 selection:text-purple-900">
      {!isAuthenticated ? (
        <Auth onLogin={() => setIsAuthenticated(true)} />
      ) : (
        <>
          {/* 1. Rigid Sidebar (Stays on the left) */}
          <Sidebar />

          {/* 2. Main Scrollable Content Area */}
          <main className="flex-1 flex flex-col h-screen overflow-hidden">
        {/* Top Header Section */}
        <Header />

        {/* Main Dashboard Content with smooth fade-in */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex-1 bg-white/40 shadow-premium-lg rounded-tl-[3.5rem] mt-4 ml-4 overflow-x-hidden border-t border-l border-white/50 custom-scrollbar"
        >
          {/* Action Toolbar */}
          <Toolbar />

          {/* Dashboard Summary Cards */}
          <MetricsCards metrics={MOCK_METRICS} />

          {/* Responsive Grid Layout */}
          <div className="px-10 space-y-8">

            {/* Middle Row: Big Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <MoneyFlow />
              </div>
              <div className="lg:col-span-1">
                <Budget />
              </div>
            </div>

            {/* Bottom Row: Detailed Lists & Goals */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <TaskTable tasks={MOCK_TASKS} />
              </div>
              <div className="lg:col-span-1">
                <SavingGoals />
              </div>
            </div>

          </div>
        </motion.div>
      </main>
        </>
      )}

      {/* Professional Loading Spinner (Shown on first load) */}
      <AnimatePresence>
        {loading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-white flex items-center justify-center transition-opacity border-none"
          >
            <div className="flex items-center gap-6">
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 90, 180, 270, 360]
                }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                className="w-20 h-20 flex-shrink-0 bg-[#7c3aed] rounded-3xl shadow-2xl shadow-purple-500/30"
              />
              <motion.div
                initial={{ opacity: 0, width: 0, x: 50 }}
                animate={{ opacity: 1, width: "auto", x: 0 }}
                transition={{ duration: 0.8, ease: "circOut", delay: 0.1 }}
                className="overflow-hidden whitespace-nowrap"
              >
                <span className="text-5xl font-black tracking-lighter text-gray-900 pl-2">Taskflow</span>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
