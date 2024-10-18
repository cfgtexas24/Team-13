const express = require('express');
const app = express();
const routes = require('./routes');

// Allow JSON parsing
app.use(express.json());

app.use('/', routes);


const port = process.env.PORT || 4000;;

app.listen(port, () => {
    console.log(`Node.js HTTP server is running on port ${port}`);
    console.log(`http://localhost:${port}`);
});