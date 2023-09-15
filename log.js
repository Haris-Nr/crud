const http = require("http");
// const fs = require("fs");
// const url = require("url");
const express = require("express");
const app = express();

// const myHandler = (req, res) => {
//     if (req.url === "/favicon.ico") return res.end();
//     const log = `${Date.now()}: ${req.method} ${req.url} New Req Recived\n`;
//     const myUrl = url.parse(req.url, true);
//     console.log(myUrl);
//     fs.appendFile("log.txt", log, (err, data) => {
//         switch (myUrl.pathname) {
//             case "/":
//                 if (req.method === "GET") res.end("My World");

//                 break;
//             case "/aboutme":
//                 const username = myUrl.query.name;
//                 const age = myUrl.query.age;
//                 res.end("I am " + username);
//                 break;
//             case "/search":
//                 const search = myUrl.query.search_query;
//                 res.end("Here are your results for" + search);
//             case "/signup":
//                 if (req.method === "GET") res.end("Signup form");
//                 else if (req.method === "POST") {
//                     // DB Query
//                     res.end("Success Data");
//                 }
//             default:
//                 res.end("404");
//         }
//     });
// };

app.get("/about", (req, res) => {
    return res.send("About " + req.query.name + req.query.age);
});
app.get("/", (req, res) => {
    return res.send("Home");
});

// const myServer = http.createServer(app).listen(9999, () => {
//     console.log(`server is running on port 9999`);
// });

app.listen(9999, () => {
        console.log(`server is running on port 9999`)});
