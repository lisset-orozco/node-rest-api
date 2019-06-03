import express from 'express'

if (process.env.NODE_ENV != 'production') {
  require('dotenv').config();
}

const app = express();

// Settings
app.set('port', process.env.PORT || 3000);

// Routes
app.get('/', (request, response) => response.send('Hello World'));

export default app;
