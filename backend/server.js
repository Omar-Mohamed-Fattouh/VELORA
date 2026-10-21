const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const morgan = require('morgan');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;
const JWT_SECRET = process.env.JWT_SECRET || 'msga-dev-secret';

app.use(cors({
  origin: ['http://localhost:5173', 'http://127.0.0.1:5173'],
  credentials: true,
}));
app.use(express.json({ limit: '2mb' }));
app.use(cookieParser());
app.use(morgan('dev'));

const users = [];
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

app.get('/api/v1/health', (req, res) => {
  res.json({ ok: true, message: 'MSGA backend is running.' });
});

app.post('/api/v1/auth/register', async (req, res) => {
  const { name, email, password } = req.body || {};

  if (!name || !email || !password) {
    return res.status(400).json({ message: 'Name, email and password are required.' });
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
  res.cookie('token', token, {
    httpOnly: true,
    sameSite: 'lax',
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });

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
  res.cookie('token', token, {
    httpOnly: true,
    sameSite: 'lax',
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });

  res.json({
    message: 'Login successful.',
    token,
    data: { user: sanitizeUser(user) },
  });
});

app.get('/api/v1/auth/me', authMiddleware, (req, res) => {
  const user = users.find((item) => item.id === Number(req.user.sub));

  if (!user) {
    return res.status(404).json({ message: 'User not found.' });
  }

  res.json({ data: { user: sanitizeUser(user) } });
});

app.post('/api/v1/auth/logout', (req, res) => {
  res.clearCookie('token');
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

const seedAdmin = async () => {
  const existing = users.find((user) => user.email === 'admin@msga.com');
  if (!existing) {
    users.push({
      id: 1,
      name: 'MSGA Admin',
      email: 'admin@msga.com',
      passwordHash: await bcrypt.hash('Admin123!', 10),
      role: 'admin',
    });
  }
};

seedAdmin().then(() => {
  app.listen(PORT, () => {
    console.log(`MSGA backend listening on http://localhost:${PORT}`);
  });
});
