import * as express from 'express'
import * as cors from 'cors'
import { json } from 'body-parser'
import { default as routes } from '../controllers'
import { MongoDb } from './createDb'
import { info, success, secret } from '../helpers/logger';

/**
 * @class Server class which bootstraps the server
 */
export class Server {
    app: express.Application = express()
    port: Number
    configured: boolean = false
    environment: any

    /**
     * Create new Express Server
     * @param port - port number, optional (default = 3000)
     */
    constructor(port?: Number, environment?: any) {
        (port) ? this.port = port : this.port = 3000;
        (environment) ? this.environment = environment : this.environment = process.env.NODE_ENV;
    }

    /**
     * Configure the server
     * @throws error - if mongodb doesn't setup properly
     */
    public async config(): Promise<any> {
        try {
            info('Beginning Server Configuration...')
            this.app.use(cors())
            this.app.use(json())

            info('1. Setting up mongo...')
            await new MongoDb().setup()
            success('Mongodb connection established!')

            info('2. Setting up routes...')
            let routes = this.routes()
            this.app.use('/', routes)
            success('Routes setup complete!')
            success('Server fully configured!')
            secret('Its L I T fam')
            this.configured = true;
        } catch (error) {
            throw new Error(error)
        }
    }

    /**
     * Sets up routes for the server
     * @returns Express Router filled with all routes
     */
    private routes(): express.Router {
        let router = express.Router()

        routes.forEach(route => {
            router.use(route.basePath, route.returnRouter())
        })

        return router
    }

    /**
     * Start the server.
     * @throws Error if app doesn't start and NODE_ENV != production
     */
    start(): void {
        info('Server starting...')
        if (this.configured) {
            this.app.listen(this.port, (err: Error) => {
                if (err && this.environment != "production")
                    throw new Error(err.message)
                else
                    success(`Server running on port ${this.port}. Current Environment: ${this.environment}`)
            })
        }
        else {
            throw new Error("Server not configured! Run new Server().config() first!")
        }
    }
}