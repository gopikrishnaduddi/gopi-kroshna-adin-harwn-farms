import React, { useState } from 'react';
import { products as initialProducts } from '../data/staticData';

const categories = ['Food Grains', 'Vegetables', 'Oils & Ghee', 'Fruits', 'Dairy', 'Spices'];
const catKey = { 'Food Grains': 'grains', 'Vegetables': 'vegetables', 'Oils & Ghee': 'oils', 'Fruits': 'fruits', 'Dairy': 'dairy', 'Spices': 'spices' };

export default function Products() {
  const [prods, setProds] = useState(initialProducts);
  const [form, setForm] = useState({ name: '', category: 'Food Grains', price: '', originalPrice: '', unit: '', icon: '🌿', badge: '' });
  const [toast, setToast] = useState('');

  const showToast = (msg) => { setToast(msg); setTimeout(() => setToast(''), 2500); };

  const addProduct = () => {
    if (!form.name || !form.price) return showToast('Fill in name and price');
    const p = {
      id: Date.now(), icon: form.icon, name: form.name,
      category: catKey[form.category] || 'grains',
      price: Number(form.price), originalPrice: Number(form.originalPrice) || Number(form.price),
      unit: form.unit, badge: form.badge
    };
    setProds(prev => [p, ...prev]);
    setForm({ name: '', category: 'Food Grains', price: '', originalPrice: '', unit: '', icon: '🌿', badge: '' });
    showToast('Product added!');
  };

  const remove = (id) => { setProds(p => p.filter(x => x.id !== id)); showToast('Product removed'); };

  return (
    <div className="p-4 lg:p-6 animate-fade-in">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Product Management</h1>

      {/* Toast */}
      {toast && (
        <div className="fixed top-4 right-4 z-50 bg-[#2D5241] text-white px-4 py-2 rounded-lg text-sm shadow-lg animate-fade-in">
          {toast}
        </div>
      )}

      {/* Add form */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 mb-6">
        <h2 className="font-semibold text-gray-700 mb-4">Add New Product</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="text-xs text-gray-500 mb-1 block">Product Name</label>
            <input value={form.name} onChange={e => setForm(f => ({...f, name: e.target.value}))}
              placeholder="e.g. Organic Wheat Flour"
              className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#2D5241]/30" />
          </div>
          <div>
            <label className="text-xs text-gray-500 mb-1 block">Category</label>
            <select value={form.category} onChange={e => setForm(f => ({...f, category: e.target.value}))}
              className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#2D5241]/30">
              {categories.map(c => <option key={c}>{c}</option>)}
            </select>
          </div>
          <div>
            <label className="text-xs text-gray-500 mb-1 block">Price (₹)</label>
            <input value={form.price} onChange={e => setForm(f => ({...f, price: e.target.value}))}
              placeholder="299" type="number"
              className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#2D5241]/30" />
          </div>
          <div>
            <label className="text-xs text-gray-500 mb-1 block">Original Price (₹)</label>
            <input value={form.originalPrice} onChange={e => setForm(f => ({...f, originalPrice: e.target.value}))}
              placeholder="399" type="number"
              className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#2D5241]/30" />
          </div>
          <div>
            <label className="text-xs text-gray-500 mb-1 block">Unit</label>
            <input value={form.unit} onChange={e => setForm(f => ({...f, unit: e.target.value}))}
              placeholder="1 kg / 500g / 1 litre"
              className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#2D5241]/30" />
          </div>
          <div>
            <label className="text-xs text-gray-500 mb-1 block">Emoji/Icon</label>
            <input value={form.icon} onChange={e => setForm(f => ({...f, icon: e.target.value}))}
              placeholder="🌿"
              className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#2D5241]/30" />
          </div>
          <div>
            <label className="text-xs text-gray-500 mb-1 block">Badge (optional)</label>
            <input value={form.badge} onChange={e => setForm(f => ({...f, badge: e.target.value}))}
              placeholder="Bestseller / New / Offer"
              className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#2D5241]/30" />
          </div>
        </div>
        <button onClick={addProduct}
          className="mt-4 bg-[#2D5241] text-white px-5 py-2 rounded-lg text-sm hover:bg-[#1E3A2F] transition-all duration-200 active:scale-95">
          + Add Product
        </button>
      </div>

      {/* Products list */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        <div className="p-4 border-b border-gray-100 flex justify-between items-center">
          <h2 className="font-semibold text-gray-700">All Products</h2>
          <span className="text-xs text-gray-400">({prods.length} products)</span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-xs text-gray-400 uppercase border-b border-gray-100">
                {['Icon','Name','Category','Price','Unit','Action'].map(h => (
                  <th key={h} className="text-left py-3 px-4 font-semibold tracking-wider">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {prods.map((p, i) => (
                <tr key={p.id}
                  className="border-b border-gray-50 hover:bg-gray-50 transition-colors animate-fade-in-up"
                  style={{ animationDelay: `${i * 30}ms`, opacity: 0 }}
                >
                  <td className="py-3 px-4 text-xl">{p.icon}</td>
                  <td className="py-3 px-4 font-medium text-gray-700">
                    {p.name}
                    {p.badge && <span className="ml-2 text-xs bg-amber-100 text-amber-700 px-1.5 py-0.5 rounded">{p.badge}</span>}
                  </td>
                  <td className="py-3 px-4">
                    <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-700">{p.category}</span>
                  </td>
                  <td className="py-3 px-4 text-gray-700">
                    ₹{p.price}
                    {p.originalPrice > p.price && (
                      <span className="ml-1 line-through text-gray-400 text-xs">₹{p.originalPrice}</span>
                    )}
                  </td>
                  <td className="py-3 px-4 text-gray-500">{p.unit}</td>
                  <td className="py-3 px-4">
                    <button onClick={() => remove(p.id)}
                      className="px-3 py-1 bg-red-50 text-red-500 rounded text-xs hover:bg-red-100 transition-colors">
                      Remove
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
