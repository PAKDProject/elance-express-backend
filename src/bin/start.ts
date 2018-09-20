import { Server } from '../lib/createServer'
import { error } from '../helpers/logger'

// Starts up the Server
(async () => {
    try {
        let app = new Server(3001)
        await app.config()
        app.start()
    } catch (err) {
        error(err)
    }
})()