import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import Dashboard from './pages/Dashboard';
import Orders from './pages/Orders';
import Products from './pages/Products';
import Coupons from './pages/Coupons';
import Subscribers from './pages/Subscribers';
import Reports from './pages/Reports';
import Settings from './pages/Settings';

const pages = {
  dashboard:   Dashboard,
  orders:      Orders,
  products:    Products,
  coupons:     Coupons,
  subscribers: Subscribers,
  reports:     Reports,
  settings:    Settings,
};

export default function App() {
  const [active, setActive] = useState('dashboard');
  const [mobileOpen, setMobileOpen] = useState(false);

  const Page = pages[active] || Dashboard;

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      {/* Sidebar */}
      <Sidebar
        active={active}
        setActive={setActive}
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
      />

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <Topbar onMenuToggle={() => setMobileOpen(true)} />
        <main className="flex-1 overflow-y-auto">
          <Page key={active} />
        </main>
      </div>
    </div>
  );
}
