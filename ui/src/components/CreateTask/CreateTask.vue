<template>
  <div class='ui basic content center aligned segment'>
    <button class='ui basic button blue icon' v-on:click="openForm" v-show="!isCreating">
      <i class='plus icon'></i>
    </button>
    <div class='ui centered card' v-show="isCreating">
      <div class='content'>
        <div class='ui form'>
          <div class='field'>
            <label>Title</label>
            <input v-model="titleText" type='text'>
          </div>
          <div class='field'>
            <label>Description</label>
            <input v-model="descText" type='text'>
          </div>
          <div class='ui two button attached buttons'>
            <button class='ui basic blue button' v-on:click="sendForm()">
              Create
            </button>
            <button class='ui basic red button' v-on:click="closeForm">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      titleText: '',
      descText: '',
      isCreating: false,
    };
  },
  methods: {
    // Attribute isCreating is to check whether the task is in edit mode or not
    openForm() {
      this.isCreating = true;
    },
    closeForm() {
      this.isCreating = false;
    },
    // Update task list with new data
    sendForm() {
      if (this.titleText.length > 0 && this.descText.length > 0) {
        const title = this.titleText;
        const desc = this.descText;
        this.$emit('create-task', {
          title,
          desc,
          completed: false,
        });
        this.titleText = '';
        this.descText = '';
        this.isCreating = false;
      }
    },
  },
};
</script>