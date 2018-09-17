import { Router } from 'express';
import { BaseRouter } from '../lib/baseRouter';
export declare class HelloController implements BaseRouter {
    router: Router;
    basePath: string;
    constructor();
    returnRouter(): Router;
}
