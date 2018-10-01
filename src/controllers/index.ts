import { UserController as User } from "./userCon"
import { LoginController as Login } from "./loginCon"
import { IndexController as Index } from "./indexCon"

// All backend routes listed below
export default [
    new User(),
    new Login(),
    new Index()
]