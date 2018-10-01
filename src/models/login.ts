import { Typegoose, prop, ModelType, staticMethod } from 'typegoose'
import { ObjectId } from 'mongodb'

/**
* Model class for Login
* @extends Typegoose
*/
export class Login extends Typegoose {
    @prop()
    email?: string

    @prop()
    password?: string

    @prop()
    failedLogins?: number

    @prop()
    userId?: ObjectId

    constructor(email?: string, password?: string, userId?: ObjectId) {
        super()
        this.email = email;
        this.password = password;
        this.userId = userId;
    }

    /**
    * Find login by email
    * @param this - context
    * @param email - email for the person
    */
    @staticMethod
    static async findLoginByEmail(this: ModelType<Login>, email: string) {
        return await this.find({email: email})
    }

    /**
     * Adding new login details
     * @param this - context
     * @param email - email
     * @param encryptedPassword - password which is encrypted by hash
     * @param userId - userId to correlate user with login details
     */
    @staticMethod
    static async addNewLogin(this: ModelType<Login>, email: string, encryptedPassword: string, userId: ObjectId) {
        return await this.insertMany(new Login(email, encryptedPassword, userId));
    }

}

export let LoginModel = new Login().getModelForClass(Login)