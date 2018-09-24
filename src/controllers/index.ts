import { TestController as Test } from "./testCon"
import { UserController as User } from "./userCon"
import { LoginController as Login } from "./loginCon"

// All backend routes listed below
export default [
    new Test(),
    new User(),
    new Login()
]