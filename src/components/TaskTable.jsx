import React from 'react';
import { ChevronDown, ArrowUpRight } from 'lucide-react';
import { cn } from '../lib/utils';
import { motion } from 'framer-motion';

/**
 * TaskTable Component
 * Shows a list of recent task activities styled as transactions
 */
export function TaskTable({ tasks }) {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ y: -6, boxShadow: "var(--shadow-premium-lg)" }}
      className="bg-white rounded-[2.5rem] p-10 shadow-premium-md border border-gray-100/50 h-full flex flex-col min-h-[480px] hover:border-brand-purple/10 transition-all duration-500"
    >
      {/* 1. Header with 'See all' action */}
      <div className="flex items-center justify-between mb-8">
        <h3 className="text-2xl font-bold text-gray-900">Task History</h3>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 border border-gray-100 px-4 py-2 rounded-full text-xs font-bold text-gray-400">
            Current session <ChevronDown size={14} />
          </div>
          <button className="text-sm font-bold text-gray-900 hover:text-[#7c3aed] transition-colors flex items-center gap-1.5 group">
            See all <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>

      {/* 2. Responsive Table Content */}
      <div className="overflow-x-auto custom-scrollbar">
        <table className="w-full text-left border-separate border-spacing-y-2">
          <thead>
            <tr className="text-[10px] font-black text-gray-400 uppercase tracking-[0.15em] border-none">
              <th className="px-6 py-2">Timestamp</th>
              <th className="px-6 py-2">Throughput</th>
              <th className="px-6 py-2">Task Name</th>
              <th className="px-6 py-2">Worker ID</th>
              <th className="px-6 py-2">Type</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {tasks.map((task, idx) => (
              <motion.tr 
                key={task.id}
                initial={{ opacity: 0, x: -5 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.05 }}
                className="group hover:bg-gray-50/50 transition-all cursor-pointer"
              >
                {/* Time */}
                <td className="px-6 py-5 text-sm font-bold text-gray-900">
                  {idx === 0 ? '12:30 PM' : idx === 1 ? '03:00 PM' : '09:00 AM'}
                </td>
                
                {/* "Throughput" (Simulated as Amount) */}
                <td className={cn("px-6 py-5 text-sm font-black", task.status === 'SUCCESS' ? 'text-emerald-500' : 'text-gray-900')}>
                  {task.status === 'SUCCESS' ? `+ 85%` : `- 12%`}
                </td>
                
                {/* Name & Icon */}
                <td className="px-6 py-5 font-bold text-gray-900 flex items-center gap-3">
                   <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-xs">
                     {idx === 0 ? '⚡' : idx === 1 ? '🛠️' : '📦'}
                   </div>
                   <span className="truncate max-w-[120px]">{task.name}</span>
                </td>
                
                {/* Worker Reference */}
                <td className="px-6 py-5 text-sm font-bold text-gray-400">
                   WRK-{task.id}00{idx}
                </td>
                
                {/* Category/Type */}
                <td className="px-6 py-5 text-sm font-bold text-gray-400 truncate">
                  {idx === 0 ? 'Cloud' : idx === 1 ? 'Local' : 'System'}
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
}
