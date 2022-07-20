const { createLogger, transports, format } = require("winston");
const { combine, timestamp, printf, simple, colorize, label } = format;

const prinfFormat = printf(({ timestamp, label, level, message }) => {
  return `${timestamp} [${label}] ${level} : ${message}`;
});

const printLogFormat = {
  file: combine(
    label({
      label: "백엔드",
    }),
    timestamp({
      format: "YYYY-MM-DD HH:mm:dd",
    }),
    prinfFormat
  ),
  console: combine(colorize(), simple()),
};

const opts = {
  file: new transports.File({
    filename: "/access.log",
    dirname: "./logs",
    level: "info",
    format: printLogFormat.file,
  }),
  console: new transports.Console({
    level: "info",
    format: printLogFormat.console,
  }),
};

const logger = createLogger({
  transports: [opts.file],
});

if (process.env.NODE_ENV !== "production") {
  logger.add(opts.console);
}
module.exports = logger;
