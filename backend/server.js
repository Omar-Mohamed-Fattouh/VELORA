const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const morgan = require('morgan');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;
const JWT_SECRET = process.env.JWT_SECRET || 'velora-dev-secret';

const extraOrigins = String(process.env.CLIENT_ORIGINS || process.env.FRONTEND_URL || '')
  .split(',')
  .map((value) => value.trim().replace(/\/$/, ''))
  .filter(Boolean);

const allowedOrigins = [
  'http://localhost:5173',
  'http://127.0.0.1:5173',
  'http://localhost:5174',
  'http://127.0.0.1:5174',
  'http://localhost:5175',
  'http://127.0.0.1:5175',
  'http://localhost:4173',
  'http://127.0.0.1:4173',
  'http://localhost:4174',
  'http://127.0.0.1:4174',
  ...extraOrigins,
];

const isAllowedOrigin = (origin) => {
  if (!origin) return true;
  if (allowedOrigins.includes(origin)) return true;
  return /^https:\/\/([a-z0-9-]+\.)*(vercel\.app|tmp\.now)$/i.test(origin);
};

const cookieOptions = {
  httpOnly: true,
  sameSite: process.env.VERCEL ? 'none' : 'lax',
  secure: Boolean(process.env.VERCEL),
  maxAge: 7 * 24 * 60 * 60 * 1000,
};

app.use(cors({
  origin(origin, callback) {
    callback(null, isAllowedOrigin(origin));
  },
  credentials: true,
}));
app.use(express.json({ limit: '2mb' }));
app.use(cookieParser());
app.use(morgan('dev'));
app.use((req, res, next) => {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
  res.setHeader('X-Frame-Options', 'SAMEORIGIN');
  res.setHeader('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');
  next();
});

const isEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(value || '').trim());
const subscribers = [];

const users = [];

const seedAdmin = async () => {
  const existing = users.find((user) => user.email === 'admin@velora.com');
  if (!existing) {
    users.push({
      id: 1,
      name: 'VELORA Admin',
      email: 'admin@velora.com',
      passwordHash: await bcrypt.hash('Admin123!', 10),
      role: 'admin',
    });
  }
};

const ready = seedAdmin();
app.use(async (_req, _res, next) => {
  await ready;
  next();
});

