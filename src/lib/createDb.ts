import { connect as MongooseConnect} from "mongoose";
import { get as getConfig } from "config";

export class MongoDb {
    private _mongoUrl: string

    constructor() {
        this._mongoUrl = getConfig("db.url")
        // this._mongoUrl = 'mongodb://elance:testing1234@ds163182.mlab.com:63182/app-elance-site'
    }

    async setup() : Promise<any> {
        try {
            await MongooseConnect(this._mongoUrl, {
                useNewUrlParser: true
            })
        } catch (error) {
            throw new Error(error)
        }
        
    }
}