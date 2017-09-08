<template>
  <div>
    <task v-on:delete-task="deleteTask" v-on:complete-task="completeTask" v-for="task in tasks" :task.sync="task"></task>
  </div>
      
</template>

<script type = "text/javascript" >
import sweetalert from 'sweetalert';
import Task from '../Task/Task';

// LocalStorage for peristence in the browser until session data is cleared
const STORAGE_KEY = 'task-app-95c372d5bbf5';
const taskLocalStorage = {
  // Save current state of tasks list to local browser memory
  save: (tasks) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  },
};

export default {
  props: ['tasks'],
  components: {
    Task,
  },
  methods: {
    // Delete a task from the list using the trash icon
    deleteTask(task) {
      const taskIndex = this.tasks.indexOf(task);
      this.tasks.splice(taskIndex, 1);
      sweetalert('Deleted!', 'Your task has been deleted.', 'success');
    },
    // Mark a task as completed by clicking the Pending button
    completeTask(task) {
      const taskIndex = this.tasks.indexOf(task);
      this.tasks[taskIndex].completed = true;
      taskLocalStorage.save(this.tasks);
      sweetalert('Success!', 'Task completed!', 'success');
    },
  },
};

</script>

<style scoped>
p.tasks {
  text-align: center;
}
</style>