const properties = [
  {
    id: 1,
    title: 'Capital Avenue (Al Qirawan)',
    location: 'Riyadh - Al Qirawan',
    price: 875000,
    area: 36000,
    status: 'Available',
    short: 'Premium commercial development in the heart of Riyadh.',
    description: 'A landmark commercial tower with premium office spaces, landscaped promenade, and modern amenities suited for growing businesses.',
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80',
    map: 'https://maps.google.com/?q=Riyadh%20Al%20Qirawan',
    video: 'https://www.youtube.com/watch?v=ysz5S6PUM-U',
  },
  {
    id: 2,
    title: 'Skyline Residency',
    location: 'Jeddah - Corniche',
    price: 1450000,
    area: 42000,
    status: 'Under Construction',
    short: 'Luxury waterfront residence with sea views and wellness amenities.',
    description: 'A resort-inspired residential community designed around comfort, indoor-outdoor living, and elevated waterfront experiences.',
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80',
    map: 'https://maps.google.com/?q=Jeddah%20Corniche',
    video: 'https://www.youtube.com/watch?v=ysz5S6PUM-U',
  },
  {
    id: 3,
    title: 'Desert Crest Villas',
    location: 'Dubai - Palm Jumeirah',
    price: 2600000,
    area: 51000,
    status: 'Sold',
    short: 'Exclusive villas with private leisure spaces and a skyline backdrop.',
    description: 'A gated coastal villa community with breathtaking views, lush landscaping, and high-end finishes for modern living.',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
    map: 'https://maps.google.com/?q=Palm%20Jumeirah',
    video: 'https://www.youtube.com/watch?v=ysz5S6PUM-U',
  },
  {
    id: 4,
    title: 'Green Horizon Apartments',
    location: 'Abu Dhabi - Saadiyat',
    price: 980000,
    area: 18000,
    status: 'Available',
    short: 'Contemporary apartments inspired by open-space luxury living.',
    description: 'Smart living spaces crafted for families and professionals looking for comfort, sustainability, and premium finishes.',
    image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80',
    map: 'https://maps.google.com/?q=Saadiyat%20Abu%20Dhabi',
    video: 'https://www.youtube.com/watch?v=ysz5S6PUM-U',
  },
  {
    id: 5,
    title: 'Harbor View Residences',
    location: 'Doha - West Bay',
    price: 1200000,
    area: 27000,
    status: 'Available',
    short: 'Urban elegance and marina-inspired comfort in one address.',
    description: 'A refined community built for investors and homeowners who value lifestyle, location, and long-term value.',
    image: 'https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=1200&q=80',
    map: 'https://maps.google.com/?q=Doha%20West%20Bay',
    video: 'https://www.youtube.com/watch?v=ysz5S6PUM-U',
  },
  {
    id: 6,
    title: 'Zamalek Garden House',
    location: 'Cairo - Zamalek',
    price: 780000,
    area: 22000,
    status: 'Available',
    short: 'A calm residential building beside the Nile with shared gardens.',
    description: 'Family apartments and duplexes with river walks, doorman service, and upgraded kitchens.',
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80',
    map: 'https://maps.google.com/?q=Zamalek%20Cairo',
    video: 'https://www.youtube.com/watch?v=ysz5S6PUM-U',
  },
  {
    id: 7,
    title: 'Al Yasmin Courtyards',
    location: 'Riyadh - Al Yasmin',
    price: 1120000,
    area: 31000,
    status: 'Under Construction',
    short: 'Low-rise homes arranged around planted courtyards.',
    description: 'A neighborhood-scale project with guest parking, shaded walkways, and family-sized units.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    map: 'https://maps.google.com/?q=Al%20Yasmin%20Riyadh',
    video: 'https://www.youtube.com/watch?v=ysz5S6PUM-U',
  },
  {
    id: 8,
    title: 'Stanley Shore Residences',
    location: 'Alexandria - Stanley',
    price: 640000,
    area: 15000,
    status: 'Available',
    short: 'Sea-facing apartments designed for year-round living.',
    description: 'Salt-resistant finishes, basement parking, and wide balconies along the corniche.',
    image: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80',
    map: 'https://maps.google.com/?q=Stanley%20Alexandria',
    video: 'https://www.youtube.com/watch?v=ysz5S6PUM-U',
  },
  {
    id: 9,
    title: 'Business Bay Lofts',
    location: 'Dubai - Business Bay',
    price: 890000,
    area: 19000,
    status: 'Available',
    short: 'Loft-style homes for professionals who want city access.',
    description: 'High ceilings, smart access, and a short walk to metro and offices.',
    image: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1200&q=80',
    map: 'https://maps.google.com/?q=Business%20Bay%20Dubai',
    video: 'https://www.youtube.com/watch?v=ysz5S6PUM-U',
  },
  {
    id: 10,
    title: 'Ismailia Lake Houses',
    location: 'Ismailia - Lake',
    price: 430000,
    area: 12000,
    status: 'Available',
    short: 'Small houses near the lake for weekends and family stays.',
    description: 'Gardens, guest rooms, and a short drive to the city center and ferry.',
    image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1200&q=80',
    map: 'https://maps.google.com/?q=Ismailia%20Lake',
    video: 'https://www.youtube.com/watch?v=ysz5S6PUM-U',
  },
  {
    id: 11,
    title: 'King Abdullah Park Villas',
    location: 'Riyadh - King Abdullah Park',
    price: 1750000,
    area: 28000,
    status: 'Sold',
    short: 'Detached villas facing a large public park.',
    description: 'Private yards, driver rooms, and a layout suited to extended families.',
    image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80',
    map: 'https://maps.google.com/?q=King%20Abdullah%20Park%20Riyadh',
    video: 'https://www.youtube.com/watch?v=ysz5S6PUM-U',
  },
  {
    id: 12,
    title: 'Maadi Shade Lane',
    location: 'Cairo - Maadi',
    price: 520000,
    area: 14000,
    status: 'Available',
    short: 'Tree-lined street building with mixed 2 and 3 bedroom homes.',
    description: 'Quiet floors, street parking, and shops within a short walk.',
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80',
    map: 'https://maps.google.com/?q=Maadi%20Cairo',
    video: 'https://www.youtube.com/watch?v=ysz5S6PUM-U',
  }
];

