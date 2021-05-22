<template>
  <div class="container">
    <h1>Hello welcome to Golobcki</h1>
    <card />
    <HereMap
        ref="map"
    />
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
