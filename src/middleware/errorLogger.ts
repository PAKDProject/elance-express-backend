import { Request, Response, NextFunction } from "express";
import { error } from '../helpers/logger'

/**
 * Error logger which logs errors into the console and passes it to another error handler
 * @param err 
 * @param req 
 * @param res 
 * @param next 
 */
export let errorLogger = (err: Error, req: Request, res: Response, next: NextFunction) => {
    error(`initiated at: ${req.url}\n${err.message} : ${err.stack}`)
    next(err)
}