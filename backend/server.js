import express from 'express';
import routes from './routes.js';
import cors from 'cors';
import { connectToDB } from './lib/mongoose.js'; // Import the connectToDB function

const app = express();

// Allow JSON parsing
app.use(express.json());
// Enable CORS for all routes
app.use(cors());
// // Or enable CORS for specific origin (your frontend)
// app.use(cors({ origin: 'http://localhost:3000' }));

app.use('/api', routes);

// Connect to the database
connectToDB().then(() => {
    console.log('Connected to the database');
  const port = process.env.PORT || 4000;

  app.listen(port, () => {
    console.log(`Node.js HTTP server is running on port ${port}`);
    console.log(`http://localhost:${port}`);
  });
}).catch(err => {
  console.error('Failed to connect to the database:', err);
});
