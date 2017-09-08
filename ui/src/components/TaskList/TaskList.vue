<template>
  <div>
    <task v-on:delete-task="deleteTask" v-on:complete-task="completeTask" v-for="task in tasks" :task.sync="task"></task>
  </div>
      
</template>

<script type = "text/javascript" >
import sweetalert from 'sweetalert';
import Task from '../Task/Task';

export default {
  props: ['tasks'],
  components: {
    Task,
  },
  methods: {
    deleteTask(task) {
      const taskIndex = this.tasks.indexOf(task);
      this.tasks.splice(taskIndex, 1);
      sweetalert('Deleted!', 'Your To-Do has been deleted.', 'success');
    },
    completeTask(task) {
      const taskIndex = this.tasks.indexOf(task);
      this.tasks[taskIndex].completed = true;
      sweetalert('Success!', 'To-Do completed!', 'success');
    },
  },
};

</script>

<style scoped>
p.tasks {
  text-align: center;
}
</style>