// Step 1: Setup Event Listener for Page Load
document.addEventListener('DOMContentLoaded', function() {

    // Step 2: Select DOM Elements
    const addButton = document.getElementById('add-task'); // Button to add tasks
    const taskInput = document.getElementById('task-input'); // Input field for new tasks
    const taskList = document.getElementById('task-list'); // UL to display tasks

    // Step 3: Create the addTask Function
    function addTask() {
        // Step 4: Retrieve and trim the input value
        const taskText = taskInput.value.trim();

        // Step 5: Check if taskText is not empty
        if (taskText === "") {
            alert("Please enter a task!"); // Alert if the task is empty
            return; // Exit the function if the task is empty
        }

        // Step 6: Task Creation and Removal
        // Create a new li element for the task
        const listItem = document.createElement('li');
        listItem.textContent = taskText;

        // Create the remove button for the task
        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.className = 'remove-btn';

        // Set an event listener to remove the task when button is clicked
        removeButton.onclick = function() {
            taskList.removeChild(listItem); // Remove the li element from taskList
        };

        // Append the remove button to the li element
        listItem.appendChild(removeButton);

        // Append the li element (task) to the taskList (ul)
        taskList.appendChild(listItem);

        // Clear the input field after adding the task
        taskInput.value = '';
    }

    // Step 7: Attach Event Listeners
    // Add task when the "Add Task" button is clicked
    addButton.addEventListener('click', addTask);

    // Add task when the "Enter" key is pressed inside the input field
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask(); // Call addTask when Enter key is pressed
        }
    });

});
