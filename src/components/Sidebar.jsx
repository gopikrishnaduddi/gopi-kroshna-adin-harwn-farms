import React from 'react';
import {
  LayoutDashboard, ShoppingBag, Leaf, Tag, Users, BarChart2, Settings, LogOut, Menu, X
} from 'lucide-react';

const navItems = [
  { id: 'dashboard',   label: 'Dashboard',      icon: LayoutDashboard },
  { id: 'orders',      label: 'Orders',         icon: ShoppingBag },
  { id: 'products',    label: 'Products',       icon: Leaf },
  { id: 'coupons',     label: 'Coupons & Offers', icon: Tag },
  { id: 'subscribers', label: 'Subscribers',    icon: Users },
  { id: 'reports',     label: 'Reports',        icon: BarChart2 },
  { id: 'settings',    label: 'Settings',       icon: Settings },
];

export default function Sidebar({ active, setActive, mobileOpen, setMobileOpen }) {
  return (
    <>
      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-20 lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed top-0 left-0 h-full z-30 w-56 bg-white shadow-lg flex flex-col
        transition-transform duration-300
        ${mobileOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:translate-x-0 lg:static lg:z-auto lg:shadow-none
      `}>
        {/* Logo */}
        <div className="h-14 flex items-center justify-between px-4 bg-[#1E3A2F]">
          <span className="font-bold text-lg">
            <span className="text-white">HARVIN </span>
            <span className="text-[#C8862A]">Farms</span>
            <span className="text-white/60 text-xs font-normal ml-1">— Admin</span>
          </span>
          <button className="lg:hidden text-white" onClick={() => setMobileOpen(false)}>
            <X size={18} />
          </button>
        </div>

        {/* Nav */}
        <nav className="flex-1 py-4 overflow-y-auto">
          {navItems.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => { setActive(id); setMobileOpen(false); }}
              className={`
                w-full flex items-center gap-3 px-4 py-2.5 text-sm font-medium transition-all duration-200
                ${active === id
                  ? 'bg-[#E8F4EC] text-[#1E3A2F] border-l-[3px] border-[#2D5241]'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-[#1E3A2F] border-l-[3px] border-transparent'}
              `}
            >
              <Icon size={17} className={active === id ? 'text-[#2D5241]' : 'text-gray-400'} />
              {label}
            </button>
          ))}
        </nav>

        <div className="p-4 border-t">
          <button className="w-full flex items-center gap-2 text-sm text-gray-500 hover:text-red-500 transition-colors">
            <LogOut size={15} /> Logout
          </button>
        </div>
      </aside>
    </>
  );
}
