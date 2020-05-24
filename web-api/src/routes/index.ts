import { Express, Request, Response } from 'express'
import TransactionsRoutes from './transactions'
import * as endpoints from '../config/endpoints.json'

export function initRoutes(app: Express) {
  // winston.log('info', '--> Initialisations des routes')
  
  app.use(endpoints.transactions, TransactionsRoutes)

  app.get('/api/v1/ping', (req: Request, res: Response) => res.status(200).send({
    message: 'server is running!'
  }))
  app.all('*', (req: Request, res: Response) => res.status(400).send({
    message: 'Not Found...'
  }))
}