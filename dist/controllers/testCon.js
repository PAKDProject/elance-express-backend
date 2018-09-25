"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
/**
* @class TestController is used to simply check that the server is up and running
*/
class TestController {
    /**
    * @constructor
    */
    constructor() {
        /**
        * @property basePath used as a base for routing related to the index
        */
        this.basePath = '/test';
    }
    /**
    * Returns a configured router for the route
    * @returns Router
    */
    returnRouter() {
        return express_1.Router()
            .get('/', (req, res) => {
            res.send("Hello World!");
        })
            .get('/:string', (req, res) => {
            res.send(req.params.string);
        });
    }
}
exports.TestController = TestController;
//# sourceMappingURL=testCon.js.map