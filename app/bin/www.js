"use strict";

const app = require("../app");
const logger = require("../src/config/looger");
const looger = require("../src/config/looger");

const port = process.env.PORT || 3000;

app.listen(port, () => {
  logger.info(`%d 서버 가동`, port);
});
