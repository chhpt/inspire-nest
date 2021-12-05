import express from 'express'
import { NestFactory } from '@nestjs/core'
import { ExpressAdapter, NestExpressApplication } from '@nestjs/platform-express'
import { AppModule } from './app.module'

const expressApp = express()
const adapter = new ExpressAdapter(expressApp)
const port = process.env.PORT || 5000

const isLocal = process.env.NODE_ENV === 'local'

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, adapter)

  // enable cors
  // app.enableCors({
  //   origin: (
  //     requestOrigin: string,
  //     callback: (err: Error | null, allow?: boolean) => void,
  //   ) => {
  //     callback(null, true);
  //   },
  //   maxAge: 600,
  //   credentials: true,
  // });

  // disable x-powered-by express header
  app.disable('x-powered-by')

  if (isLocal) {
    await app.listen(port)
  } else {
    await app.init()
    return expressApp
  }
}

if (isLocal) {
  console.log('🚀 App run on local mode')

  bootstrap()
    .then(() => {
      console.log(`🚀 App listen on http://localhost:${port}`)
    })
    .catch((err) => {
      console.log(err)
    })
}

export { bootstrap }
