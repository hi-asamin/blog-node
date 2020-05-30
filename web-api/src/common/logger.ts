import * as winston from 'winston'

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp({
      format: 'YYYY-MM-DD HH:mm:ss',
    }),
    winston.format.errors({ stack: true }),
    winston.format.cli(), // ログレベルのカラー表示
    winston.format.printf((info) => `[${info.timestamp}] ${info.level} ${info.message}`) // jSON形式ではなくCLIログフォーマット化
  ),
  transports: new winston.transports.Console(),
})

export default logger
