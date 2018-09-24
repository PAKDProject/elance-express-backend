import { Typegoose, prop, ModelType, staticMethod } from 'Typegoose'
import { ObjectId } from 'mongodb'

/**
* Model class for Job
* @extends Typegoose
*/
export class Job extends Typegoose {
    @prop()
    title?: string

    @prop()
    payment?: number

    @prop()
    description?: string

    @prop()
    startDate?: Date

    @prop()
    dueDate?: Date

    @prop()
    employerID?: ObjectId

    @prop()
    progress?: number

    constructor(title?: string, payment?: number, description?: string, startDate?: Date, dueDate?: Date, employeeID?: ObjectId, progress?: number) {
        super()
        this.title = title
        this.payment = payment
        this.description = description
        this.startDate = startDate
        this.dueDate = dueDate
        this.employerID = employeeID
        this.progress = progress
    }
    /**
    * Default method for finding all Jobs
    * @param this - context
    */
    @staticMethod
    static async findAllJobs(this: ModelType<Job>) {
        return await this.find({})
    }

    /**
    * Find Job by username
    * @param this - context
    * @param title - title for the job
    */
    @staticMethod
    static async findJobByTitle(this: ModelType<Job>, title: string) {
        return await this.find({title: title})
    }

}

export const JobModel = new Job().getModelForClass(Job)