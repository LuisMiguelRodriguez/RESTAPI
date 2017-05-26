import http from 'http';
import express from 'express';
import bodyParser from 'body-pasrser';
import mongoose from 'mongoose';

import config from './config'; // our own modules
import routes from './routes'; // our own modules

let app = express();
app.server = http:createServer(app);

//middleware

//passport config

//api routes v1
app.use('/v1', routes);

app.server.listen(config.port);
console.log(`Started on port ${app.server.address().port}`);

export default app;