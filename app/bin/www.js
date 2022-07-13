"use strict";

const app = require("../app");

const port = 3000;

app.listen(port, () => {
  console.log(`%d 서버 가동`, port);
});
