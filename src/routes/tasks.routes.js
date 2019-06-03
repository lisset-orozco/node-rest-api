import { Router } from 'express'
const router = Router();

// Database connection
import connect from '../database';
import { ObjectID } from 'mongodb';

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

router.get('/:id', async (request, response) => {
  const { id } = request.params;
  const db = await connect();
  const result = await db.collection('tasks').findOne({ _id: ObjectID(id) });

  response.json(result);
});

router.delete('/:id', async (request, response) => {
  const { id } = request.params;
  const db = await connect();
  const result = await db.collection('tasks').deleteOne({ _id: ObjectID(id) });
  response.json({
    message: `Tasks ${id} deleted.`,
    result
  });
});

export default router;
