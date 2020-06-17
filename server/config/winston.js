const { createLogger, format, transports } = require('winston');
const { combine, timestamp, label, printf, json, colorize, splat } = format;
const { Console, File } = transports;
util = require('util');

function log(module) {
  const path = module.filename;

  // custom format for console
  const consoleFormat = printf(({ level, message, label }) => {
    return `${level}: [${label}] ${util.format(message)}`;
  });

  // custom format for file output
  const fileFormat = printf(({ level, message, label, timestamp }) => {
    return `${level}: [${timestamp} - ${label}] ${util.format(message)}`;
  });

  const logger = createLogger({
    level: 'debug',
  });

  const consoleLogger = new Console({
    format: combine(
      colorize(),
      label({ label: path }),
      json(),
      splat(),
      consoleFormat,
    ),
  });
  const fileLogger = new File({
    filename: 'logger.log',
    format: combine(
      timestamp(),
      json(),
      label({ label: path }),
      fileFormat
    ),
  });
  const errorLogger = new File({
    filename: 'error.log',
    level: 'error',
    format: combine(
      timestamp(),
      json(),
      label({ label: path }),
      fileFormat
    ),
  });

  if (process.env.NODE_ENV !== 'production') {
    logger.add(consoleLogger);
  } else {
    logger.add(errorLogger);
    logger.add(fileLogger);
  }
  return logger;
}

module.exports = log;
