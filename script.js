// Step 1: Setup Event Listener for Page Load
document.addEventListener('DOMContentLoaded', function() {

    // Step 2: Select DOM Elements
    const addButton = document.getElementById('add-task');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Step 3: Create the addTask Function
    function addTask() {
        // Step 4: Retrieve and trim the input value
        const taskText = taskInput.value.trim();

        // Step 5: Check if taskText is not empty
        if (taskText === "") {
            alert("Please enter a task!");
            return; // Exit the function if the task is empty
        }

        // Step 6: Task Creation and Removal
        // Create a new li element
        const listItem = document.createElement('li');
        listItem.textContent = taskText;

        // Create the remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.className = 'remove-btn';

        // Set an event listener to remove the task when button is clicked
        removeButton.onclick = function() {
            taskList.removeChild(listItem); // Remove the li element from the taskList
        };

        // Append the remove button to the li element
        listItem.appendChild(removeButton);

        // Append the li element to the taskList
        taskList.appendChild(listItem);

        // Clear the input field
        taskInput.value = '';
    }

    // Step 7: Attach Event Listeners
    // Add task when "Add Task" button is clicked
    addButton.addEventListener('click', addTask);

    // Add task when "Enter" key is pressed inside the input field
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
