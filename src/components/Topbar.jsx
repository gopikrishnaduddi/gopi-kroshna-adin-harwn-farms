import React from 'react';
import { Menu, User, LogOut } from 'lucide-react';

export default function Topbar({ onMenuToggle }) {
  return (
    <header className="h-14 bg-[#1E3A2F] flex items-center justify-between px-4 lg:px-6 flex-shrink-0">
      <div className="flex items-center gap-3">
        <button onClick={onMenuToggle} className="lg:hidden text-white">
          <Menu size={20} />
        </button>
        {/* On desktop, logo is in sidebar. On mobile, show it here */}
        <span className="font-bold text-lg lg:hidden">
          <span className="text-white">HARVIN </span>
          <span className="text-[#C8862A]">Farms</span>
        </span>
      </div>
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2 text-white text-sm">
          <User size={16} className="text-white/70" />
          <span>Admin</span>
        </div>
        <button className="border border-white/40 text-white text-xs px-3 py-1.5 rounded hover:bg-white/10 transition-colors flex items-center gap-1">
          <LogOut size={13} /> Logout
        </button>
      </div>
    </header>
  );
}
