import React, { useState } from 'react';

export default function Settings() {
  const [store, setStore] = useState({ name: 'HARVIN Farms', phone: '+91 98765 43210', email: 'hello@harvinfarms.in', gstin: '', address: '' });
  const [delivery, setDelivery] = useState({ freeAbove: '499', chargeBelow: '49' });
  const [pwd, setPwd] = useState({ current: '', newPwd: '' });
  const [toast, setToast] = useState('');

  const showToast = (m) => { setToast(m); setTimeout(() => setToast(''), 2500); };

  return (
    <div className="p-4 lg:p-6 animate-fade-in">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Store Settings</h1>

      {toast && (
        <div className="fixed top-4 right-4 z-50 bg-[#2D5241] text-white px-4 py-2 rounded-lg text-sm shadow-lg animate-fade-in">
          {toast}
        </div>
      )}

      {/* Store Info */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 mb-4 animate-fade-in-up stagger-1">
        <h2 className="font-semibold text-gray-700 mb-4">Store Information</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { label: 'Store Name', key: 'name', placeholder: 'HARVIN Farms' },
            { label: 'Phone', key: 'phone', placeholder: '+91 98765 43210' },
            { label: 'Email', key: 'email', placeholder: 'hello@harvinfarms.in' },
            { label: 'GST Number', key: 'gstin', placeholder: 'GSTIN' },
          ].map(f => (
            <div key={f.key}>
              <label className="text-xs text-gray-500 mb-1 block">{f.label}</label>
              <input value={store[f.key]} onChange={e => setStore(p => ({...p, [f.key]: e.target.value}))}
                placeholder={f.placeholder}
                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#2D5241]/30" />
            </div>
          ))}
          <div className="sm:col-span-2">
            <label className="text-xs text-gray-500 mb-1 block">Store Address</label>
            <input value={store.address} onChange={e => setStore(p => ({...p, address: e.target.value}))}
              placeholder="Full address"
              className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#2D5241]/30" />
          </div>
        </div>
        <button onClick={() => showToast('Settings saved!')}
          className="mt-4 bg-[#2D5241] text-white px-5 py-2 rounded-lg text-sm hover:bg-[#1E3A2F] transition-all active:scale-95">
          Save Settings
        </button>
      </div>

      {/* Delivery Settings */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 mb-4 animate-fade-in-up stagger-2">
        <h2 className="font-semibold text-gray-700 mb-4">Delivery Settings</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="text-xs text-gray-500 mb-1 block">Free Delivery Above (₹)</label>
            <input value={delivery.freeAbove} onChange={e => setDelivery(p => ({...p, freeAbove: e.target.value}))}
              type="number"
              className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#2D5241]/30" />
          </div>
          <div>
            <label className="text-xs text-gray-500 mb-1 block">Delivery Charge Below Min (₹)</label>
            <input value={delivery.chargeBelow} onChange={e => setDelivery(p => ({...p, chargeBelow: e.target.value}))}
              type="number"
              className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#2D5241]/30" />
          </div>
        </div>
        <button onClick={() => showToast('Delivery settings saved!')}
          className="mt-4 bg-[#2D5241] text-white px-5 py-2 rounded-lg text-sm hover:bg-[#1E3A2F] transition-all active:scale-95">
          Save Delivery Settings
        </button>
      </div>

      {/* Change Password */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 animate-fade-in-up stagger-3">
        <h2 className="font-semibold text-gray-700 mb-4">Change Admin Password</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="text-xs text-gray-500 mb-1 block">Current Password</label>
            <input type="password" value={pwd.current} onChange={e => setPwd(p => ({...p, current: e.target.value}))}
              className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#2D5241]/30" />
          </div>
          <div>
            <label className="text-xs text-gray-500 mb-1 block">New Password</label>
            <input type="password" value={pwd.newPwd} onChange={e => setPwd(p => ({...p, newPwd: e.target.value}))}
              className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#2D5241]/30" />
          </div>
        </div>
        <button onClick={() => { if (pwd.current && pwd.newPwd) showToast('Password updated!'); }}
          className="mt-4 bg-[#2D5241] text-white px-5 py-2 rounded-lg text-sm hover:bg-[#1E3A2F] transition-all active:scale-95">
          Update Password
        </button>
      </div>
    </div>
  );
}
