"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const typegoose_1 = require("typegoose");
const mongodb_1 = require("mongodb");
const job_1 = require("./job");
/**
 * Class for Skills
 */
class Skill {
}
__decorate([
    typegoose_1.prop(),
    __metadata("design:type", String)
], Skill.prototype, "title", void 0);
__decorate([
    typegoose_1.prop(),
    __metadata("design:type", String)
], Skill.prototype, "description", void 0);
exports.Skill = Skill;
/**
 * Class for Education Items
 */
class EducationItem {
}
__decorate([
    typegoose_1.prop(),
    __metadata("design:type", String)
], EducationItem.prototype, "degreeTitle", void 0);
__decorate([
    typegoose_1.prop(),
    __metadata("design:type", String)
], EducationItem.prototype, "startYear", void 0);
__decorate([
    typegoose_1.prop(),
    __metadata("design:type", String)
], EducationItem.prototype, "endYear", void 0);
__decorate([
    typegoose_1.prop(),
    __metadata("design:type", String)
], EducationItem.prototype, "collegeName", void 0);
__decorate([
    typegoose_1.prop(),
    __metadata("design:type", String)
], EducationItem.prototype, "grade", void 0);
__decorate([
    typegoose_1.prop(),
    __metadata("design:type", String)
], EducationItem.prototype, "description", void 0);
exports.EducationItem = EducationItem;
/**
 * Class for Social Links
 */
class SocialLink {
}
__decorate([
    typegoose_1.prop(),
    __metadata("design:type", String)
], SocialLink.prototype, "name", void 0);
__decorate([
    typegoose_1.prop(),
    __metadata("design:type", String)
], SocialLink.prototype, "linkUrl", void 0);
exports.SocialLink = SocialLink;
/**
* Model class for User
* @extends Typegoose
*/
class User extends typegoose_1.Typegoose {
    constructor(email, fName, lName, dob, summary, skills, educationItems, activeJobs, jobHistory, avatarUrl, backgroundUrl, socialLinks, tagline, contacts) {
        super();
        this.email = email;
        this.fName = fName;
        this.lName = lName;
        this.dob = dob;
        this.summary = summary;
        this.skills = skills;
        this.educationItems = educationItems;
        this.activeJobs = activeJobs;
        this.jobHistory = jobHistory;
        this.avatarUrl = avatarUrl;
        this.backgroundUrl = backgroundUrl;
        this.socialLinks = socialLinks;
        this.tagline = tagline;
        this.contacts = contacts;
    }
    /**
    * Default method for finding all Users
    * @param this - context
    */
    static findAllUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.find({});
        });
    }
    // Find a user based on the name given
    static findUserByName(name) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.findOne({ name: name });
        });
    }
    // Find a user based on the ID given
    static findUserById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let o_id = new mongodb_1.ObjectId(id);
            return yield this.findOne({ _id: o_id });
        });
    }
    // Delete a user based on the ID given
    static deleteUserById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let o_id = new mongodb_1.ObjectId(id);
            return yield this.deleteOne({ _id: o_id });
        });
    }
    // Empty this collection(for testing purposes)
    static deleteAllUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.deleteMany({});
        });
    }
}
__decorate([
    typegoose_1.prop(),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    typegoose_1.prop(),
    __metadata("design:type", String)
], User.prototype, "fName", void 0);
__decorate([
    typegoose_1.prop(),
    __metadata("design:type", String)
], User.prototype, "lName", void 0);
__decorate([
    typegoose_1.prop(),
    __metadata("design:type", Date)
], User.prototype, "dob", void 0);
__decorate([
    typegoose_1.prop(),
    __metadata("design:type", String)
], User.prototype, "summary", void 0);
__decorate([
    typegoose_1.arrayProp({ items: Skill }),
    __metadata("design:type", Array)
], User.prototype, "skills", void 0);
__decorate([
    typegoose_1.arrayProp({ items: EducationItem }),
    __metadata("design:type", Array)
], User.prototype, "educationItems", void 0);
__decorate([
    typegoose_1.arrayProp({ itemsRef: job_1.Job }),
    __metadata("design:type", Array)
], User.prototype, "activeJobs", void 0);
__decorate([
    typegoose_1.arrayProp({ itemsRef: job_1.Job }),
    __metadata("design:type", Array)
], User.prototype, "jobHistory", void 0);
__decorate([
    typegoose_1.prop(),
    __metadata("design:type", String)
], User.prototype, "avatarUrl", void 0);
__decorate([
    typegoose_1.prop(),
    __metadata("design:type", String)
], User.prototype, "backgroundUrl", void 0);
__decorate([
    typegoose_1.arrayProp({ items: SocialLink }),
    __metadata("design:type", Array)
], User.prototype, "socialLinks", void 0);
__decorate([
    typegoose_1.prop(),
    __metadata("design:type", String)
], User.prototype, "tagline", void 0);
__decorate([
    typegoose_1.arrayProp({ itemsRef: User }),
    __metadata("design:type", Array)
], User.prototype, "contacts", void 0);
__decorate([
    typegoose_1.staticMethod,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], User, "findAllUsers", null);
__decorate([
    typegoose_1.staticMethod,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], User, "findUserByName", null);
__decorate([
    typegoose_1.staticMethod,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], User, "findUserById", null);
__decorate([
    typegoose_1.staticMethod,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], User, "deleteUserById", null);
__decorate([
    typegoose_1.staticMethod,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], User, "deleteAllUsers", null);
exports.User = User;
exports.UserModel = new User().getModelForClass(User);
//# sourceMappingURL=user.js.map