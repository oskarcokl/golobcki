<template>
  <div class="container">

    <div class="row">
      <div class="col-4">
        <Card/>
        <Card/>
        <Card/>
      </div>
      <div class="col-8">
Map
      </div>
    </div>

  </div>
</template>

<script>
import Card from "../components/Card";
export default {
  name: "FrontPageView",
  components: {
    Card,
  },
};
</script>
