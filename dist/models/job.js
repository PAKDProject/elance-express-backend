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
/**
* Model class for Job
* @extends Typegoose
*/
class Job extends typegoose_1.Typegoose {
    constructor(title, payment, description, startDate, dueDate, employeeID, progress) {
        super();
        this.title = title;
        this.payment = payment;
        this.description = description;
        this.startDate = startDate;
        this.dueDate = dueDate;
        this.employerID = employeeID;
        this.progress = progress;
    }
    /**
    * Default method for finding all Jobs
    * @param this - context
    */
    static findAllJobs() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.find({});
        });
    }
    /**
    * Find Job by username
    * @param this - context
    * @param title - title for the job
    */
    static findJobByTitle(title) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.find({ title: title });
        });
    }
}
__decorate([
    typegoose_1.prop(),
    __metadata("design:type", String)
], Job.prototype, "title", void 0);
__decorate([
    typegoose_1.prop(),
    __metadata("design:type", Number)
], Job.prototype, "payment", void 0);
__decorate([
    typegoose_1.prop(),
    __metadata("design:type", String)
], Job.prototype, "description", void 0);
__decorate([
    typegoose_1.prop(),
    __metadata("design:type", Date)
], Job.prototype, "startDate", void 0);
__decorate([
    typegoose_1.prop(),
    __metadata("design:type", Date)
], Job.prototype, "dueDate", void 0);
__decorate([
    typegoose_1.prop(),
    __metadata("design:type", mongodb_1.ObjectId)
], Job.prototype, "employerID", void 0);
__decorate([
    typegoose_1.prop(),
    __metadata("design:type", Number)
], Job.prototype, "progress", void 0);
__decorate([
    typegoose_1.staticMethod,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Job, "findAllJobs", null);
__decorate([
    typegoose_1.staticMethod,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], Job, "findJobByTitle", null);
exports.Job = Job;
exports.JobModel = new Job().getModelForClass(Job);
//# sourceMappingURL=job.js.map