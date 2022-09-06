'use strict';
import * as express from 'express';
import testRoutes from './testRouting/test.routes';
import { createServer, Server as HttpServer } from 'http';

const _app_folder = '/dist/server'; // build path
const bodyParser = require('body-parser');

export class Server {
    protected express = express;
    protected app: express.Application;
    private server: HttpServer;
    private port = 3000;

    constructor() {
        this.app = this.express();

        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.use(bodyParser.json());

        this.app.use(function (req, res, next) {
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
            res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
            res.setHeader('Access-Control-Allow-Credentials', 'true');
            next();
        });

        this.server = createServer(this.app);
        this.registerExpressRouters();
        this.start();
    }

    private start(): void {
        this.server.listen(this.port, () => {
            console.log(`Listening on port ${this.port}`);
        });
    }

    private registerExpressRouters() {

     this.app.use('/api/backend/testRouting', testRoutes);
    }
}