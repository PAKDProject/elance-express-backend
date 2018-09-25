import { Request, Response, NextFunction } from "express";
/**
 * Error logger which logs errors into the console and passes it to another error handler
 * @param err
 * @param req
 * @param res
 * @param next
 */
export declare let errorLogger: (err: Error, req: Request, res: Response, next: NextFunction) => void;
