import * as express from 'express'
import * as cors from 'cors'
import { json } from 'body-parser'
import { default as routes } from '../controllers'

const environment: any = process.env.NODE_ENV

/**
 * @class Server class which bootstraps the server
 */
export class Server {
    app: express.Application = express()
    port: Number

    /**
     * Create new Express Server
     * @param port - port number, optional (default = 3000)
     */
    constructor(port?: Number) {
        (port) ? this.port = port : this.port = 3000
        this.config()
    }

    /**
     * @private Configure the server
     */
    private config(): void {
        this.app.use(cors())
        this.app.use(json())
        
        let routes = this.routes()
        this.app.use('/', routes)
    }

    /**
     * Sets up routes for the server
     * @returns Express Router filled with all routes
     */
     private routes() : express.Router { 
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
        this.app.listen(this.port, (err: Error) => {
            if (err && environment != "production")
                throw Error(err.message)
            else
                console.log(`Server running on port ${this.port}. Current Environment: ${environment}`)
        })
    }
}