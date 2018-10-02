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
                if (users.length === 0) res.status(404).send('No users found.')
                else res.status(200).json({msg: "Users found.", users})
            }))
            .get('/:id', asyncRoutes(async (req: Request, res: Response, next: NextFunction) => {
                let user = await UserModel.findUserById(req.params.id)
                if (!user) res.status(404).send('User not found.')
                else res.status(200).json({msg: "User found.", user})
            }))
            .get('/search/:query', asyncRoutes(async (req: Request, res: Response, next: NextFunction) => {
                const queryObject = JSON.parse(decodeURIComponent(req.params.query))
                let users = await UserModel.findUsersByQuery(queryObject)
                if (users.length === 0) res.status(404).send('No users found.')
                else res.status(200).json({msg: "Users found.", users})
            }))
            .post('/', asyncRoutes(async (req: Request, res: Response, next: NextFunction) => {
                let user = new UserModel(req.body)
                await user.save()
                res.status(201).json({msg: 'User created.', user})
            }))
            .put('/:id', asyncRoutes(async (req: Request, res: Response, next: NextFunction) => {
                let user = await UserModel.findUserById(req.params.id)
                if (!user) res.status(404).send('User not found.')
                else Object.assign(user, req.body).save(res.status(202).json({msg: 'User updated.', user}))
            }))
            .delete('/:id', asyncRoutes(async (req: Request, res: Response, next: NextFunction) => {
                let user = await UserModel.findUserById(req.params.id)
                if (!user) res.status(404).send('User not found.')
                else {
                    UserModel.deleteUserById(req.params.id)
                    res.status(200).json({msg: 'User deleted.', user})
                } 
            }))
    }
}