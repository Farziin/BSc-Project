module.exports = (server) => {
  server.route({
    method: 'GET',
    path: '/',
    handler: (request, h) => {
      return 'MAIN'
    }
  })
  server.route({
    method: 'POST',
    path: '/add-scenario',
    handler: (request, h) => {
      // TODO: give req.payload and add to db
      return 'ok'
    }
  })
}
