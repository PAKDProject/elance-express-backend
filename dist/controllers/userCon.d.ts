import { Router } from 'express';
import { BaseRouter } from '../interfaces/baseRouter';
/**
* @class UserController used to control user route
*/
export declare class UserController implements BaseRouter {
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
