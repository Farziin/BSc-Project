module.exports = (server) => {
  server.route({
    method: 'GET',
    path: '/',
    handler: (request, h) => {
      return 'FARZIIN'
    }
  })
}
