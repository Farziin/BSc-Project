'use strict'
const config = require('./config/config')

const hapi = require('hapi')

// config server
const server = hapi.server({
  port: config.port,
  host: config.host
})

// router
require('./routes')(server)

// initialization of server
const init = async () => {
  await server.start()
  console.log(`Server running at: ${server.info.uri}`)
}

process.on('unhandledRejection', (err) => {
  console.log(err)
  process.exit(1)
})

init()
