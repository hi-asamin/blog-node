import { Express, Request, Response } from 'express'
import TransactionRouter from './transactions'

export function initRoutes(app: Express) {
  // winston.log('info', '--> Initialisations des routes')

  app.use('/api/v1/transactions', TransactionRouter)

  app.get('/api/v1/ping', (req: Request, res: Response) =>
    res.status(200).send({
      message: 'server is running!',
    })
  )
  app.all('*', (req: Request, res: Response) =>
    res.status(400).send({
      message: 'Not Found...',
    })
  )
}
