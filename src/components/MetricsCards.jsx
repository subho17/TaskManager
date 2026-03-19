import React from 'react';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { motion } from 'framer-motion';

/**
 * MetricsCards Component
 * Renders a row of 4 visual summary cards with trends
 */
export function MetricsCards({ metrics }) {
  // Format numeric values for display
  const cards = [
    {
      title: 'Current activity',
      value: `$${metrics.total.toLocaleString()}.00`,
      trend: '+ 12.1%',
      isUp: true,
    },
    {
      title: 'Monthly Goal',
      value: `$${metrics.success.toLocaleString()}.00`,
      trend: '+ 6.3%',
      isUp: true,
    },
    {
      title: 'Risk Factor',
      value: `$${metrics.failed.toLocaleString()}.00`,
      trend: '↓ 2.4%',
      isUp: false,
    },
    {
      title: 'Future Proj.',
      value: `$${metrics.pending.toLocaleString()}.00`,
      trend: '+ 12.1%',
      isUp: true,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 px-4 md:px-10 mb-6 md:mb-8">
      {cards.map((card, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: idx * 0.1 }}
          whileHover={{ 
            y: -12, 
            boxShadow: "var(--shadow-premium-xl)",
            transition: { duration: 0.4, ease: "easeOut" }
          }}
          className="bg-white rounded-3xl md:rounded-[3rem] p-6 md:p-10 shadow-2xl drop-shadow-xl border border-gray-100/50 flex flex-col justify-between hover:border-brand-purple/30 transition-all duration-500 group cursor-pointer"
        >
          {/* Card Header with icon */}
          <div className="flex justify-between items-start mb-6">
            <h4 className="text-xl font-bold text-gray-900">{card.title}</h4>
            <motion.div 
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="p-2.5 rounded-full border border-gray-100 text-gray-300 group-hover:bg-brand-purple group-hover:text-white group-hover:shadow-[0_0_20px_rgba(124,58,237,0.4)] transition-all duration-300"
            >
              <ArrowUpRight size={18} />
            </motion.div>
          </div>
          
          {/* Values and Trending */}
          <div className="space-y-4">
            <h3 className="text-3xl font-black text-gray-900 tracking-tight leading-none">
              {card.value.split('.')[0]}
              <span className="text-gray-300 text-2xl font-bold">.{card.value.split('.')[1]}</span>
            </h3>
            
            <div className={`flex items-center gap-2 text-sm font-bold ${card.isUp ? 'text-emerald-500' : 'text-rose-500'}`}>
              <div className={`px-2.5 py-1 rounded-full flex items-center gap-1 ${card.isUp ? 'bg-emerald-50' : 'bg-rose-50'}`}>
                 {card.isUp ? <ArrowUpRight size={12} /> : <ArrowDownRight size={12} />}
                 {card.trend}
              </div>
              <span className="text-gray-400 font-medium tracking-tight">vs last month</span>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
