import * as Express from 'express';
import { Express as IExpress } from 'express';
import bodyParser = require('body-parser');
import Routes from './api/routes';
require('dotenv').config();

const port: number = Number(process.env.PORT) || 5000; // port / default port

// Start up an instance of app
const app: IExpress = Express();

// Configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// CORS Headers => Required for cross-origin/ cross-server communication
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );
    res.setHeader(
        'Access-Control-Allow-Methods',
        'GET, POST, PATCH, DELETE, OPTIONS'
    );
    next();
});
  
// TODO: Move to ts project
app.get('/products', (req, res, next) => {
    res.status(200).json({ dummyProduct1: 'DUMMY_PRODUCT1' });
});

// Register all routes
Routes(app);

app.listen(port);

console.log(`Server running on port ${port}`);