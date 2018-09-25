$(function() {
    // In this code, jQuery is used to "download" the data from our server
    // We then dynamically display this content in our table. This is very similar to the group projects you just completed.
  
    const render = function () {
  
      // Run Queries!
      // ==========================================
      runTodoQuery();
    }
  
    const renderTodoList = function (outputElement, dataList) {
      // Loop through and display each of the customers
        for (let i = 0; i < dataList.length; i++) {
  
          const output = $(outputElement);
  
          // Then display the fields in the HTML (Section Name, Date, URL)
          const listItem = $("<li class='list-group-item mt-4'>");
  
          listItem.append(
            $("<h2>").text(dataList[i].content),
          );
  
          output.append(listItem);
        }
    }
  
    const runTodoQuery = function () {
  
      // The AJAX function uses the URL of our API to GET the data associated with it (initially set to localhost)
      $.ajax({ url: "/api/todoList", method: "GET" })
        .then(function(todoList) {
          renderTodoList('#todoList', todoList);
        });
    }
  
    // This function resets all of the data in our tables. This is intended to let you restart a demo.
    const clearTodo = function () {
      alert("Clearing...");
  
      // Clear the tables on the server and then empty the elements on the client
      $.ajax({ url: "/api/clear", method: "POST" }).then(function() {
        $("#todoList").empty();
      });
    }
  
    $("#clear").on("click", clearTodo);
  
    // Render our data to the page
    render();
  });
  