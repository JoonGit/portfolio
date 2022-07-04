const express = require("express");
const app = express();
const fs = require("fs");
const path = require("path");
const qs = require("querystring");
const bodyParser = require("body-parser");
const sanitizehtml = require("sanitize-html");
const compression = require("compression");
const template = require("../lib/template");
const topicRouter = require("../route/router");

app.use(express.static("public"));
  
app.use("/topic", topicRouter);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(compression());
app.get("*", function (req, res, next) {
  fs.readdir("./data", function (err, filelist) {
    req.list = filelist;
    next();
  });
});

const port = 3000;

app.get("/", function (req, res) {
  // 디렉토리를 읽어온다

  title = "Welcome JS";
  drscription = "Node JS"; // 본문
  let list = template.list(req.list); // 목록
  let html = template.html(
    title,
    list,
    drscription,
    `
    <img src="img/hello.jpg" style="width:300px; display:block;">
    <a href="/create">create</a>`
  );
  res.send(html);
});

app.get("/page/:pageId", function (req, res) {
  let filteredId = path.parse(req.params.pageId).base;
  fs.readFile(`data/${filteredId}`, "utf8", function (err, description) {
    if (err) {
      // 에러 발생시 에러 핸들러로 애러가 보내진다
      next(err);
    } else {
      let title = req.params.pageId;
      let sanitizedTitle = sanitizehtml(title);
      let sanitizedDescription = sanitizehtml(description, {
        allowedTags: ["h1"],
      });
      let list = template.list(req.list);
      let html = template.html(
        sanitizedTitle,
        list,
        sanitizedDescription,
        ` <a href="/create">create</a>
          <a href="/update/${sanitizedTitle}">update</a>
          <form action="/delete_process" method="post">
            <input type="hidden" name="id" value="${sanitizedTitle}">
            <input type="submit" value="delete">
          </form>`
      );
      res.send(html);
    }
  });
});

app.get("/create", function (req, res) {
  let title = "WEB - create";
  let list = template.list(req.list);
  let creat = template.create();
  let html = template.html(title, list, "", creat);
  res.send(html);
});

app.post("/create_process", function (req, res) {
  let post = req.body;
  let title = post.title;
  let description = post.description;
  fs.writeFile(`data/${title}`, description, "utf8", function (err) {
    res.writeHead(302, { Location: `/page/${title}` });
    res.end();
  });
});

app.get("/update/:pageId", function (request, response) {
  let filteredId = path.parse(request.params.pageId).base;
  fs.readFile(`data/${filteredId}`, "utf8", function (err, drscripted) {
    let title = request.params.pageId;
    let list = template.list(request.list);
    let drscription = drscripted;
    let update = template.update(title, drscription);
    let html = template.html(title, list, "", update);

    response.send(html);
  });
});

app.post("/update_process", function (request, response) {
  let post = request.body;
  let id = post.id;
  let title = post.title;
  let description = post.description;

  fs.rename(`data/${id}`, `data/${title}`, function (error) {
    fs.writeFile(`data/${title}`, description, "utf8", function (err) {
      response.writeHead(302, { Location: `/page/${title}` });
      response.end();
    });
  });
});

app.post("/delete_process", function (request, response) {
  let post = request.body;
  let id = post.id;
  var filteredId = path.parse(id).base;
  fs.unlink(`data/${id}`, function (err) {
    response.redirect("/");
  });
});

// 404 에러
app.use(function (req, res, next) {
  res.status(404).send("Sorry cont find that!");
});

// 페이지 에러
app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send(err.stack);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

/*const http = require("http");
const fs = require("fs");
const url = require("url");
const qs = require("querystring");
const { title } = require("process");
const template = require("../lib/template");
const path = require("path");
const sanitizehtml = require("sanitize-html");

let app = http.createServer(function (request, response) {
  let _url = request.url;
  // query = 데이터베이스에게 특정한 데이터를 보여달라는 클라이언트(사용자)의 요청
  let queryData = url.parse(_url, true).query;
  let pathname = url.parse(_url, true).pathname;
  let title = queryData.id;
  if (pathname === "/") {
    // undefinde 일때
    if (queryData.id === undefined) {
      // 디렉토리를 읽어온다
      
      });
    } else {
      
    }
  } else if (pathname === "/create") {
    
    });
  } else if (pathname === "/create_process") {
    
    });
  } else if (pathname === "/update") {
    
    });
  } else if (pathname === "/update_process") {
    
    });
  } else if (pathname === "/delete_process") {
    let body = "";
    request.on("data", function (data) {
      body += data;
    });
    request.on("end", function () {
      let post = qs.parse(body);
      let id = post.id;
      fs.unlink(`data/${id}`, function (err) {
        response.writeHead(302, { Location: `/` });
        response.end();
      });
    });
  } else {
    response.writeHead(404);
    response.end("error");
  }
});

app.listen(3000);*/
