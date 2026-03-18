import React from 'react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  PieChart, 
  Pie, 
  Cell 
} from 'recharts';
import { ArrowUpRight, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

/**
 * Static Chart Data
 */
const BAR_DATA = [
  { name: 'Jan', income: 8000, expense: 6000 },
  { name: 'Feb', income: 9500, expense: 7000 },
  { name: 'Mar', income: 11000, expense: 8000 },
  { name: 'Apr', income: 13000, expense: 9000 },
  { name: 'May', income: 12000, expense: 8500 },
  { name: 'Jun', income: 10000, expense: 7000 },
  { name: 'Jul', income: 9000, expense: 6500 },
];

const PIE_DATA = [
  { name: 'Network', value: 400, color: '#7c3aed' },
  { name: 'Database', value: 300, color: '#a78bfa' },
  { name: 'Compute', value: 300, color: '#ddd6fe' },
  { name: 'Storage', value: 200, color: '#111827' },
];

/**
 * MoneyFlow Component
 * Column chart for analyzing income vs expense trends
 */
export function MoneyFlow() {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ y: -8, boxShadow: "var(--shadow-premium-xl)" }}
      className="bg-white rounded-[3rem] p-10 shadow-premium-md border border-gray-100/50 h-full flex flex-col min-h-[480px] hover:border-brand-purple/20 transition-all duration-500 ease-out"
    >
      {/* Chart Header */}
      <div className="flex items-center justify-between mb-10">
        <h3 className="text-2xl font-bold text-gray-900">Task Analysis</h3>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-[#7c3aed]"></div>
            <span className="text-sm font-bold text-gray-400">Success</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-[#ddd6fe]"></div>
            <span className="text-sm font-bold text-gray-400">Failed</span>
          </div>
        </div>
      </div>

      {/* Chart Visualization */}
      <div className="flex-1 w-full mt-auto">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={BAR_DATA} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
            <CartesianGrid vertical={false} stroke="#f1f5f9" strokeDasharray="3 3" />
            <XAxis 
              dataKey="name" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#94a3b8', fontSize: 12, fontWeight: 700 }}
              dy={10}
            />
            <YAxis 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#94a3b8', fontSize: 12, fontWeight: 700 }}
              tickFormatter={(v) => `$${v / 1000}k`}
            />
            <Tooltip 
              cursor={{ fill: '#f8fafc' }}
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  return (
                    <div className="bg-white p-4 shadow-2xl rounded-2xl border border-gray-50">
                      <p className="text-sm font-bold text-gray-400 mb-1">{payload[0].payload.name}</p>
                      <p className="text-base font-black text-[#7c3aed]">${payload[0].value.toLocaleString()}</p>
                    </div>
                  );
                }
                return null;
              }}
            />
            <Bar dataKey="income" fill="#7c3aed" radius={[6, 6, 6, 6]} barSize={12} />
            <Bar dataKey="expense" fill="#ddd6fe" radius={[6, 6, 6, 6]} barSize={12} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
}

/**
 * Budget Component
 * Donut chart showing distribution of resources/budget
 */
export function Budget() {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ y: -8, boxShadow: "var(--shadow-premium-xl)" }}
      className="bg-white rounded-[3rem] p-10 shadow-premium-md border border-gray-100/50 h-full flex flex-col min-h-[480px] hover:border-brand-purple/20 transition-all duration-500 ease-out"
    >
      <div className="flex items-center justify-between mb-8">
        <h3 className="text-2xl font-bold text-gray-900">Allocation</h3>
        <button className="p-2.5 rounded-full border border-gray-50 text-gray-400 hover:text-[#7c3aed] transition-colors">
          <ArrowUpRight size={18} />
        </button>
      </div>

      <div className="flex flex-col items-center justify-center flex-1">
        {/* Central Graphic */}
        <div className="relative w-full aspect-square max-w-[200px] mb-10">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={PIE_DATA}
                cx="50%"
                cy="50%"
                innerRadius={65}
                outerRadius={85}
                paddingAngle={6}
                dataKey="value"
                stroke="none"
              >
                {PIE_DATA.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          {/* Legend in the center of the donut */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none">
             <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Utilized</span>
             <span className="text-2xl font-black text-gray-900 mt-0.5">$5.9k</span>
          </div>
        </div>

        {/* Distributed List */}
        <div className="w-full space-y-4">
          {PIE_DATA.map((item, idx) => (
            <div key={idx} className="flex items-center justify-between group cursor-pointer px-1">
              <div className="flex items-center gap-3">
                <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: item.color }}></div>
                <span className="text-sm font-bold text-gray-400 group-hover:text-gray-900 transition-colors">{item.name}</span>
              </div>
              <span className="text-xs font-black text-gray-900 opacity-0 group-hover:opacity-100 transition-all">7%</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
