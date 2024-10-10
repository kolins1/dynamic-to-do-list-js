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

// Selecting the Add Task button (adjusted to use 'add-task-btn')
const addButton = document.getElementById('add-task-btn');

// Selecting the task input field
const taskInput = document.getElementById('task-input');

// Selecting the unordered list that will display tasks
const taskList = document.getElementById('task-list');

// Step 1: Setup Event Listener for Page Load
document.addEventListener('DOMContentLoaded', function() {

    // Step 2: Select DOM Elements
    const addButton = document.getElementById('add-task'); // Button to add tasks
    const taskInput = document.getElementById('task-input'); // Input field for new tasks
    const taskList = document.getElementById('task-list'); // UL to display tasks

    let tasks = []; // Array to hold tasks

    // Step 3: Load Tasks from Local Storage
    function loadTasks() {
        const savedTasks = localStorage.getItem('tasks'); // Retrieve tasks from Local Storage
        if (savedTasks) {
            tasks = JSON.parse(savedTasks); // Parse the JSON string into an array
            tasks.forEach(taskText => createTaskElement(taskText)); // Populate tasks to the UI
        }
    }

    // Step 4: Create and Save Task Function
    function addTask() {
        const taskText = taskInput.value.trim(); // Get task input value and trim spaces

        if (taskText === "") {
            alert("Please enter a task!"); // Alert if the task is empty
            return;
        }

        tasks.push(taskText); // Add the new task to the tasks array
        localStorage.setItem('tasks', JSON.stringify(tasks)); // Save tasks array to Local Storage

        createTaskElement(taskText); // Create the task element in the UI
        taskInput.value = ''; // Clear the input field
    }

    // Step 5: Function to Create and Display a Task Element in the DOM
    function createTaskElement(taskText) {
        const listItem = document.createElement('li');
        listItem.textContent = taskText;

        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.className = 'remove-btn';

        removeButton.onclick = function() {
            removeTask(taskText, listItem); // Call removeTask function on click
        };

        listItem.appendChild(removeButton); // Append the remove button to the list item
        taskList.appendChild(listItem); // Append the list item to the task list (ul)
    }

    // Step 6: Function to Remove Task from the List and Local Storage
    function removeTask(taskText, listItem) {
        tasks = tasks.filter(task => task !== taskText); // Remove the task from the tasks array
        localStorage.setItem('tasks', JSON.stringify(tasks)); // Update Local Storage

        taskList.removeChild(listItem); // Remove the task element from the DOM
    }

    // Step 7: Attach Event Listeners
    addButton.addEventListener('click', addTask); // Add task on button click
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask(); // Add task on Enter key press
        }
    });

    // Step 8: Load Tasks from Local Storage when the page loads
    loadTasks(); // Initial task load from Local Storage

});
