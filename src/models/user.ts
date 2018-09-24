import { Typegoose, prop, ModelType, staticMethod, arrayProp, Ref } from 'Typegoose'
import { ObjectId } from 'mongodb';
import { Job } from './job';

/**
* Model class for User
* @extends Typegoose
*/

export class Skill {
    @prop()
    title?: string

    @prop()
    description?: string
}

export class EducationItem {
    @prop()
    degreeTitle?: string

    @prop()
    startYear?: Date

    @prop()
    endYear?: Date

    @prop()
    collegeName?: string

    @prop()
    grade?: string

    @prop()
    description?: string
}

export class SocialLink {
    @prop()
    name?: string

    @prop()
    linkUrl?: string
}

export class User extends Typegoose {
    @prop()
    username?: string

    @prop()
    fName?: string

    @prop()
    lName?: string

    @prop()
    dob?: Date

    @prop()
    summary?: string

    @arrayProp({items: Skill})
    skills?: Skill[]

    @arrayProp({items: EducationItem})
    educationItems?: EducationItem[]

    @arrayProp({itemsRef: Job})
    activeJobs?: Ref<Job>[]

    @arrayProp({itemsRef: Job})
    jobHistory?: Ref<Job>[]

    @prop()
    avatarUrl?: string

    @prop()
    backgroundUrl?: string

    @arrayProp({items: SocialLink})
    socialLinks?: SocialLink[]

    @prop()
    tagline?: string

    @arrayProp({itemsRef: User})
    contacts?: User[]

    constructor(username?: string, fName?: string, lName?: string, dob?: Date, summary?: string, skills?: Skill[], educationItems?: EducationItem[], activeJobs?: Job[], jobHistory?: Job[], avatarUrl?: string, backgroundUrl?: string, socialLinks?: SocialLink[], tagline?: string, contacts?: User[]) {
        super()
        this.username = username
        this.fName = fName
        this.lName = lName
        this.dob = dob
        this.summary = summary
        this.skills = skills
        this.educationItems = educationItems
        this.activeJobs = activeJobs
        this.jobHistory = jobHistory
        this.avatarUrl = avatarUrl
        this.backgroundUrl = backgroundUrl
        this.socialLinks = socialLinks
        this.tagline = tagline
        this.contacts = contacts
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