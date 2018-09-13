import * as express from 'express';
/**
 * @class Server class which bootstraps the server
 */
export declare class Server {
    app: express.Application;
    port: Number;
    /**
     * Create new Express Server
     * @param port - port number, optional (default = 3000)
     */
    constructor(port?: Number);
    /**
     * @private Configure the server
     */
    private config;
    /**
     * routes() - sets up routes for the server
     * @returns Express Router filled with all routes
     */
    private routes;
    /**
     * Start the server.
     * @throws Error if app doesn't start and NODE_ENV != production
     */
    start(): void;
}
