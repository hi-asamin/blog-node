import express from 'express'
import cors from 'cors'
import { json, urlencoded } from 'body-parser'
import * as routes from './router/index'
import logger from './common/logger'

const PORT: number = 3000

export class Server {
  private app: express.Express

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
      logger.info(`Server running on port ${PORT}!`)
    })
    routes.initRoutes(this.app)
  }

  public getApp() {
    return this.app
  }
}
new Server()
