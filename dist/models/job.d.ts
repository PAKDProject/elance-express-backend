/// <reference types="mongoose" />
import { Typegoose, ModelType } from 'Typegoose';
import { ObjectId } from 'mongodb';
/**
* Model class for Job
* @extends Typegoose
*/
export declare class Job extends Typegoose {
    title?: string;
    payment?: number;
    description?: string;
    startDate?: Date;
    dueDate?: Date;
    employerID?: ObjectId;
    progress?: number;
    constructor(title?: string, payment?: number, description?: string, startDate?: Date, dueDate?: Date, employeeID?: ObjectId, progress?: number);
    /**
    * Default method for finding all Jobs
    * @param this - context
    */
    static findAllJobs(this: ModelType<Job>): Promise<import("Typegoose").InstanceType<Job>[]>;
    /**
    * Find Job by username
    * @param this - context
    * @param title - title for the job
    */
    static findJobByTitle(this: ModelType<Job>, title: string): Promise<import("Typegoose").InstanceType<Job>[]>;
}
export declare const JobModel: import("mongoose").Model<import("Typegoose").InstanceType<Job>> & Job & typeof Job;
