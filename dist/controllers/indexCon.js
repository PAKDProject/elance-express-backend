"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const config_1 = require("config");
/**
* @class IndexController used to control  route
*/
class IndexController {
    /**
    * @constructor
    */
    constructor() {
        /**
        * @property basePath used as a base for routing related to the index
        */
        this.basePath = '/';
    }
    /**
    * Returns a configured router for the route
    * @returns Router
    */
    returnRouter() {
        return express_1.Router()
            .get('/', (req, res) => {
            res.redirect(config_1.get('frontendUrl'));
        });
    }
}
exports.IndexController = IndexController;
//# sourceMappingURL=indexCon.js.map