import { ObjectId } from "mongodb";
import { Login, LoginModel } from "../models/login";
import { hash, genSalt } from 'bcrypt'
import { dropCollection } from 'mongoose'
/**
 * Make any changes you need to make to the database here
 */
export async function up (done) {
  let salt = await genSalt(10);
  let hashedPass = await hash('test1234', salt)
  let user = new Login(
    email = 'alan@test.com',
    password = hashedPass,
    userId = ObjectId('') //please add stuff here Killian after creating a test user with email alan@test.com
  )

  await new LoginModel(user).save()
  done()
}

/**
 * Make any changes that UNDO the up function side effects here (if possible)
 */
export async function down (done) {
  // Write migration here
  await dropCollection('logins')
  done()
}