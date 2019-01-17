let winston = require('winston');

let logFormat = {
    format: winston.format.combine(
        winston.format.colorize(),
        winston.format.json()
    )
};

let logOptions = {
	file: {
        level: 'info',
        filename: `../News-observer/logs.log`,
        handleExceptions: true,
        json: true,
        maxsize: 1048576,
        maxFiles: 1,
        colorize: true,
      }
}

module.exports = winston.createLogger({
    logFormat,
    transports: [
      new winston.transports.File(logOptions.file),
    ]
});;