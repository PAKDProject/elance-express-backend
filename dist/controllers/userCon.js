"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_1 = require("../models/user");
const asyncRoutes_1 = require("../middleware/asyncRoutes");
/**
* @class UserController used to control user route
*/
class UserController {
    /**
    * @constructor
    */
    constructor() {
        /**
        * @property basePath used as a base for routing related to the index
        */
        this.basePath = '/user';
    }
    /**
    * Returns a configured router for the route
    * @returns Router
    */
    returnRouter() {
        return express_1.Router()
            .get('/', asyncRoutes_1.asyncRoutes((req, res, next) => __awaiter(this, void 0, void 0, function* () {
            let users = yield user_1.UserModel.findAllUsers();
            if (users.length === 0)
                res.status(404).send('No users found.');
            else
                res.status(200).json({ msg: "Users found.", users });
        })))
            .get('/:id', asyncRoutes_1.asyncRoutes((req, res, next) => __awaiter(this, void 0, void 0, function* () {
            let user = yield user_1.UserModel.findUserById(req.params.id);
            if (!user)
                res.status(404).send('User not found.');
            else
                res.status(200).json({ msg: "User found.", user });
        })))
            .post('/', asyncRoutes_1.asyncRoutes((req, res, next) => __awaiter(this, void 0, void 0, function* () {
            let newUser = new user_1.UserModel(req.body);
            yield newUser.save();
            res.status(201).json({ msg: 'User created.', newUser });
        })))
            .put('/:id', asyncRoutes_1.asyncRoutes((req, res, next) => __awaiter(this, void 0, void 0, function* () {
            let user = yield user_1.UserModel.findUserById(req.params.id);
            if (!user)
                res.status(404).send('User not found.');
            else
                Object.assign(user, req.body).save(res.status(202).json({ msg: 'User updated.', user }));
        })))
            .delete('/:id', asyncRoutes_1.asyncRoutes((req, res, next) => __awaiter(this, void 0, void 0, function* () {
            let user = yield user_1.UserModel.findUserById(req.params.id);
            if (!user)
                res.status(404).send('User not found.');
            else {
                user_1.UserModel.deleteUserById(req.params.id);
                res.status(200).json({ msg: 'User deleted.', user });
            }
        })))
            .delete('/', asyncRoutes_1.asyncRoutes((req, res, next) => __awaiter(this, void 0, void 0, function* () {
            let users = yield user_1.UserModel.findAllUsers();
            if (users.length === 0)
                res.status(404).send('No users found.');
            else {
                user_1.UserModel.deleteAllUsers();
                res.status(200).json({ msg: "All users deleted.", users });
            }
        })));
    }
}
exports.UserController = UserController;
//# sourceMappingURL=userCon.js.map