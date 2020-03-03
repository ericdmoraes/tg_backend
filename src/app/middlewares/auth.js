import jwt from 'jsonwebtoken';
import { promisify } from 'util';
import { authSecret } from '../../config/auth';

export default async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) return res.json({ error: 'Token not provided' });

  const [, bearer] = authHeader.split(' ');

  try {
    const decoded = await promisify(jwt.verify)(bearer, authSecret);
    req.decoded = decoded;
    return next();
  } catch (error) {
    return res.status(401).json({ error: 'token invalid' });
  }
};
