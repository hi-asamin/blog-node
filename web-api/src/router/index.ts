import { Express, Request, Response } from 'express'
import logger from '../common/logger'

import TransactionRouter from './transactions'

export function initRoutes(app: Express) {
  logger.info('--> Initialisations des routes')

  app.use('/api/v1/transactions', TransactionRouter)

  app.get('/api/v1/ping', (res: Response) => {
    const response = {
      message: 'server is running!',
    }
    res.status(200).send(response)
  })

  app.all('*', (res: Response) => {
    const response = {
      status: 400,
      code: 'api00001',
      message: 'server is running!',
    }
    res.status(400).send(response)
  })
}
