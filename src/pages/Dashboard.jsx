import React from 'react';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';
import StatCard from '../components/StatCard';
import StatusBadge from '../components/StatusBadge';
import { orders, monthlyRevenue, categoryData } from '../data/staticData';

const fmt = (n) => `₹${n.toLocaleString('en-IN')}`;

export default function Dashboard() {
  return (
    <div className="p-4 lg:p-6 space-y-6 animate-fade-in">
      <h1 className="text-2xl font-bold text-gray-800">Dashboard Overview</h1>

      {/* Stat cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard label="Total Revenue"   value="₹4,82,350" sub="23% vs last month" icon="💰" delay={0} />
        <StatCard label="Total Orders"    value="1,847"     sub="18% vs last month" icon="📦" delay={60} />
        <StatCard label="Customers"       value="3,241"     sub="12% new this month" icon="👥" delay={120} />
        <StatCard label="Products Active" value="18"        sub="3 added this week"  icon="🌿" delay={180} />
      </div>

      {/* Charts row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Monthly Revenue */}
        <div className="lg:col-span-2 bg-white rounded-xl p-5 shadow-sm border border-gray-100 animate-fade-in-up stagger-3">
          <h2 className="text-sm font-semibold text-gray-700 mb-4">Monthly Revenue (₹)</h2>
          <ResponsiveContainer width="100%" height={200}>
            <AreaChart data={monthlyRevenue} margin={{ top: 4, right: 4, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="revGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%"  stopColor="#2D5241" stopOpacity={0.25} />
                  <stop offset="95%" stopColor="#2D5241" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="month" tick={{ fontSize: 11, fill: '#9CA3AF' }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 10, fill: '#9CA3AF' }} axisLine={false} tickLine={false}
                tickFormatter={v => `₹${v/1000}k`} />
              <Tooltip formatter={v => [`₹${v.toLocaleString('en-IN')}`, 'Revenue']}
                contentStyle={{ fontSize: 12, borderRadius: 8, border: '1px solid #e5e7eb' }} />
              <Area type="monotone" dataKey="amount" stroke="#2D5241" strokeWidth={2}
                fill="url(#revGrad)" dot={{ fill: '#2D5241', r: 3 }} activeDot={{ r: 5 }} />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Category Sales */}
        <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 animate-fade-in-up stagger-4">
          <h2 className="text-sm font-semibold text-gray-700 mb-4">Category Sales</h2>
          <div className="space-y-3">
            {categoryData.map((c, i) => (
              <div key={c.name}>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-gray-600">{c.name}</span>
                  <span className="font-semibold text-gray-700">{c.pct}%</span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full animate-bar-grow"
                    style={{ width: `${c.pct}%`, backgroundColor: c.color, animationDelay: `${i * 100}ms` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Orders */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 animate-fade-in-up stagger-5">
        <div className="p-5 border-b border-gray-100">
          <h2 className="text-sm font-semibold text-gray-700">Recent Orders</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-xs text-gray-400 uppercase border-b border-gray-100">
                <th className="text-left py-3 px-5 font-semibold tracking-wider">Order ID</th>
                <th className="text-left py-3 px-3 font-semibold tracking-wider">Customer</th>
                <th className="text-left py-3 px-3 font-semibold tracking-wider">Amount</th>
                <th className="text-left py-3 px-3 font-semibold tracking-wider">Status</th>
                <th className="text-left py-3 px-3 font-semibold tracking-wider">Date</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((o, i) => (
                <tr key={o.id}
                  className="border-b border-gray-50 hover:bg-gray-50 transition-colors animate-fade-in-up"
                  style={{ animationDelay: `${i * 50 + 200}ms`, opacity: 0 }}
                >
                  <td className="py-3 px-5 font-mono text-xs text-gray-500">{o.id}</td>
                  <td className="py-3 px-3 font-medium text-gray-700">{o.customer}</td>
                  <td className="py-3 px-3 text-gray-700">₹{o.amount.toLocaleString('en-IN')}</td>
                  <td className="py-3 px-3"><StatusBadge status={o.status} /></td>
                  <td className="py-3 px-3 text-gray-500">{o.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
