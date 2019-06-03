import { Router } from 'express'
const router = Router();

router.get('/', (request, response) => {
  response.send('Welcome to my API');
});

export default router;
