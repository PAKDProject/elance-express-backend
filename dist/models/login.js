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
* Model class for Login
* @extends Typegoose
*/
class Login extends typegoose_1.Typegoose {
    constructor(email, password, userId) {
        super();
        this.email = email;
        this.password = password;
        this.userId = userId;
    }
    /**
    * Find login by email
    * @param this - context
    * @param email - email for the person
    */
    static findLoginByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.find({ email: email });
        });
    }
    /**
     * Adding new login details
     * @param this - context
     * @param email - email
     * @param encryptedPassword - password which is encrypted by hash
     * @param userId - userId to correlate user with login details
     */
    static addNewLogin(email, encryptedPassword, userId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.insertMany(new Login(email, encryptedPassword, userId));
        });
    }
}
__decorate([
    typegoose_1.prop(),
    __metadata("design:type", String)
], Login.prototype, "email", void 0);
__decorate([
    typegoose_1.prop(),
    __metadata("design:type", String)
], Login.prototype, "password", void 0);
__decorate([
    typegoose_1.prop(),
    __metadata("design:type", Number)
], Login.prototype, "failedLogins", void 0);
__decorate([
    typegoose_1.prop(),
    __metadata("design:type", mongodb_1.ObjectId)
], Login.prototype, "userId", void 0);
__decorate([
    typegoose_1.staticMethod,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], Login, "findLoginByEmail", null);
__decorate([
    typegoose_1.staticMethod,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, mongodb_1.ObjectId]),
    __metadata("design:returntype", Promise)
], Login, "addNewLogin", null);
exports.Login = Login;
exports.LoginModel = new Login().getModelForClass(Login);
//# sourceMappingURL=login.js.map