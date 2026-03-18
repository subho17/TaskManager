import React, { useState } from 'react';
import { Plus, Code } from 'lucide-react';

export function TaskForm({ onCreateTask }) {
  const [formData, setFormData] = useState({
    name: '',
    payload: '{\n  "data": {}\n}',
    retryCount: 3
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreateTask(formData);
    setFormData({ name: '', payload: '{\n  "data": {}\n}', retryCount: 3 });
  };

  return (
    <div className="bg-white rounded-[20px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100/50 p-6 h-full flex flex-col">
      <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
        <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center">
          <Code className="text-purple-600" size={20} />
        </div>
        <div>
          <h2 className="text-lg font-bold text-gray-900 leading-tight">Create Task</h2>
          <p className="text-xs text-gray-400 font-medium">Schedule a new background job</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="flex-1 flex flex-col gap-5">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5 pl-1">Task Name</label>
          <input
            type="text"
            required
            placeholder="e.g. Process User Data"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 transition-all text-sm outline-none"
          />
        </div>

        <div className="flex-1 flex flex-col">
          <label className="block text-sm font-semibold text-gray-700 mb-1.5 pl-1">Payload (JSON)</label>
          <textarea
            required
            value={formData.payload}
            onChange={(e) => setFormData({ ...formData, payload: e.target.value })}
            className="w-full flex-1 min-h-[120px] px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 transition-all text-sm font-mono outline-none resize-none"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5 pl-1">Retry Count</label>
          <input
            type="number"
            min="0"
            max="10"
            required
            value={formData.retryCount}
            onChange={(e) => setFormData({ ...formData, retryCount: parseInt(e.target.value) })}
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 transition-all text-sm outline-none"
          />
        </div>

        <button
          type="submit"
          className="w-full flex items-center justify-center gap-2 bg-[#7c3aed] text-white px-4 py-3.5 rounded-xl font-semibold hover:bg-[#6d28d9] transition-all shadow-md mt-2 shadow-purple-500/20"
        >
          <Plus size={18} />
          <span>Create Task</span>
        </button>
      </form>
    </div>
  );
}
