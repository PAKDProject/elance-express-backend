import { Request, Response, NextFunction } from "express";
/**
 * Async wrapper to be used with routes which need async
 * @param fn - function that is async
 */
export declare let asyncRoutes: (fn: Function) => (req: Request, res: Response, next: NextFunction) => void;
