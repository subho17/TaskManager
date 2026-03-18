import React from 'react';
import { RotateCcw, ShieldAlert, Navigation } from 'lucide-react';

export function DLQTable({ dlqTasks, onRetry }) {
  return (
    <div className="bg-white rounded-[20px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100/50 mt-8 mb-8 overflow-hidden mx-8">
      <div className="p-6 border-b border-gray-100 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center">
            <ShieldAlert className="text-red-500" size={20} />
          </div>
          <div>
             <h2 className="text-lg font-bold text-gray-900 leading-tight">Dead Letter Queue (DLQ)</h2>
             <p className="text-xs text-gray-400 font-medium">Permanently Failed Tasks requiring intervention</p>
          </div>
        </div>
        <button className="text-sm font-semibold text-gray-500 hover:text-gray-900 flex items-center gap-2">
          View All <Navigation size={14} className="rotate-90" />
        </button>
      </div>
      
      <div className="overflow-x-auto">
        {dlqTasks.length === 0 ? (
          <div className="p-10 text-center text-gray-400 font-medium text-sm">
            No dead letters found. Everything is running smoothly.
          </div>
        ) : (
          <table className="w-full text-left text-sm whitespace-nowrap">
            <thead className="bg-gray-50/80 text-gray-500 font-semibold">
              <tr>
                <th className="px-6 py-4">Task ID</th>
                <th className="px-6 py-4">Error Message</th>
                <th className="px-6 py-4">Timestamp</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-gray-600">
              {dlqTasks.map((task) => (
                <tr key={task.id} className="hover:bg-red-50/30 transition-colors">
                  <td className="px-6 py-4 font-mono text-sm text-gray-500">{task.id}</td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-md bg-red-50 text-red-600 text-xs font-mono font-medium border border-red-100/50 truncate max-w-sm">
                      {task.error}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-400 text-sm">
                    {new Date(task.timestamp).toLocaleString()}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button 
                      onClick={() => onRetry(task.id)}
                      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-semibold text-gray-600 border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all shadow-sm"
                    >
                      <RotateCcw size={14} /> Retry Process
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
