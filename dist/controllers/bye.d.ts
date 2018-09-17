import { Router } from 'express';
import { BaseRouter } from '../lib/baseRouter';
export declare class ByeController implements BaseRouter {
    router: Router;
    basePath: string;
    constructor();
    returnRouter(): Router;
}
