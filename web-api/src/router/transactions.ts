import { Router, Request, Response, NextFunction } from 'express'
import logger from '../common/logger'

const router = Router()

router.get('/', (req: Request, res: Response, next: NextFunction) => {
  logger.error('error message')
  const response = {
    method: 'GET',
    message: 'called API',
  }
  res.status(200).json(response)
})

export default router
