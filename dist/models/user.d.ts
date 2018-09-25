/// <reference types="mongoose" />
import { Typegoose, ModelType, Ref } from 'Typegoose';
import { Job } from './job';
/**
 * Class for Skills
 */
export declare class Skill {
    title?: string;
    description?: string;
}
/**
 * Class for Education Items
 */
export declare class EducationItem {
    degreeTitle?: string;
    startYear?: Date;
    endYear?: Date;
    collegeName?: string;
    grade?: string;
    description?: string;
}
/**
 * Class for Social Links
 */
export declare class SocialLink {
    name?: string;
    linkUrl?: string;
}
/**
* Model class for User
* @extends Typegoose
*/
export declare class User extends Typegoose {
    username?: string;
    fName?: string;
    lName?: string;
    dob?: Date;
    summary?: string;
    skills?: Skill[];
    educationItems?: EducationItem[];
    activeJobs?: Ref<Job>[];
    jobHistory?: Ref<Job>[];
    avatarUrl?: string;
    backgroundUrl?: string;
    socialLinks?: SocialLink[];
    tagline?: string;
    contacts?: User[];
    constructor(username?: string, fName?: string, lName?: string, dob?: Date, summary?: string, skills?: Skill[], educationItems?: EducationItem[], activeJobs?: Job[], jobHistory?: Job[], avatarUrl?: string, backgroundUrl?: string, socialLinks?: SocialLink[], tagline?: string, contacts?: User[]);
    /**
    * Default method for finding all Users
    * @param this - context
    */
    static findAllUsers(this: ModelType<User>): Promise<import("Typegoose").InstanceType<User>[]>;
    static findUserByName(this: ModelType<User>, name: string): Promise<import("Typegoose").InstanceType<User> | null>;
    static findUserById(this: ModelType<User>, id: string): Promise<import("Typegoose").InstanceType<User> | null>;
}
export declare const UserModel: import("mongoose").Model<import("Typegoose").InstanceType<User>> & User & typeof User;
