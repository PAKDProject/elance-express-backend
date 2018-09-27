import { Router, Response, Request, NextFunction } from 'express'
import { BaseRouter } from '../interfaces/baseRouter'
import { UserModel, User } from '../models/user'
import { asyncRoutes } from '../middleware/asyncRoutes'

/**
* @class UserController used to control user route
*/
export class UserController implements BaseRouter {
    /**
    * @property basePath used as a base for routing related to the index
    */
    basePath: string = '/user'

    /**
    * @constructor
    */
    constructor() {

    }

    /**
    * Returns a configured router for the route
    * @returns Router
    */
    returnRouter(): Router {
        return Router()
            .get('/', asyncRoutes(async (req: Request, res: Response, next: NextFunction) => {
                let users = await UserModel.findAllUsers()
                if (users.length === 0) res.status(404).send('No users found')
                else res.send(users)
            }))
            .post('/', asyncRoutes(async (req: Request, res: Response, next: NextFunction) => {
                let newUser = new UserModel(req.body)
                newUser.save()
                res.status(201).json({msg: 'User created.', newUser})
            }))
            .put('/:id', asyncRoutes(async (req: Request, res: Response, next: NextFunction) => {
                let user = await UserModel.findUserById(req.params.id)
                Object.assign(user, req.body).save(res.status(202).json({msg: 'User updated.', user}))
            }))
    }
}