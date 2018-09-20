import { Typegoose, prop, ModelType, staticMethod } from 'Typegoose'
import { ObjectId } from 'mongodb';

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

    // Find a user based on the name given
    @staticMethod
    static async findUserByName(this: ModelType<User>, name: string) {
        return await this.findOne({name: name})
    }

    // Find a user based on the ID given
    @staticMethod
    static async findUserById(this: ModelType<User>, id: string) {
        let o_id = new ObjectId(id)
        return await this.findOne({_id: o_id})
    }
}

export const UserModel = new User().getModelForClass(User)