<template>
  <div id="app">
    <h2>Task Management App</h2>
    <h3>Using Node.js, Express.js, Vue.js, and Docker</h3>
    <create-task v-on:create-task="createTask"></create-task>
    <task-list v-bind:tasks="tasks"></task-list>
  </div>
</template>

<script>
// import axios from 'axios';
import sweetalert from 'sweetalert';
import TaskList from './components/TaskList/TaskList';
import CreateTask from './components/CreateTask/CreateTask';

// LocalStorage for peristence in the browser until session data is cleared
const STORAGE_KEY = 'task-app-95c372d5bbf5';
const taskLocalStorage = {
  // Retrieve last stored state of tasks list from local browser memory upon page load
  retrieve: () => {
    const tasks = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
    return tasks;
  },
  // Save current state of tasks list to local browser memory
  save: (tasks) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  },
};

export default {
  name: 'app',
  components: {
    // Reference to components
    TaskList,
    CreateTask,
  },
  // Function for providing data to display list of tasks
  data() {
    return {
      tasks: taskLocalStorage.retrieve(),
    };
  },
  // Watch for changes to the tasks list
  watch: {
    tasks: {
      // Upon any change, save the current state of the tasks list to LocalStorage
      handler: (tasks) => {
        taskLocalStorage.save(tasks);
      },
    },
  },
  // Attempting to call the data store API I created, unsuccessfully
  /* created() {
    axios.get('http://localhost:8000/task_routes/tasks/*')
      .then((response) => {
        // JSON is auto parsed
        this.tasks = response.data;
        // console.log(response.data);
      })
      .catch((e) => {
        // console.log(e);
      });
  }, */
  methods: {
    // Push new task into the list using the data emitted from sendForm() in CreateTask component
    createTask(newTask) {
      this.tasks.push(newTask);
      sweetalert('Success!', 'Task created!', 'success');
    },
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
