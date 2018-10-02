import { Typegoose, prop, ModelType, staticMethod, arrayProp, Ref } from 'typegoose'
import { ObjectId } from 'mongodb';
import { Job } from './job';

/**
 * Class for Skills
 */
export class Skill {
    @prop()
    title?: string

    @prop()
    description?: string
}

/**
 * Class for Education Items
 */
export class EducationItem {
    @prop()
    degreeTitle?: string

    @prop()
    startYear?: string

    @prop()
    endYear?: string

    @prop()
    collegeName?: string

    @prop()
    grade?: string

    @prop()
    description?: string
}

/**
 * Class for Social Links
 */
export class SocialLink {
    @prop()
    name?: string

    @prop()
    linkUrl?: string
}

/**
* Model class for User
* @extends Typegoose
*/
export class User extends Typegoose {

    @prop()
    email?: string

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
    contacts?: Ref<User>[]

    constructor(email?: string, fName?: string, lName?: string, dob?: Date, summary?: string, skills?: Skill[], educationItems?: EducationItem[], activeJobs?: Job[], jobHistory?: Job[], avatarUrl?: string, backgroundUrl?: string, socialLinks?: SocialLink[], tagline?: string, contacts?: User[]) {
        super()
        this.email = email
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
        return await this.findOne({ name: name })
    }

    // Find a user based on the ID given
    @staticMethod
    static async findUserById(this: ModelType<User>, id: string) {
        let o_id = new ObjectId(id)
        return await this.findOne({ _id: o_id })
    }

    // Query the user collection
    @staticMethod
    static async findUsersByQuery(this: ModelType<User>, query: object) {
        return await this.find(query)
    }

    // Delete a user based on the ID given
    @staticMethod
    static async deleteUserById(this: ModelType<User>, id: string) {
        let o_id = new ObjectId(id)
        return await this.deleteOne({ _id: o_id })
    }
}

export const UserModel = new User().getModelForClass(User)