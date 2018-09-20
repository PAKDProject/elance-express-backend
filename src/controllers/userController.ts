import { Router, Response, Request } from 'express'
import { BaseRouter } from '../interfaces/baseRouter'
import { UserModel, User } from '../models/user';

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
            .get('/', (req: Request, res: Response) => {
                (async () => {
                    try {
                        let users = await UserModel.findAllUsers()
                        if(users.length === 0) res.status(404).send('No users found')
                        else res.send(users)
                    } catch (error) {
                        res.status(404).send('Error finding users: ' + error )
                    }

                })()
            })
            .get('/:name/', (req: Request, res: Response) => {
                (async () => {
                    try {
                        let params = {
                            name: req.params.name
                        }
                        let userFound = await UserModel.findUserByName(params.name)
                        if(!userFound) res.status(404).send("User not found")
                        else res.send(userFound)
                    } catch (error) {
                        res.status(404).send('Error finding specified user: ' + error)
                    }
                })()
            })
            .post('/:name/', (req: Request, res: Response) => {
                (async () => {
                    try {
                        let params = {
                            name: req.params.name
                        }
                        let user = new UserModel(new User(params.name))
                        await user.save()
                        res.status(201).send(`User ${user.name} is saved`)
                    } catch (error) {
                        res.status(404).send('Error when creating user: ' + JSON.stringify(error))
                    }          
                })()
            })
    }
}