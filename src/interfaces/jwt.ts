import { ObjectId } from "mongodb";

export interface IJWT {
    userId: ObjectId,
    expiry: string
}