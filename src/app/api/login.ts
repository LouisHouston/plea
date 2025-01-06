import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { Client } from 'pg'; 
import { NextApiRequest, NextApiResponse } from 'next';
const mysql = require('mysql');

const db = new Client(process.env.DATABASE_URL);

(async () => {
  await db.connect();
  try {
    console.log("connected")
  } catch (err) {
    console.error("error executing query:", err);
  }
})();


/*

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { email, password } = req.body;
    
    // Check if the user exists in the database
    const user = await db.query('SELECT * FROM users WHERE email = ?', [email]);
    
    if (!user) return res.status(400).json({ message: 'User not found' });
    
    // Compare passwords using bcrypt
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });
    
    // Create a JWT token
    const token = jwt.sign({ userId: user.id }, 'your-secret-key', { expiresIn: '1h' });
    
    // Send token to client
    res.status(200).json({ token });
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}

*/
