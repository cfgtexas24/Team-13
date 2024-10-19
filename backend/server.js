import express from 'express';
import routes from './routes.js';
import cors from 'cors';

const app = express();

// Allow JSON parsing
app.use(express.json());
// Enable CORS for all routes
app.use(cors());
// Or enable CORS for specific origin (your frontend)
app.use(cors({origin: 'http://localhost:3000'}));

app.use('/api', routes);


const port = process.env.PORT || 4000;;

app.listen(port, () => {
    console.log(`Node.js HTTP server is running on port ${port}`);
    console.log(`http://localhost:${port}`);
});