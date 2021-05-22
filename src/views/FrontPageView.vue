<template>
  <div class="container">

    <div class="row">
      <div class="col-lg-5 ">
        <Card button-txt="cringe" />
      </div>
      <div class="col-lg-7">
        <HereMap
                ref="map"
                lat="46.063747"
                lng="14.493638"
                latDo="46.043085"
                lngDo="14.462140"

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
  }


};
</script>
