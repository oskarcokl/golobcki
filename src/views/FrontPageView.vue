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
import HereMap from '../components/HereMap';

export default {
  name: "FrontPageView",
  components: {
    Card,
    HereMap,
  },
  mounted() {
    let map = this.$refs.map;
    map.dropMarker("Los Banos, CA" );
  },


};
</script>
