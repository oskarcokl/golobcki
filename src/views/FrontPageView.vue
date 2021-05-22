<template>
  <div class="container">
    <h1>Hello welcome to Golobcki</h1>
    <card />
    <HereMap
        ref="map"
        lat="46.063747"
        lng="14.493638"
        latDo="46.043085"
        lngDo="14.462140"

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
  }


};
</script>
