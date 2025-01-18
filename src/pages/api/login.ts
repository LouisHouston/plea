import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { serialize } from 'cookie';
import { NextApiRequest, NextApiResponse } from 'next';
import db from '@/lib/db';


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { email, password } = req.body;
    
    // checking if user exists in db
    const user = await db.query('SELECT * FROM users WHERE email = ?', [email]);
    
    if (!user) return res.status(400).json({ message: 'User not found' });
    
    // bcrypt worked
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });
    
    const token = jwt.sign({ userId: user.id, userName: user.username }, process.env.JWT_SECRET , { expiresIn: '1h' });
    
    res.setHeader(
      'Set-Cookie',
      serialize('token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 3600,
        path: '/',
      })
    );
        res.status(200).json({ token });
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}


