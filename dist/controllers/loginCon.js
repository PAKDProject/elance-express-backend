"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
/**
* @class LoginController used to control login route
*/
class LoginController {
    /**
    * @constructor
    */
    constructor() {
        /**
        * @property basePath used as a base for routing related to the index
        */
        this.basePath = '/login';
    }
    /**
    * Returns a configured router for the route
    * @returns Router
    */
    returnRouter() {
        return express_1.Router()
            .get('/', (req, res) => {
            return;
        });
    }
}
exports.LoginController = LoginController;
//# sourceMappingURL=loginCon.js.map