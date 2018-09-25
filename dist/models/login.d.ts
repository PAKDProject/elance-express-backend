/// <reference types="mongoose" />
import { Typegoose, ModelType } from 'Typegoose';
import { ObjectId } from 'mongodb';
/**
* Model class for Login
* @extends Typegoose
*/
export declare class Login extends Typegoose {
    username?: string;
    password?: string;
    failedLogins?: number;
    userId?: ObjectId;
    constructor(username?: string, password?: string, userId?: ObjectId);
    /**
    * Find login by username
    * @param this - context
    * @param username - username for the person
    */
    static findLoginByUsername(this: ModelType<Login>, username: string): Promise<import("Typegoose").InstanceType<Login>[]>;
    /**
     * Adding new login details
     * @param this - context
     * @param username - username
     * @param encryptedPassword - password which is encrypted by hash
     * @param userId - userId to correlate user with login details
     */
    static addNewLogin(this: ModelType<Login>, username: string, encryptedPassword: string, userId: ObjectId): Promise<import("Typegoose").InstanceType<Login>>;
}
export declare let LoginModel: import("mongoose").Model<import("Typegoose").InstanceType<Login>> & Login & typeof Login;
