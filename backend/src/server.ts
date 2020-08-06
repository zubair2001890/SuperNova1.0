import * as Express from 'express'
import { Express as IExpress } from 'express'
import bodyParser = require('body-parser')
import Routes from './api/routes'
import * as jwt from 'express-jwt'
import * as jwksRsa from 'jwks-rsa'
import * as path from 'path'
require('dotenv').config({ path: path.resolve(__dirname, '../.env') })

const port: number = Number(process.env.PORT) || 5000 // port / default port

// Start up an instance of app
const app: IExpress = Express()

// Configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// CORS Headers => Required for cross-origin/ cross-server communication
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  )
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PATCH, DELETE, OPTIONS'
  )
  next()
})

const publicApi: Express.Router = Express.Router()
const privateApi: Express.Router = Express.Router()

var jwtCheck = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://${process.env.AUTH0_DOMAIN}/.well-known/jwks.json`,
  }),
  audience: `https://${process.env.AUTH0_DOMAIN}/userinfo`,
  issuer: `https://${process.env.AUTH0_DOMAIN}/`,
  algorithms: ['RS256'],
})

// Register token check for the private API
privateApi.use(jwtCheck)

// Register API's on server
app.use('/api/public', publicApi)
app.use('/api/private', privateApi)

// Register all routes
Routes(publicApi, privateApi)

app.listen(port)

console.log(`Server running on port ${port}`)
