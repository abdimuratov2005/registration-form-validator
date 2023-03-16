<template>
  <div class="app">
    <the-body>
      <TheSideBar></TheSideBar>
        <RegisterUser></RegisterUser>
      <the-indecator></the-indecator>
    </the-body>
  </div>
</template>

<script setup>
import RegisterUser from './components/RegisterUser.vue';
import TheBody from './components/TheBody.vue';
import TheIndecator from './components/TheIndecator.vue';
import TheSideBar from './components/TheSideBar.vue';

</script>

<style lang="scss">

.app {
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  color: #000;
  user-select: none;
}
</style>