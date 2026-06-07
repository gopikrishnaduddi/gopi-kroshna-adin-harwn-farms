# HARVIN Farms — Admin Panel

A responsive React + Tailwind CSS admin panel for HARVIN Farms.

## ✅ Setup Instructions

### Prerequisites
- Node.js v18+ installed ([download here](https://nodejs.org))
- npm (comes with Node.js)

### Steps

1. **Extract the ZIP** to any folder on your computer.

2. **Open terminal** inside the `harvin-farms-admin` folder.

3. **Install dependencies:**
   ```bash
   npm install
   ```
   *(This downloads ~50MB of packages into a `node_modules` folder. One-time step.)*

4. **Start the dev server:**
   ```bash
   npm run dev
   ```

5. **Open in browser:** http://localhost:5173

---

## 📦 Build for Production

```bash
npm run build
```
Output goes to the `dist/` folder — deploy that anywhere (Netlify, Vercel, Nginx, etc).

---

## 📁 Project Structure

```
harvin-farms-admin/
├── src/
│   ├── components/
│   │   ├── Sidebar.jsx       ← Navigation sidebar
│   │   ├── Topbar.jsx        ← Top header bar
│   │   ├── StatCard.jsx      ← Stat summary cards
│   │   └── StatusBadge.jsx   ← Colored status pills
│   ├── pages/
│   │   ├── Dashboard.jsx     ← Dashboard with charts
│   │   ├── Orders.jsx        ← Order management + search
│   │   ├── Products.jsx      ← Product CRUD
│   │   ├── Coupons.jsx       ← Coupon management
│   │   ├── Subscribers.jsx   ← Subscriber email composer
│   │   ├── Reports.jsx       ← Sales reports + CSV export
│   │   └── Settings.jsx      ← Store / delivery / password
│   ├── data/
│   │   └── staticData.js     ← All static mock data
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css             ← Tailwind + custom animations
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

---

## 🎨 Features

- ✅ All 7 pages: Dashboard, Orders, Products, Coupons, Subscribers, Reports, Settings
- ✅ Responsive — works on mobile, tablet, desktop
- ✅ Animated page transitions and staggered row entries
- ✅ Interactive revenue chart (Recharts AreaChart)
- ✅ Animated category progress bars
- ✅ Add/Remove products (live state)
- ✅ Create/Delete coupons (live state)
- ✅ Order search + filter by status
- ✅ Order detail modal
- ✅ CSV export from Reports page
- ✅ Toast notifications for actions
- ✅ Mobile sidebar with hamburger menu
