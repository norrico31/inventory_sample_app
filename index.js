require('dotenv').config()
const express = require("express")
const RateLimit = require("express-rate-limit");
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
const port = process.env.PORT

const limiter = RateLimit({
	windowMs: 1 * 60 * 1000, // 1 minute
	max: 20,
  });
  app.use(limiter);

app.use(cors())
app.use(bodyParser.json( {limit: '50mb', extended: true}))
app.use(bodyParser.urlencoded( {limit: '50mb', extended: true}))

app.get("/", (req, res) => res.send("Hello World!"))

app.use(createRoute('/roles'), require('./routes/roleRoutes'))
app.use(createRoute('/users'), require('./routes/userRoutes'))
app.use(createRoute('/items'), require('./routes/itemRoutes'))

app.listen(port, () => {
	console.log(`[server]: Server is running at ${process.env.APP_URL}:${port}`)
	require('./database')
})

function createRoute(path) {
    return `/api/${process.env.APP_VERSION}${path}`
}