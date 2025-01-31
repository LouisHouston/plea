import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { serialize } from 'cookie';
import { NextApiRequest, NextApiResponse } from 'next';
import db from '@/lib/db';


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { username, password } = req.body; // getting username and password from request body
    
    // checking if user exists in db
    const user = await db.query('SELECT * FROM users WHERE username = $1', [username]);

    if (!user) return res.status(400).json({ message: 'User not found' });
    
    // bcrypt comparing the password of the user.rows[0] which is the rows of the query
    // but the . accessor is accessing the "pass" element of the row[0] object
    const isMatch = await bcrypt.compare(password, user.rows[0].pass);
    if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });
    
    // creating a jwt token with the user id as uid and username just to show something in the data for now
    // NOTE: Changing more information about the user token, (jwt token, token, user-token)
    const token = jwt.sign({ id: user.rows[0].uid, name: user.rows[0].username }, process.env.JWT_SECRET , { expiresIn: '1h' });
    
    // testing user login consolelog console.log('User logged in');

    // setting cookie with the token 
    res.setHeader(
      'Set-Cookie',
      serialize('token', token, {
        httpOnly: false,
        secure: process.env.NODE_ENV === 'production',
        sameSite: "strict",
        maxAge: 3600,
        path: '/',
      })
    );
    res.status(200).json({ message:"User logged in" });
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}


