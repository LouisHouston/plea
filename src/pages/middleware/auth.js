import jwt from 'jsonwebtoken';

const authMiddleware = (req, res, next) => {
    const { token } = req.cookies; // Use a cookie parsing library like 'cookie-parser'
  
    if (!token) {
      return res.status(401).json({ message: 'Unauthorized' });
    }
  
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decoded; // Attach user info to the request object
      next(); // Proceed to the next middleware or route handler
    } catch (err) {
      res.status(403).json({ message: 'Invalid or expired token' });
    }
  };
  
  export default authMiddleware;