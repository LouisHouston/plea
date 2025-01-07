import bcrypt from 'bcryptjs';
import { NextApiRequest, NextApiResponse } from 'next';
import db from '@/lib/db';

const saltRounds = 10; // Number of bcrypt salt rounds for hashing

export default async function register(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    try {
      const existingUser = await db.query(
        'SELECT * FROM users WHERE email = $1 OR username = $2',
        [email, username]
      );

      if (existingUser.length > 0) {
        return res.status(409).json({ error: 'Email or username already in use' });
      }

      const hashedPassword = await bcrypt.hash(password, saltRounds);

      const result = await db.query(
        'INSERT INTO users (username, email, pass) VALUES ($1, $2, $3)',
        [username, email, hashedPassword]
      );

      res.status(201).json({ message: 'User registered successfully' });
    } catch (err) {
      console.error('Server error:', err);
      res.status(500).json({ error: 'Internal server error' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}