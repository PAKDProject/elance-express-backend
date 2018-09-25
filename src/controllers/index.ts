import { UserController as User } from "./userCon"
import { LoginController as Login } from "./loginCon"

// All backend routes listed below
export default [
    new User(),
    new Login()
]