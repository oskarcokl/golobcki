<template>
  <div id="app">
    <router-link to="/">Home</router-link>
    <router-link to="/e1">Example1</router-link>
    <router-link to="/e2">Example2</router-link>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
