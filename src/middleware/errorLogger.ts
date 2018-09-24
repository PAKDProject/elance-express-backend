import { Request, Response, NextFunction } from "express";
import { error } from '../helpers/logger'

export let errorLogger = (err: Error, req: Request, res: Response, next: NextFunction) => {
    error(`initiated at: ${req.url}\n${err.message} : ${err.stack}`)
    next(err)
}