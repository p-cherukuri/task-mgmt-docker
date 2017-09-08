<template>
  <div id="app">
    <img src="./assets/logo.png">
    <create-task v-on:create-task="createTask"></create-task>
    <task-list v-bind:tasks="tasks"></task-list>
  </div>
</template>

<script>
import sweetalert from 'sweetalert';
import TaskList from './components/TaskList/TaskList';
import CreateTask from './components/CreateTask/CreateTask';

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
      tasks: [{
        title: 'Task A',
        desc: 'Description A',
        completed: true,
      }, {
        title: 'Task B',
        desc: 'Description B',
        completed: false,
      }, {
        title: 'Task C',
        desc: 'Description C',
        completed: false,
      }, {
        title: 'Task D',
        desc: 'Description D',
        completed: false,
      }],
    };
  },
  methods: {
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
