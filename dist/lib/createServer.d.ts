import * as express from 'express';
/**
 * @class Server class which bootstraps the server
 */
export declare class Server {
    app: express.Application;
    port: Number;
    configured: boolean;
    environment: any;
    /**
     * Create new Express Server
     * @param port - port number, optional (default = 3000)
     */
    constructor(port?: Number, environment?: any);
    /**
     * Configure the server
     * @throws error - if mongodb doesn't setup properly
     */
    config(): Promise<any>;
    /**
     * Sets up routes for the server
     * @returns Express Router filled with all routes
     */
    private routes;
    /**
     * Start the server.
     * @throws Error if app doesn't start and NODE_ENV != production
     */
    start(): void;
}
