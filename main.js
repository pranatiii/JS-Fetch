
document.addEventListener('DOMContentLoaded', () => {
  const apiUrl = "https://dummyjson.com/todos";
  const loadingElement = document.getElementById("loading");
  // Fetch the API 
  fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }
      return response.json();
    })
    .then((data) => {
      // hide the loading messgae
      loadingElement.style.display = 'none'
      // Call the function to display data in table
      displayTable(data.todos);
    })
    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
      loadingElement.textContent = "Failed to load the data.";
    });
    
  // Function to display API data in the table
  function displayTable(todos) {
    const tableBody = document.querySelector("#todosTable tbody");

    todos.forEach(todo => {
      const row = document.createElement('tr');

      const cellId = document.createElement('td');
      cellId.textContent = todo.id;
      row.appendChild(cellId);

      const cellTodo = document.createElement('td');
      cellTodo.textContent = todo.todo;
      row.appendChild(cellTodo);

      const cellCompleted = document.createElement('td');
      cellCompleted.textContent = todo.completed;
      row.appendChild(cellCompleted);

      const cellUserId = document.createElement('td');
      cellUserId.textContent = todo.userId;
      row.appendChild(cellUserId);

      tableBody.appendChild(row);
    });
  }
});





