<template>
  <div class="container">
    <h1>Oddaj narocilo</h1>
    <narocilo v-on:clicked="handleClick" />
  </div>
</template>

<script>
import Narocilo from "../components/Narocilo";
export default {
  name: "NarociloPage",
  components: {
    Narocilo,
  },
  methods: {
    handleClick() {
      this.$router.push("/");
    },
  },
};
</script>
