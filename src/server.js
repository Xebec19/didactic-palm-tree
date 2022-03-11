const app = require('./index');
const logger = require('./utils/winston.utils');
const port = process.env.PORT || 3000

app.listen(port, () => {
    logger.log({ private: true, level: 'info', message: `app listening at http://localhost:${port}` })
})