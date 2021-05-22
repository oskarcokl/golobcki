
<template>
  <div id="map">
    <!--In the following div the HERE Map will render-->
    <div id="mapContainer" style="height:600px;width:100%" ref="hereMap"></div>
  </div>
</template>

<script>
export default {
  name: "HereMap",
  props: {
    center: Object
    // center object { lat: 40.730610, lng: -73.935242 }
  },
  data() {
    return {
      platform: null,
      apikey: "RI37PN-FCrvKglbg1-ovuMSC94R_cw8VLJUnv2VErgM",
      // You can get the API KEY from developer.here.com
      map: {},
      geocodingService: {}
    };
  },
  created() {
    // Initialize the platform object:
    const platform = new window.H.service.Platform({
      apikey: this.apikey
    });
    this.platform = platform;
    this.geocodingService = this.platform.getGeocodingService();
  },
  async mounted() {
    this.initializeHereMap();
  },
  methods: {
    initializeHereMap() { // rendering map

      const mapContainer = this.$refs.hereMap;
      const H = window.H;
      // Obtain the default map types from the platform object
      var maptypes = this.platform.createDefaultLayers();

      // Instantiate (and display) a map object:
      this.map = new H.Map(mapContainer, maptypes.vector.normal.map, {
        zoom: 10,
        //center: this.center,
        center: { lat: 46.051186, lng: 14.507702 }
      });

      addEventListener("resize", () => this.map.getViewPort().resize());

      // add behavior control
      new H.mapevents.Behavior(new H.mapevents.MapEvents(this.map));

      // add UI
      H.ui.UI.createDefault(this.map, maptypes);
      // End rendering the initial map
    },

    dropMarker(query){
      this.geocodingService.geocode({searchText: query }, data => {
        console.log(data);
      }, error => {
        console.log(error);
      });
      /*const H = window.H;
      let marker = new H.map.Marker({
            lat: position.Latitude,
            lng: position.Longitude });
      this.map.addObject(marker);*/
    }
  }
};
</script>

<style scoped>
#map {
  width: 60vw;
  min-width: 360px;
  text-align: center;
  margin: 5% auto;
  background-color: #ccc;
}
</style>