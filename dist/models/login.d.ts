/// <reference types="mongoose" />
import { Typegoose, ModelType } from 'typegoose';
import { ObjectId } from 'mongodb';
/**
* Model class for Login
* @extends Typegoose
*/
export declare class Login extends Typegoose {
    email?: string;
    password?: string;
    failedLogins?: number;
    userId?: ObjectId;
    constructor(email?: string, password?: string, userId?: ObjectId);
    /**
    * Find login by email
    * @param this - context
    * @param email - email for the person
    */
    static findLoginByEmail(this: ModelType<Login>, email: string): Promise<import("typegoose").InstanceType<Login>[]>;
    /**
     * Adding new login details
     * @param this - context
     * @param email - email
     * @param encryptedPassword - password which is encrypted by hash
     * @param userId - userId to correlate user with login details
     */
    static addNewLogin(this: ModelType<Login>, email: string, encryptedPassword: string, userId: ObjectId): Promise<import("typegoose").InstanceType<Login>>;
}
export declare let LoginModel: import("mongoose").Model<import("typegoose").InstanceType<Login>> & Login & typeof Login;
