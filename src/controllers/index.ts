import { TestController as Test } from "./testController"
import { UserController as User } from "./userController";

// All backend routes listed below
export default [
    new Test(),
    new User()
]