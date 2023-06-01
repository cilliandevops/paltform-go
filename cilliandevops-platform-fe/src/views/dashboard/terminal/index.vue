<template>
  <div id="app">
    <terminal name="cops-terminal" @exec-cmd="onExecCmd" />
  </div>
</template>

<script lang="ts">
  import Terminal from 'vue-web-terminal';

  export default {
    name: 'App',
    components: { Terminal },
    methods: {
      onExecCmd(key, command, success, failed) {
        if (key === 'fail') {
          failed('Something wrong!!!');
        } else {
          let allClass = ['success', 'error', 'system', 'info', 'warning'];

          let clazz = allClass[Math.floor(Math.random() * allClass.length)];
          success({
            type: 'normal',
            class: clazz,
            tag: '成功',
            content: command,
          });
        }
      },
    },
  };
</script>

<style>
  body,
  html,
  #app {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  }
</style>
