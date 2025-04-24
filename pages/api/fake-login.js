// pages/api/fake-login.js

export default function handler(req, res) {
    if (req.method !== 'POST') {
      return res.status(405).json({ message: 'Method Not Allowed' });
    }
  
    try {
      const { email, password } = req.body;
  
      // If req.body is undefined, you probably forgot a middleware
      if (!email || !password) {
        return res.status(400).json({ message: 'Missing email or password' });
      }
  
      if (email === 'test@example.com' && password === '123456') {
        return res.status(200).json({
          user: {
            id: 1,
            name: 'Test User',
            email,
          },
          token: 'fake-jwt-token',
        });
      }
  
      return res.status(401).json({ message: 'Invalid credentials' });
  
    } catch (err) {
      console.error('Login API Error:', err);
      return res.status(500).json({ message: 'Server error' });
    }
  }
  