<template>
  <div class='ui centered card'>
    <div class="content" v-show="!isEditing">
      <div class='header'>
          {{ task.title }}
      </div>
      <div class='meta'>
          {{ task.desc }}
      </div>
      <div class='extra content'>
          <span class='right floated edit icon' v-on:click="showForm">
          <i class='edit icon'></i>
        </span>
        <span class='right floated red trash icon' v-on:click="deleteTask(task)">
          <i class='trash icon'></i>
        </span>
      </div>
    </div>
    <div class="content" v-show="isEditing">
      <div class='ui form'>
        <div class='field'>
          <label>Title</label>
          <input type='text' v-model="task.title" >
        </div>
        <div class='field'>
          <label>Description</label>
          <input type='text' v-model="task.desc" >
        </div>
        <div class='ui two button attached buttons'>
          <button class='ui basic blue button' v-on:click="hideForm">
            Close X
          </button>
        </div>
      </div>
    </div>
    <div class='ui bottom attached green basic button' v-show="!isEditing &&task.completed" disabled>
        <i class="checkmark box icon"></i> Completed 
    </div>
    <div class='ui bottom attached red basic button' v-on:click="completeTask(task)" v-show="!isEditing && !task.completed">
        <i class="square outline icon"></i> Pending
    </div>
  </div>
</template>

<script type="text/javascript">
  export default {
    props: ['task'],
    data() {
      return {
        isEditing: false,
      };
    },
    methods: {
      completeTask(task) {
        this.$emit('complete-task', task);
      },
      deleteTask(task) {
        this.$emit('delete-task', task);
      },
      showForm() {
        this.isEditing = true;
      },
      hideForm() {
        this.isEditing = false;
      },
    },
  };
</script>