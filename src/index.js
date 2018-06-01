const logger = require('winston');
const app = require('./app');
const port = app.get('port');

app.run(port).then(() => {
  logger.info('MYKB listening at http://%s:%d', app.get('host'), port)
})

process.on('unhandledRejection', (reason, p) =>
  logger.error('Unhandled Rejection at: Promise ', p, reason)
);