import React, { useState } from 'react';
import { Mail } from 'lucide-react';
import StatusBadge from '../components/StatusBadge';
import { subscribers } from '../data/staticData';

export default function Subscribers() {
  const [subject, setSubject] = useState("This Week's Special Offer from HARVIN Farms");
  const [message, setMessage] = useState('Dear Subscriber, we have an exclusive offer just for you...');
  const [sent, setSent] = useState(false);

  const send = () => {
    if (!subject || !message) return;
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <div className="p-4 lg:p-6 animate-fade-in">
      {sent && (
        <div className="fixed top-4 right-4 z-50 bg-[#2D5241] text-white px-4 py-2 rounded-lg text-sm shadow-lg animate-fade-in flex items-center gap-2">
          <Mail size={14} /> Email sent to all 2,841 subscribers!
        </div>
      )}

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        {[
          { label: 'Total Subscribers', value: '2,841', sub: '↑ 142 this month', subColor: 'text-green-600' },
          { label: 'Open Rate',          value: '68%',   sub: '↑ 5% vs last',    subColor: 'text-green-600' },
          { label: 'Unsubscribed',       value: '123',   sub: '↑ 8 this month',  subColor: 'text-red-500' },
        ].map((s, i) => (
          <div key={s.label}
            className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 animate-fade-in-up"
            style={{ animationDelay: `${i * 60}ms`, opacity: 0 }}
          >
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">{s.label}</p>
            <p className="text-3xl font-bold text-gray-800 mt-1">{s.value}</p>
            <p className={`text-xs mt-1 ${s.subColor}`}>{s.sub}</p>
          </div>
        ))}
      </div>

      {/* Email composer */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 mb-6 animate-fade-in-up stagger-3">
        <h2 className="font-semibold text-gray-700 mb-4">Send Offer Email to All Subscribers</h2>
        <div className="space-y-4">
          <div>
            <label className="text-xs text-gray-500 mb-1 block">Subject</label>
            <input value={subject} onChange={e => setSubject(e.target.value)}
              className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#2D5241]/30" />
          </div>
          <div>
            <label className="text-xs text-gray-500 mb-1 block">Message</label>
            <textarea value={message} onChange={e => setMessage(e.target.value)} rows={4}
              className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#2D5241]/30 resize-none" />
          </div>
          <button onClick={send}
            className="bg-[#2D5241] text-white px-5 py-2 rounded-lg text-sm hover:bg-[#1E3A2F] transition-all active:scale-95 flex items-center gap-2">
            <Mail size={14} /> Send to All Subscribers
          </button>
        </div>
      </div>

      {/* Recent subscribers */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 animate-fade-in-up stagger-4">
        <div className="p-4 border-b border-gray-100">
          <h2 className="font-semibold text-gray-700">Recent Subscribers</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-xs text-gray-400 uppercase border-b border-gray-100">
                {['Email','Subscribed On','Status'].map(h => (
                  <th key={h} className="text-left py-3 px-4 font-semibold tracking-wider">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {subscribers.map((s, i) => (
                <tr key={s.email}
                  className="border-b border-gray-50 hover:bg-gray-50 transition-colors animate-fade-in-up"
                  style={{ animationDelay: `${i * 50}ms`, opacity: 0 }}
                >
                  <td className="py-3 px-4 text-gray-700">{s.email}</td>
                  <td className="py-3 px-4 text-gray-500">{s.subscribedOn}</td>
                  <td className="py-3 px-4"><StatusBadge status={s.status} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
