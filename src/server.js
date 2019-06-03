import express from 'express'

if (process.env.NODE_ENV != 'production') {
  require('dotenv').config();
}

const app = express();

// Routes
import IndexRoutes from './routes/index.routes'
import TaskRoutes from './routes/tasks.routes'

// Settings
app.set('port', process.env.PORT || 3000);

app.use(IndexRoutes);
app.use('/tasks', TaskRoutes);

export default app;