const inquiries = [];
const appointments = [];

const sanitizeUser = (user) => ({
  id: user.id,
  name: user.name,
  email: user.email,
  role: user.role,
});

const createToken = (user) => jwt.sign({ sub: user.id, role: user.role }, JWT_SECRET, { expiresIn: '7d' });

const authMiddleware = (req, res, next) => {
  const token = req.cookies?.token || req.headers.authorization?.replace('Bearer ', '');

  if (!token) {
    return res.status(401).json({ message: 'Authentication required.' });
  }

  try {
    const payload = jwt.verify(token, JWT_SECRET);
    req.user = payload;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Invalid or expired token.' });
  }
};

const adminOnly = (req, res, next) => {
  if (!req.user || req.user.role !== 'admin') {
    return res.status(403).json({ message: 'Admin access required.' });
  }
  next();
};

app.get('/', (req, res) => {
  res.json({ ok: true, name: 'VELORA API' });
});

app.get('/api/v1/health', (req, res) => {
  res.json({ ok: true, message: 'VELORA backend is running.' });
});

app.post('/api/v1/newsletter', (req, res) => {
  const { email } = req.body || {};

  if (!isEmail(email)) {
    return res.status(400).json({ message: 'A valid email is required.' });
  }

  const normalizedEmail = String(email).trim().toLowerCase();
  if (!subscribers.includes(normalizedEmail)) {
    subscribers.push(normalizedEmail);
  }

  res.status(201).json({ message: 'Subscribed successfully.', data: { email: normalizedEmail } });
});

app.post('/api/v1/auth/register', async (req, res) => {
  const { name, email, password } = req.body || {};

  if (!name || !email || !password) {
    return res.status(400).json({ message: 'Name, email and password are required.' });
  }

  if (!isEmail(email)) {
    return res.status(400).json({ message: 'A valid email is required.' });
  }

  if (String(password).length < 8) {
    return res.status(400).json({ message: 'Password must be at least 8 characters.' });
  }

  const normalizedEmail = String(email).trim().toLowerCase();
  const existingUser = users.find((user) => user.email === normalizedEmail);

  if (existingUser) {
    return res.status(409).json({ message: 'An account with this email already exists.' });
  }

  const passwordHash = await bcrypt.hash(String(password), 10);
  const user = {
    id: Date.now(),
    name: String(name).trim(),
    email: normalizedEmail,
    passwordHash,
    role: 'user',
  };

  users.push(user);

  const token = createToken(user);
  res.cookie('token', token, cookieOptions);

  res.status(201).json({
    message: 'Registration successful.',
    token,
    data: { user: sanitizeUser(user) },
  });
});

app.post('/api/v1/auth/login', async (req, res) => {
  const { email, password } = req.body || {};

  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required.' });
  }

  const normalizedEmail = String(email).trim().toLowerCase();
  const user = users.find((item) => item.email === normalizedEmail);

  if (!user) {
    return res.status(401).json({ message: 'Invalid email or password.' });
  }

  const isValid = await bcrypt.compare(String(password), user.passwordHash);
  if (!isValid) {
    return res.status(401).json({ message: 'Invalid email or password.' });
  }

  const token = createToken(user);
  res.cookie('token', token, cookieOptions);

  res.json({
    message: 'Login successful.',
    token,
    data: { user: sanitizeUser(user) },
  });
});

