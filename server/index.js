import express from 'express';
import http from 'http';
import helmet from "helmet";
import cors from "cors";

const app = express();
app.set('port', process.env.PORT || 9000);
app.use(helmet());
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('node-express-mongo server at your service 🖖!').status(200);
})

if (process.env.NODE_ENV !== 'test'){
    const server = http.createServer(app);
    server.listen(app.get('port'),() => {
        console.log('Server is running at port %s', app.get('port'));
    });
}

export default app;