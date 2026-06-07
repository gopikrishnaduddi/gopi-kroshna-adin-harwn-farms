import React from 'react';

export default function StatCard({ label, value, sub, icon, delay = 0 }) {
  return (
    <div
      className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 animate-fade-in-up"
      style={{ animationDelay: `${delay}ms`, opacity: 0 }}
    >
      <div className="flex items-start justify-between">
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">{label}</p>
        <span className="text-2xl">{icon}</span>
      </div>
      <p className="text-2xl font-bold text-gray-800 mt-2">{value}</p>
      {sub && <p className="text-xs text-green-600 mt-1 flex items-center gap-0.5">↑ {sub}</p>}
    </div>
  );
}
