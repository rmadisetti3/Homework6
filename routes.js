const path = require("path");

const todoList = require("./todoListData.js");

module.exports = function(app) {
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "./index.html"));
  });
  app.get("/api/todoList", function(req, res) {
    res.sendFile(path.join(__dirname, "./todoList.html"));
  });
  app.post("/api/todoList", function(req, res) {
    todoList.push(req.body);
  });

//   app.delete("/delete", function(req, res) {
//     const chosen = req.params.content;
//     const index = todoList.find(e => e.content == chosen);
//     todoList.splice(index, 1);
//   });

//   app.put("/update", function(req, res) {
//     const chosen = req.params.content;
//     todoList.push(req.body);
//   });
};
