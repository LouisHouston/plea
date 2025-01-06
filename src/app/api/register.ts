import bcrypt from 'bcryptjs';
import { NextApiRequest, NextApiResponse } from 'next';
import {Client} from 'pg'; 

const db = new Client(process.env.DATABASE_URL);

(async () => {
  await db.connect();
  try {
    console.log("connected")
  } catch (err) {
    console.error("error executing query:", err);
  }
})();

const saltRounds = 10; // Number of bcrypt salt rounds for hashing

export default async function register(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { username, email, password } = req.body;

    // Validate the input
    if (!username || !email || !password) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    try {
      // Check if the email or username is already taken
      const existingUser = await db.query(
        'SELECT * FROM users WHERE email = ? OR username = ?',
        [email, username]
      );

      if (existingUser.length > 0) {
        return res.status(409).json({ error: 'Email or username already in use' });
      }

      // Hash the password
      const hashedPassword = await bcrypt.hash(password, saltRounds);

      // Insert the user into the database
      const result = await db.query(
        'INSERT INTO users (username, email, pass) VALUES (?, ?, ?)',
        [username, email, hashedPassword]
      );

      // Respond with success
      res.status(201).json({ message: 'User registered successfully' });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal server error' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}