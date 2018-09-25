"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const cors = require("cors");
const body_parser_1 = require("body-parser");
const controllers_1 = require("../controllers");
const createDb_1 = require("./createDb");
const logger_1 = require("../helpers/logger");
const errorLogger_1 = require("../middleware/errorLogger");
const errorHandler_1 = require("../middleware/errorHandler");
/**
 * @class Server class which bootstraps the server
 */
class Server {
    /**
     * Create new Express Server
     * @param port - port number, optional (default = 3000)
     */
    constructor(port, environment) {
        this.app = express();
        this.configured = false;
        (port) ? this.port = port : this.port = 3000;
        (environment) ? this.environment = environment : this.environment = process.env.NODE_ENV;
    }
    /**
     * Configure the server
     * @throws error - if mongodb doesn't setup properly
     */
    config() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                logger_1.info('Beginning Server Configuration...');
                this.app.use(cors());
                this.app.use(body_parser_1.json());
                logger_1.info('1. Setting up mongo...');
                yield new createDb_1.MongoDb().setup();
                logger_1.success('Mongodb connection established!');
                logger_1.info('2. Setting up routes...');
                let routes = this.routes();
                this.app.use('/', routes);
                logger_1.success('Routes setup complete!');
                logger_1.info('3. Setting up error logging...');
                this.app.use(errorLogger_1.errorLogger);
                logger_1.success('Error Logger setup complete!');
                logger_1.info('4. Setting up error handler...');
                this.app.use(errorHandler_1.errorHandler);
                logger_1.success('Error handler setup complete!');
                logger_1.success('Server fully configured!');
                this.configured = true;
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    /**
     * Sets up routes for the server
     * @returns Express Router filled with all routes
     */
    routes() {
        let router = express.Router();
        controllers_1.default.forEach(route => {
            router.use(route.basePath, route.returnRouter());
        });
        return router;
    }
    /**
     * Start the server.
     * @throws Error if app doesn't start and NODE_ENV != production
     */
    start() {
        logger_1.info('Server starting...');
        if (this.configured) {
            this.app.listen(this.port, (err) => {
                if (err && this.environment != "production")
                    throw new Error(err.message);
                else
                    logger_1.success(`Server running on port ${this.port}. Current Environment: ${this.environment}`);
            });
        }
        else {
            throw new Error("Server not configured! Run new Server().config() first!");
        }
    }
}
exports.Server = Server;
//# sourceMappingURL=createServer.js.map