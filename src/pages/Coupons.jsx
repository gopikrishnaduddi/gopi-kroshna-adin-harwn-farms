import React, { useState } from 'react';
import { coupons as initial } from '../data/staticData';

export default function Coupons() {
  const [coupons, setCoupons] = useState(initial);
  const [form, setForm] = useState({ code: 'HARVIN20', type: 'Percentage (%)', value: '10', minOrder: '499', validTill: '', usageLimit: '100' });
  const [toast, setToast] = useState('');

  const showToast = (m) => { setToast(m); setTimeout(() => setToast(''), 2500); };

  const create = () => {
    if (!form.code) return showToast('Enter coupon code');
    setCoupons(p => [...p, {
      code: form.code.toUpperCase(), type: form.type.replace(' (%)', ''), value: form.type.includes('%') ? `${form.value}%` : '—',
      minOrder: Number(form.minOrder), validTill: form.validTill || 'No expiry',
      used: `0/${form.usageLimit}`, status: 'Active'
    }]);
    setForm({ code: '', type: 'Percentage (%)', value: '', minOrder: '', validTill: '', usageLimit: '' });
    showToast('Coupon created!');
  };

  const del = (code) => { setCoupons(p => p.filter(c => c.code !== code)); showToast('Coupon deleted'); };

  return (
    <div className="p-4 lg:p-6 animate-fade-in">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Coupons & Offers</h1>

      {toast && (
        <div className="fixed top-4 right-4 z-50 bg-[#2D5241] text-white px-4 py-2 rounded-lg text-sm shadow-lg animate-fade-in">
          {toast}
        </div>
      )}

      {/* Create form */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 mb-6">
        <h2 className="font-semibold text-gray-700 mb-4">Create New Coupon</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { label: 'Coupon Code', key: 'code', placeholder: 'HARVIN20' },
            { label: 'Discount Value', key: 'value', placeholder: '10', type: 'number' },
            { label: 'Min Order Amount (₹)', key: 'minOrder', placeholder: '499', type: 'number' },
            { label: 'Usage Limit', key: 'usageLimit', placeholder: '100', type: 'number' },
          ].map(f => (
            <div key={f.key}>
              <label className="text-xs text-gray-500 mb-1 block">{f.label}</label>
              <input value={form[f.key]} onChange={e => setForm(p => ({...p, [f.key]: e.target.value}))}
                placeholder={f.placeholder} type={f.type || 'text'}
                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#2D5241]/30" />
            </div>
          ))}
          <div>
            <label className="text-xs text-gray-500 mb-1 block">Discount Type</label>
            <select value={form.type} onChange={e => setForm(p => ({...p, type: e.target.value}))}
              className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#2D5241]/30">
              <option>Percentage (%)</option><option>Flat (₹)</option><option>Free Delivery</option>
            </select>
          </div>
          <div>
            <label className="text-xs text-gray-500 mb-1 block">Valid Till</label>
            <input type="date" value={form.validTill} onChange={e => setForm(p => ({...p, validTill: e.target.value}))}
              className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#2D5241]/30" />
          </div>
        </div>
        <button onClick={create}
          className="mt-4 bg-[#2D5241] text-white px-5 py-2 rounded-lg text-sm hover:bg-[#1E3A2F] transition-all active:scale-95">
          + Create Coupon
        </button>
      </div>

      {/* Active coupons */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        <div className="p-4 border-b border-gray-100">
          <h2 className="font-semibold text-gray-700">Active Coupons</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-xs text-gray-400 uppercase border-b border-gray-100">
                {['Code','Type','Value','Min Order','Valid Till','Used','Status','Action'].map(h => (
                  <th key={h} className="text-left py-3 px-4 font-semibold tracking-wider">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {coupons.map((c, i) => (
                <tr key={c.code}
                  className="border-b border-gray-50 hover:bg-gray-50 transition-colors animate-fade-in-up"
                  style={{ animationDelay: `${i * 50}ms`, opacity: 0 }}
                >
                  <td className="py-3 px-4 font-bold text-gray-800">{c.code}</td>
                  <td className="py-3 px-4 text-gray-600">{c.type}</td>
                  <td className="py-3 px-4 text-gray-600">{c.value}</td>
                  <td className="py-3 px-4 text-gray-600">₹{c.minOrder}</td>
                  <td className="py-3 px-4 text-gray-600">{c.validTill}</td>
                  <td className="py-3 px-4 text-gray-600">{c.used}</td>
                  <td className="py-3 px-4">
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-700">{c.status}</span>
                  </td>
                  <td className="py-3 px-4">
                    <button onClick={() => del(c.code)}
                      className="px-3 py-1 bg-red-50 text-red-500 rounded text-xs hover:bg-red-100 transition-colors">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
