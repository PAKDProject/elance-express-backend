import { Request, Response, NextFunction } from "express";
import { error } from '../helpers/logger'
const environment = process.env.NODE_ENV

export let errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
    if (environment == 'production') {
        res.send(err.name).status(500)
    }
    else {
        res.send(`${err.name} : ${err.stack}`).status(500)
    }
}