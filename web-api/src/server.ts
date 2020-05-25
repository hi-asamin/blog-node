import * as express from 'express'
import { Express } from 'express'
import * as cors from 'cors'
import { json, urlencoded } from 'body-parser'
import * as routes from './router/index'

const PORT: number = 3000

export class Server {
  private app: Express

  constructor() {
    this.app = express()

    // Express middleware
    this.app.use(
      cors({
        optionsSuccessStatus: 200,
      })
    )
    this.app.use(
      urlencoded({
        extended: true,
      })
    )
    this.app.use(json())
    this.app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}!`)
    })
    routes.initRoutes(this.app)
  }

  public getApp() {
    return this.app
  }
}
new Server()
