import { Router, Response, Request } from 'express'
import { BaseRouter } from '../lib/baseRouter'

export class ByeController implements BaseRouter {
    router : Router = Router()
    basePath: string = '/bye'

    constructor(){
        
    }

    returnRouter() : Router {
        return Router().get('/', (req: Request, res: Response) => {
            res.send('Bye')
        })
        .get('/:name', (req: Request, res: Response) => {
            let name = req.params.name

            res.send(`Bye ${name}`)
        })
    }
} 