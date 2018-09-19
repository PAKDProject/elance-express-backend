import { Server } from '../lib/createServer'

let app = new Server(3001)

try {
    app.start()
} catch (error) {
    console.log(error)
}