<template>
  <div class="container">
    <h1>Oddaj narocilo</h1>
    <narocilo/>
  </div>
</template>

<script>
import Narocilo from "../components/Narocilo";
export default {
  name: "NarociloPage",
  components: {
    Narocilo,
  },
};
</script>
