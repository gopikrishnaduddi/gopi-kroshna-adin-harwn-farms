import React from 'react';
import { topProducts, categoryData } from '../data/staticData';
import { Download, FileText, Table2 } from 'lucide-react';

export default function Reports() {
  const exportCSV = () => {
    const rows = [['Product','Units Sold','Revenue'], ...topProducts.map(p => [p.name, p.units, p.revenue])];
    const csv = rows.map(r => r.join(',')).join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const a = document.createElement('a'); a.href = URL.createObjectURL(blob);
    a.download = 'harvin-farms-sales.csv'; a.click();
  };

  return (
    <div className="p-4 lg:p-6 animate-fade-in">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Sales & Profit Reports</h1>

      {/* KPI Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {[
          { label: 'Gross Revenue',  value: '₹4,82,350', sub: '↑ 23% vs last month', color: 'text-green-600' },
          { label: 'Cost of Goods',  value: '₹2,14,820', sub: '↑ 12% vs last month', color: 'text-red-500' },
          { label: 'Gross Profit',   value: '₹2,67,530', sub: '↑ 31% vs last month', color: 'text-green-600' },
          { label: 'Profit Margin',  value: '55.5%',     sub: '↑ 4.2% vs last month', color: 'text-green-600' },
        ].map((c, i) => (
          <div key={c.label}
            className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 animate-fade-in-up"
            style={{ animationDelay: `${i * 60}ms`, opacity: 0 }}
          >
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">{c.label}</p>
            <p className="text-xl lg:text-2xl font-bold text-gray-800 mt-2">{c.value}</p>
            <p className={`text-xs mt-1 ${c.color}`}>{c.sub}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Top Products */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 animate-fade-in-up stagger-3">
          <div className="p-4 border-b border-gray-100">
            <h2 className="font-semibold text-gray-700">Top Selling Products</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-xs text-gray-400 uppercase border-b border-gray-100">
                  {['Product','Units Sold','Revenue'].map(h => (
                    <th key={h} className="text-left py-3 px-4 font-semibold tracking-wider">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {topProducts.map((p, i) => (
                  <tr key={p.name}
                    className="border-b border-gray-50 hover:bg-gray-50 transition-colors animate-fade-in-up"
                    style={{ animationDelay: `${i * 50}ms`, opacity: 0 }}
                  >
                    <td className="py-3 px-4 font-medium text-gray-700">{p.name}</td>
                    <td className="py-3 px-4 text-gray-600">{p.units}</td>
                    <td className="py-3 px-4 text-gray-700 font-medium">₹{p.revenue.toLocaleString('en-IN')}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Revenue by Category */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 animate-fade-in-up stagger-4">
          <div className="p-4 border-b border-gray-100">
            <h2 className="font-semibold text-gray-700">Revenue by Category</h2>
          </div>
          <div className="p-4 space-y-3">
            {categoryData.map((c, i) => (
              <div key={c.name} className="flex items-center gap-3">
                <div className="w-24 text-sm text-gray-600 flex-shrink-0">{c.name}</div>
                <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full rounded-full animate-bar-grow"
                    style={{ width: `${c.pct}%`, backgroundColor: c.color, animationDelay: `${i * 100}ms` }} />
                </div>
                <div className="w-20 text-right text-sm text-gray-700">₹{(c.revenue/1000).toFixed(0)}k</div>
                <div className="w-10 text-right">
                  <span className="text-xs px-1.5 py-0.5 rounded-full font-medium"
                    style={{ backgroundColor: c.color + '22', color: c.color }}>
                    {c.pct}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Export */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 animate-fade-in-up stagger-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
          <h2 className="font-semibold text-gray-700">Export Reports</h2>
          <span className="text-xs text-gray-400">Download for your records</span>
        </div>
        <div className="flex flex-wrap gap-3">
          <button onClick={exportCSV}
            className="flex items-center gap-2 bg-[#2D5241] text-white px-4 py-2 rounded-lg text-sm hover:bg-[#1E3A2F] transition-all active:scale-95">
            <Table2 size={15} /> Export Sales CSV
          </button>
          <button className="flex items-center gap-2 bg-blue-700 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-800 transition-all active:scale-95">
            <FileText size={15} /> Export Excel Report
          </button>
          <button className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-red-700 transition-all active:scale-95">
            <Download size={15} /> Download PDF Report
          </button>
        </div>
      </div>
    </div>
  );
}
