<template>
  <div class='ui centered card'>
    <div class="content" v-show="!isEditing">
      <div class='header'>
          {{ task.title }}
      </div>
      <div class='meta'>
          {{ task.desc }}
      </div>
      <br>
      <div class='meta'>
          {{ task.date }}
      </div>
      <div class='extra content'>
        <span class='right floated red trash icon' v-on:click="deleteTask(task)">
          <i class='trash icon'></i>
        </span>
      </div>
    </div>
    <div class='ui bottom attached green basic button' v-show="task.completed == true" disabled>
        <i class="checkmark box icon"></i> Completed 
    </div>
    <div class='ui bottom attached red basic button' v-on:click="completeTask(task)" v-show="task.completed != true">
        <i class="square outline icon"></i> Pending
    </div>
  </div>
</template>

<script type="text/javascript">

export default {
  props: ['task'],
  methods: {
    completeTask(task) {
      this.$emit('complete-task', task);
    },
    deleteTask(task) {
      this.$emit('delete-task', task);
    },
  },
};
</script>