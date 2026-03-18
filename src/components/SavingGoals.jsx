import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

/**
 * Mock Goals Data
 * Represents progress towards specific targets
 */
const GOALS = [
  { name: 'Worker Expansion', current: 1650, total: 2500, percentage: 66, color: '#7c3aed' },
  { name: 'Resource Quota', current: 60000, total: 100000, percentage: 60, color: '#a78bfa' },
  { name: 'Scaling Buffer', current: 150000, total: 800000, percentage: 18, color: '#ddd6fe' },
];

/**
 * SavingGoals Component
 * Displays progress bars for predefined goals
 */
export function SavingGoals() {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      whileHover={{ y: -6, boxShadow: "var(--shadow-premium-lg)" }}
      className="bg-white rounded-[2.5rem] p-10 shadow-premium-md border border-gray-100/50 h-full hover:border-brand-purple/10 transition-all duration-500"
    >
      {/* Header section */}
      <div className="flex items-center justify-between mb-8">
        <h3 className="text-2xl font-bold text-gray-900">System Goals</h3>
        <button className="p-2.5 rounded-full border border-gray-50 text-gray-400 hover:text-gray-900 transition-colors">
          <ArrowUpRight size={18} />
        </button>
      </div>

      {/* List of active goals with progress bars */}
      <div className="space-y-8">
        {GOALS.map((goal, idx) => (
          <div key={idx} className="space-y-3">
            {/* Title and current value */}
            <div className="flex justify-between items-end">
               <span className="text-sm font-bold text-gray-900">{goal.name}</span>
               <span className="text-sm font-black text-gray-900">${goal.current.toLocaleString()}</span>
            </div>
            
            {/* Progress Bar Container */}
            <div className="w-full h-8 bg-gray-50 rounded-full relative overflow-hidden p-1 border border-gray-50">
               {/* Animated progress fill */}
               <motion.div 
                 initial={{ width: 0 }}
                 animate={{ width: `${goal.percentage}%` }}
                 transition={{ duration: 1.2, ease: "easeOut" }}
                 className="h-full rounded-full flex items-center justify-center text-[10px] font-black text-white shadow-sm"
                 style={{ backgroundColor: goal.color }}
               >
                 {goal.percentage}%
               </motion.div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
