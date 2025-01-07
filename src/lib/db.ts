import { error } from 'console';
import { Client } from 'pg';

const db = new Client({
  connectionString: process.env.DATABASE_URL, // Use environment variable for security
});
const testDatabaseConnection = async () => {
  try {
    await db.connect();

  } catch (err) {
    console.error("Code 4414: Error connecting to the DB.")
  }
};

testDatabaseConnection(); // Test the connection when the module is loaded

export default db;