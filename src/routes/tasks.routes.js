import { Router } from 'express'
const router = Router();

// Database connection
import connect from '../database';

router.get('/', async (request, response) => {
  const db = await connect();
  const result = await db.collection('tasks').find({}).toArray();
  response.json(result);
});

router.post('/', async (request, response) => {
  const db = await connect();
  const { title, description } = request.body;
  const task = { title, description }
  const result = await db.collection('tasks').insertOne(task);
  response.json(result.ops[0]);
});

export default router;
