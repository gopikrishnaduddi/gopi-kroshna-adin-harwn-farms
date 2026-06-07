export const orders = [
  { id: '#ORD-1847', customer: 'Priya Sharma',  items: 'Wheat Flour, Mango Oil',       amount: 1240, payment: 'UPI',  status: 'Delivered',  date: 'Today' },
  { id: '#ORD-1846', customer: 'Rahul Verma',   items: 'Brown Rice, Tomatoes',          amount: 780,  payment: 'COD',  status: 'Processing', date: 'Today' },
  { id: '#ORD-1845', customer: 'Sunita Patel',  items: 'Cold Pressed Oil, Turmeric',   amount: 2350, payment: 'Card', status: 'Shipped',    date: 'Yesterday' },
  { id: '#ORD-1844', customer: 'Amit Kumar',    items: 'Organic Dal Mix',              amount: 560,  payment: 'UPI',  status: 'Delivered',  date: 'Yesterday' },
  { id: '#ORD-1843', customer: 'Deepa Nair',    items: 'Organic Basket',               amount: 1890, payment: 'Card', status: 'Cancelled',  date: '2 days ago' },
];

export const products = [
  { id: 1, icon: '🌾', name: 'Organic Wheat Flour',       category: 'grains',     price: 189, originalPrice: 250, unit: '5 kg' },
  { id: 2, icon: '🍚', name: 'Brown Rice',                category: 'grains',     price: 140, originalPrice: 180, unit: '1 kg' },
  { id: 3, icon: '🫘', name: 'Organic Toor Dal',          category: 'grains',     price: 165, originalPrice: 200, unit: '1 kg' },
  { id: 4, icon: '🌾', name: 'Barnyard Millet',           category: 'grains',     price: 120, originalPrice: 150, unit: '500g' },
  { id: 5, icon: '🍅', name: 'Fresh Tomatoes',            category: 'vegetables', price: 60,  originalPrice: 80,  unit: '1 kg' },
  { id: 6, icon: '🥦', name: 'Organic Broccoli',          category: 'vegetables', price: 90,  originalPrice: 120, unit: '500g' },
  { id: 7, icon: '🥕', name: 'Fresh Carrots',             category: 'vegetables', price: 50,  originalPrice: 70,  unit: '1 kg' },
  { id: 8, icon: '🫒', name: 'Cold Pressed Coconut Oil',  category: 'oils',       price: 350, originalPrice: 420, unit: '500 ml' },
  { id: 9, icon: '🌻', name: 'Sunflower Oil',             category: 'oils',       price: 180, originalPrice: 220, unit: '1 litre' },
  { id: 10,icon: '🥭', name: 'Mango Oil',                 category: 'oils',       price: 290, originalPrice: 350, unit: '500 ml' },
  { id: 11,icon: '🍎', name: 'Fresh Apples',              category: 'fruits',     price: 180, originalPrice: 220, unit: '1 kg' },
  { id: 12,icon: '🍋', name: 'Fresh Lemons',              category: 'fruits',     price: 60,  originalPrice: 80,  unit: '500g' },
  { id: 13,icon: '🥛', name: 'Pure Cow Milk',             category: 'dairy',      price: 60,  originalPrice: 75,  unit: '1 litre' },
  { id: 14,icon: '🧀', name: 'Homemade Paneer',           category: 'dairy',      price: 120, originalPrice: 150, unit: '250g' },
  { id: 15,icon: '🧈', name: 'Pure Desi Ghee',            category: 'dairy',      price: 580, originalPrice: 650, unit: '500g' },
  { id: 16,icon: '🌶️', name: 'Red Chilli Powder',         category: 'spices',     price: 80,  originalPrice: 100, unit: '200g' },
  { id: 17,icon: '💛', name: 'Organic Turmeric',          category: 'spices',     price: 70,  originalPrice: 90,  unit: '200g' },
  { id: 18,icon: '🌿', name: 'Organic Dal Mix',           category: 'grains',     price: 220, originalPrice: 280, unit: '1 kg' },
];

export const coupons = [
  { code: 'HARVIN10', type: 'Percentage', value: '10%', minOrder: 299, validTill: '31 Dec 2024', used: '234/500', status: 'Active' },
  { code: 'FRESH20',  type: 'Percentage', value: '20%', minOrder: 999, validTill: '15 Dec 2024', used: '87/200',  status: 'Active' },
  { code: 'NEWUSER',  type: 'Free Delivery', value: '—', minOrder: 199, validTill: '31 Dec 2024', used: '412/1000', status: 'Active' },
];

export const subscribers = [
  { email: 'priya.sharma@gmail.com',  subscribedOn: '2 hours ago',  status: 'Active' },
  { email: 'rahul.v@yahoo.com',       subscribedOn: '1 day ago',    status: 'Active' },
  { email: 'sunita.p@outlook.com',    subscribedOn: '2 days ago',   status: 'Active' },
  { email: 'amit.k@gmail.com',        subscribedOn: '3 days ago',   status: 'Pending' },
  { email: 'deepa.n@gmail.com',       subscribedOn: '1 week ago',   status: 'Unsubscribed' },
];

export const monthlyRevenue = [
  { month: 'Jun', amount: 38000 },
  { month: 'Jul', amount: 52000 },
  { month: 'Aug', amount: 44000 },
  { month: 'Sep', amount: 61000 },
  { month: 'Oct', amount: 55000 },
  { month: 'Nov', amount: 72000 },
  { month: 'Dec', amount: 82000 },
];

export const categoryData = [
  { name: 'Grains',     pct: 38, revenue: 182400, color: '#2D5241' },
  { name: 'Oils',       pct: 23, revenue: 108720, color: '#C8862A' },
  { name: 'Vegetables', pct: 15, revenue: 72350,  color: '#4A7C59' },
  { name: 'Fruits',     pct: 12, revenue: 57880,  color: '#E05A3A' },
  { name: 'Dairy',      pct: 12, revenue: 61000,  color: '#3B6FA0' },
];

export const topProducts = [
  { name: 'Organic Wheat Flour',      units: 842, revenue: 126300 },
  { name: 'Cold Pressed Coconut Oil', units: 634, revenue: 114120 },
  { name: 'Brown Rice',               units: 521, revenue: 72940  },
  { name: 'Organic Tomatoes',         units: 489, revenue: 29340  },
  { name: 'Pure Desi Ghee',           units: 312, revenue: 93600  },
];
