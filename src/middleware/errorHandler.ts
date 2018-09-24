import { Request, Response, NextFunction } from "express";
const environment = process.env.NODE_ENV

/**
 * Error handler which spits out error to the console. If environment is in development, the whole stack trace is shown.
 * @param err 
 * @param req 
 * @param res 
 * @param next 
 */
export let errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
    if (environment == 'production') {
        res.send(err.name).status(500)
    }
    else {
        res.send(`${err.name} : ${err.stack}`).status(500)
    }
}