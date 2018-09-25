$( function(){

    // Click listener for the submit button
    $('#arrow').on('click', function(event) {
      event.preventDefault();
  
      // Here we grab the form elements
      const newElement = {
        content: $('#add-todo').val().trim(),
      };
      
      $.ajax({ url: '/api/todoList', method: 'POST', data: newElement}).then(
        function(data) {
  
          // If our POST request was successfully processed, proceed on
          if (data.success) {
  
            console.log('data', data)
            $('#add-todo').val('');
            
            $('#add-todo').focus();
          } else {
  
            alert('There was a problem with your submission. Please check your entry and try again.');
          }
          
  
        });
    });
  });
  