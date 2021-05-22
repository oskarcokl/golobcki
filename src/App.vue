<template>
  <div id="app" class="container">
    <NavBar/>
    <FrontPageView />
  </div>
</template>

<script>
import FrontPageView from "./views/FrontPageView.vue";
import NavBar from "./components/NavBar";

export default {
  name: "App",
  components: {
    NavBar,
    FrontPageView,
  },
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
