module.exports = (server) => {
  server.route({
    method: 'GET',
    path: '/',
    handler: (request, h) => {
      return 'MAIN'
    }
  })
  server.route({
    config: {
      cors: {
        origin: ['*'],
        additionalHeaders: ['cache-control', 'x-requested-with']
      }
    },
    method: 'GET',
    path: '/get-things',
    handler: (request, h) => {
      // TODO: give req.payload and add to db
      return h.response([
        {
          'id': 1,
          'name': 'temp_sensor',
          'validRange': [-20, 50],
          'description': 'این سنسور می‌تواند دماهای بین -20 تا 50 درجه سانتی‌گراد را محاسبه نماید.',
          'active': true,
          'type': 'sensor'
        },
        {
          'id': 2,
          'name': 'hum_sensor',
          'validRange': [0, 100],
          'description': 'رطویت را بر اساس درصد بیان می‌کند.',
          'active': true,
          'type': 'sensor'
        },
        {
          'id': 3,
          'name': 'water_actuator',
          'validRange': [0, 1],
          'description': 'زمین را آبیاری می‌کند یا نمی‌کند.',
          'active': true,
          'type': 'actuator'
        }
      ])
    }
  })
}