app.get('/api/v1/auth/me', (req, res) => {
  const token = req.cookies?.token || req.headers.authorization?.replace('Bearer ', '');

  if (!token) {
    return res.json({ data: { user: null } });
  }

  try {
    const payload = jwt.verify(token, JWT_SECRET);
    const user = users.find((item) => item.id === Number(payload.sub));
    return res.json({ data: { user: user ? sanitizeUser(user) : null } });
  } catch (error) {
    return res.json({ data: { user: null } });
  }
});

app.post('/api/v1/auth/logout', (req, res) => {
  res.clearCookie('token', cookieOptions);
  res.json({ message: 'Logged out successfully.' });
});

app.get('/api/v1/properties', (req, res) => {
  res.json({ data: { items: properties } });
});

app.get('/api/v1/properties/:id', (req, res) => {
  const property = properties.find((item) => item.id === Number(req.params.id));

  if (!property) {
    return res.status(404).json({ message: 'Property not found.' });
  }

  res.json({ data: { item: property } });
});

app.post('/api/v1/properties', authMiddleware, adminOnly, (req, res) => {
  const payload = req.body || {};
  const property = {
    id: Date.now(),
    title: payload.title || 'New Property',
    location: payload.location || 'Unknown',
    price: Number(payload.price || 0),
    area: Number(payload.area || 0),
    status: payload.status || 'Available',
    short: payload.short || 'New listing',
    description: payload.description || 'Updated property information.',
    image: payload.image || 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1200&q=80',
    map: payload.map || 'https://maps.google.com/',
    video: payload.video || 'https://www.youtube.com/watch?v=ysz5S6PUM-U',
  };

  properties.unshift(property);
  res.status(201).json({ message: 'Property created successfully.', data: { item: property } });
});

app.post('/api/v1/inquiries', (req, res) => {
  const { name, email, phone, interest, message } = req.body || {};

  if (!name || !email || !phone) {
    return res.status(400).json({ message: 'Name, email and phone are required.' });
  }

  if (!isEmail(email)) {
    return res.status(400).json({ message: 'A valid email is required.' });
  }

  const inquiry = {
    id: Date.now(),
    name: String(name).trim(),
    email: String(email).trim().toLowerCase(),
    phone: String(phone).trim(),
    interest: interest || 'general',
    message: message || '',
    status: 'new',
    createdAt: new Date().toISOString(),
  };

  inquiries.unshift(inquiry);
  res.status(201).json({ message: 'Inquiry submitted successfully.', data: { item: inquiry } });
});

app.get('/api/v1/inquiries', authMiddleware, adminOnly, (req, res) => {
  res.json({ data: inquiries });
});

app.post('/api/v1/appointments', (req, res) => {
  const { name, email, phone, date, time, message } = req.body || {};

  if (!name || !email || !phone || !date || !time) {
    return res.status(400).json({ message: 'Name, email, phone, date and time are required.' });
  }

  const appointment = {
    id: Date.now(),
    name: String(name).trim(),
    email: String(email).trim().toLowerCase(),
    phone: String(phone).trim(),
    date: String(date),
    time: String(time),
    message: message || '',
    status: 'pending',
    createdAt: new Date().toISOString(),
  };

  appointments.unshift(appointment);
  res.status(201).json({ message: 'Appointment requested successfully.', data: { item: appointment } });
});

app.get('/api/v1/appointments', authMiddleware, adminOnly, (req, res) => {
  res.json({ data: appointments });
});

module.exports = app;

if (!process.env.VERCEL) {
  ready.then(() => {
    app.listen(PORT, () => {
      console.log(`VELORA backend listening on http://localhost:${PORT}`);
    });
  });
}
