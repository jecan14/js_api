const express = require('express');
const cors = require('cors');
const app = express();

// IMPORTANT: Render uses dynamic port
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// ================= PRODUCTS =================
const products = [
  { id: 1, name: 'AMD Ryzen 9 7950X', price: 32450, category: 'Processor', tag: 'HOT', rating: 4.9, reviews: 128, isFavorite: false, img: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=500&auto=format', desc: '16 Cores, 32 Threads, 5.7GHz Max Boost' },
  { id: 2, name: 'GeForce RTX 4090', price: 98000, category: 'Graphics Card', tag: 'SALE', rating: 5.0, reviews: 85, isFavorite: true, img: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?w=500&auto=format', desc: 'The ultimate GeForce GPU. It brings an enormous leap in performance.' },
  { id: 3, name: 'ASUS ROG Crosshair X670E', price: 28500, category: 'Motherboard', tag: 'NEW', rating: 4.7, reviews: 42, isFavorite: false, img: 'https://images.unsplash.com/photo-1555617766-c94804975da3?w=500&auto=format', desc: 'Unmatched power delivery and overclocking features for AM5.' },
  { id: 4, name: '32GB DDR5 RAM Kit', price: 7800, category: 'Memory', tag: 'SALE', rating: 4.8, reviews: 210, isFavorite: false, img: 'https://images.unsplash.com/photo-1562976540-1502c2145186?w=500&auto=format', desc: 'High-performance DDR5 memory optimized for AMD systems.' },
  { id: 5, name: 'Samsung 990 Pro 2TB', price: 12500, category: 'Storage', tag: 'NEW', rating: 4.9, reviews: 320, isFavorite: false, img: 'https://images.unsplash.com/photo-1597852074816-d933c4d2b988?w=500&auto=format', desc: 'PCIe 4.0 NVMe M.2 SSD for elite gaming and creative work.' },
  { id: 6, name: 'NZXT Kraken Elite 360', price: 15400, category: 'Cooling', tag: 'HOT', rating: 4.8, reviews: 56, isFavorite: false, img: 'https://images.unsplash.com/photo-1587202372580-0447545934bc?w=500&auto=format', desc: '360mm AIO Liquid Cooler with Customizable LCD Display.' },
  { id: 7, name: 'EVGA SuperNOVA 1000 G7', price: 11200, category: 'Power Supply', tag: 'SALE', rating: 4.9, reviews: 89, isFavorite: false, img: 'https://images.unsplash.com/photo-1591489378430-ef2f4c626b35?w=500&auto=format', desc: '80 Plus Gold 1000W Fully Modular Power Supply.' },
  { id: 8, name: 'Corsair iCUE 5000D Airflow', price: 9500, category: 'Case', tag: 'NEW', rating: 4.7, reviews: 145, isFavorite: false, img: 'https://images.unsplash.com/photo-1547082299-de196ea013d6?w=500&auto=format', desc: 'Mid-Tower ATX Case with High-Airflow Front Panel.' },
  { id: 9, name: 'Logitech G Pro X Superlight', price: 8500, category: 'Peripherals', tag: 'HOT', rating: 4.9, reviews: 512, isFavorite: false, img: 'https://images.unsplash.com/photo-1527814732934-94a1e5d19599?w=500&auto=format', desc: 'Ultra-lightweight wireless gaming mouse.' },
  { id: 10, name: 'SteelSeries Apex Pro', price: 11000, category: 'Peripherals', tag: 'SALE', rating: 4.8, reviews: 230, isFavorite: false, img: 'https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=500&auto=format', desc: 'Mechanical keyboard with adjustable actuation switches.' },
  { id: 11, name: 'LG UltraGear 27" IPS', price: 18500, category: 'Monitor', tag: 'NEW', rating: 4.7, reviews: 89, isFavorite: false, img: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500&auto=format', desc: '1ms Response Time, 144Hz Refresh Rate, QHD Resolution.' },
  { id: 12, name: 'Thermal Grizzly Kryonaut', price: 850, category: 'Cooling', tag: 'SALE', rating: 5.0, reviews: 1200, isFavorite: false, img: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?w=500&auto=format', desc: 'High performance thermal grease for all CPUs.' }
];

// ================= CART =================
let cart = [];

// GET products
app.get('/products', (req, res) => {
  res.json(products);
});

// GET cart
app.get('/cart', (req, res) => {
  res.json(cart);
});

// POST cart
app.post('/cart', (req, res) => {
  const { productId, quantity } = req.body;

  const product = products.find(p => p.id === productId);

  if (!product) {
    return res.status(404).json({ message: 'Product not found' });
  }

  const item = { ...product, quantity };
  cart.push(item);

  res.json({ message: 'Item added to cart', item });
});

// ================= START SERVER =================
app.listen(port, '0.0.0.0', () => {
  console.log(`Server running on port ${port}`);
});
