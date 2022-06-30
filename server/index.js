import express from 'express';
import http from 'http';
import helmet from 'helmet';
import cors from 'cors';
import config from 'config';
import {mongoConnector} from 'database/mongo.js';
import api from "./api";

const app = express();
app.set('port', config().port || 9000);
app.use(helmet());
app.use(cors());
app.use(express.json());
mongoConnector();

app.get('/', (req, res) => {
    res.send('node-express-mongo server at your service 🖖!').status(200);
})

api(app)

if (process.env.NODE_ENV !== 'test'){
    const server = http.createServer(app);
    server.listen(app.get('port'),() => {
        console.log('Server is running at port %s', app.get('port'));
    });
}

export default app;
