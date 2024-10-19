import express from 'express';
import routes from './routes.js';

const app = express();

// Allow JSON parsing
app.use(express.json());

app.use('/api', routes);


const port = process.env.PORT || 4000;;

app.listen(port, () => {
    console.log(`Node.js HTTP server is running on port ${port}`);
    console.log(`http://localhost:${port}`);
});