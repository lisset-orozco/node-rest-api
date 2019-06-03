import { Router } from 'express'
const router = Router();

// Database connection
import connect from '../database';

router.get('/', async (request, response) => {
  const db = await connect();
  const result = await db.collection('tasks').find({}).toArray();
  response.json(result);
});

export default router;
