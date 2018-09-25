import { Router } from 'express';
import { BaseRouter } from '../interfaces/baseRouter';
/**
* @class TestController is used to simply check that the server is up and running
*/
export declare class TestController implements BaseRouter {
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
