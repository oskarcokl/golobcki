<template>
  <div class="container">

    <div class="row">
      <div class="col-lg-5 ">
        <Card button-txt="cringe" />
      </div>
      <div class="col-lg-7">
        <HereMap
                ref="map"
        />
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
