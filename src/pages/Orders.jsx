import React, { useState } from 'react';
import { Search } from 'lucide-react';
import StatusBadge from '../components/StatusBadge';
import { orders } from '../data/staticData';

const statuses = ['All Orders', 'Delivered', 'Processing', 'Shipped', 'Cancelled'];

export default function Orders() {
  const [filter, setFilter] = useState('All Orders');
  const [search, setSearch] = useState('');
  const [viewOrder, setViewOrder] = useState(null);

  const filtered = orders.filter(o => {
    const matchStatus = filter === 'All Orders' || o.status === filter;
    const matchSearch = o.id.toLowerCase().includes(search.toLowerCase()) ||
      o.customer.toLowerCase().includes(search.toLowerCase());
    return matchStatus && matchSearch;
  });

  return (
    <div className="p-4 lg:p-6 animate-fade-in">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Order Management</h1>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        {/* Filters */}
        <div className="p-4 border-b border-gray-100 flex flex-col sm:flex-row gap-3">
          <select
            value={filter}
            onChange={e => setFilter(e.target.value)}
            className="border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#2D5241]/30"
          >
            {statuses.map(s => <option key={s}>{s}</option>)}
          </select>
          <div className="relative flex-1 max-w-xs">
            <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Search order ID or customer"
              className="w-full border border-gray-200 rounded-lg pl-9 pr-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#2D5241]/30"
            />
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-xs text-gray-400 uppercase border-b border-gray-100">
                {['Order ID','Customer','Items','Amount','Payment','Status','Action'].map(h => (
                  <th key={h} className="text-left py-3 px-4 font-semibold tracking-wider">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filtered.map((o, i) => (
                <tr key={o.id}
                  className="border-b border-gray-50 hover:bg-gray-50 transition-colors animate-fade-in-up"
                  style={{ animationDelay: `${i * 40}ms`, opacity: 0 }}
                >
                  <td className="py-3 px-4 font-mono text-xs text-gray-500">{o.id}</td>
                  <td className="py-3 px-4 font-medium text-gray-700">{o.customer}</td>
                  <td className="py-3 px-4 text-gray-500 max-w-[160px] truncate">{o.items}</td>
                  <td className="py-3 px-4 text-gray-700 font-medium">₹{o.amount.toLocaleString('en-IN')}</td>
                  <td className="py-3 px-4 text-gray-500">{o.payment}</td>
                  <td className="py-3 px-4"><StatusBadge status={o.status} /></td>
                  <td className="py-3 px-4">
                    <button
                      onClick={() => setViewOrder(o)}
                      className="px-3 py-1 border border-gray-300 rounded text-xs text-gray-600 hover:bg-gray-50 transition-colors"
                    >View</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {filtered.length === 0 && (
            <div className="py-12 text-center text-gray-400 text-sm">No orders found</div>
          )}
        </div>
      </div>

      {/* View Modal */}
      {viewOrder && (
        <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-white rounded-xl shadow-xl w-full max-w-md animate-fade-in-up">
            <div className="p-5 border-b border-gray-100 flex justify-between items-center">
              <h2 className="font-semibold text-gray-800">Order {viewOrder.id}</h2>
              <button onClick={() => setViewOrder(null)} className="text-gray-400 hover:text-gray-600 text-xl leading-none">×</button>
            </div>
            <div className="p-5 space-y-3 text-sm">
              {[
                ['Customer', viewOrder.customer],
                ['Items', viewOrder.items],
                ['Amount', `₹${viewOrder.amount.toLocaleString('en-IN')}`],
                ['Payment', viewOrder.payment],
                ['Date', viewOrder.date],
              ].map(([k, v]) => (
                <div key={k} className="flex justify-between">
                  <span className="text-gray-500">{k}</span>
                  <span className="font-medium text-gray-700">{v}</span>
                </div>
              ))}
              <div className="flex justify-between items-center">
                <span className="text-gray-500">Status</span>
                <StatusBadge status={viewOrder.status} />
              </div>
            </div>
            <div className="p-4 border-t border-gray-100">
              <button onClick={() => setViewOrder(null)}
                className="w-full bg-[#2D5241] text-white py-2 rounded-lg text-sm hover:bg-[#1E3A2F] transition-colors">
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
