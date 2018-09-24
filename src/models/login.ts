import { Typegoose, prop, ModelType, staticMethod } from 'Typegoose'
import { ObjectId } from 'mongodb';

/**
* Model class for Login
* @extends Typegoose
*/
export class Login extends Typegoose {
    @prop()
    username?: string

    @prop()
    password?: string

    @prop()
    failedLogins?: number

    @prop()
    userId?: ObjectId

    constructor(username?: string, password?: string, userId?: ObjectId) {
        super()
        this.username = username;
        this.password = password;
        this.userId = userId;
    }

    /**
    * Find login by username
    * @param this - context
    * @param username - username for the person
    */
    @staticMethod
    static async findLoginByUsername(this: ModelType<Login>, username: string) {
        return await this.find({username: username})
    }

    /**
     * Adding new login details
     * @param this - context
     * @param username - username
     * @param encryptedPassword - password which is encrypted by hash
     * @param userId - userId to correlate user with login details
     */
    @staticMethod
    static async addNewLogin(this: ModelType<Login>, username: string, encryptedPassword: string, userId: ObjectId) {
        return await this.insertMany(new Login(username, encryptedPassword, userId));
    }

}

export let LoginModel = new Login().getModelForClass(Login)