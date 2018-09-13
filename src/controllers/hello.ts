import { Router, Response, Request } from 'express'
import { BaseRouter } from '../lib/baseRouter'

export class HelloController implements BaseRouter {
    router : Router = Router()
    basePath: string = '/hello'

    constructor(){
        
    }

    returnRouter() : Router {
        return Router().get('/', (req: Request, res: Response) => {
            res.send('Hello')
        })
        .get('/:name', (req: Request, res: Response) => {
            let name = req.params.name

            res.send(`Hello ${name}`)
        })
    }
} 