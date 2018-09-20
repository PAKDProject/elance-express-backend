import { Typegoose, prop, ModelType, staticMethod } from 'Typegoose'

/**
* Model class for User
* @extends Typegoose
*/
export class User extends Typegoose {
    @prop()
    name?: string

    constructor(name?: string) {
        super()
        this.name = name
    }
    /**
    * Default method for finding all Users
    * @param this - context
    */
    @staticMethod
    static async findAllUsers(this: ModelType<User>) {
        return await this.find({})
    }

    @staticMethod
    static async findUserByName(this: ModelType<User>, name: string) {
        return await this.findOne({name: name})
    }
}

export const UserModel = new User().getModelForClass(User)