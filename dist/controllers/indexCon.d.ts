import { Router } from 'express';
import { BaseRouter } from '../interfaces/baseRouter';
/**
* @class IndexController used to control  route
*/
export declare class IndexController implements BaseRouter {
    /**
    * @property basePath used as a base for routing related to the index
    */
    basePath: string;
    /**
    * @constructor
    */
    constructor();
    /**
    * Returns a configured router for the route
    * @returns Router
    */
    returnRouter(): Router;
}
