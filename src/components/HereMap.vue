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
    center: Object,
    lat: String,
    lng: String,
    latDo: String,
    lngDo: String,
    // center object { lat: 40.730610, lng: -73.935242 }
  },
  data() {
    return {
      platform: null,
      //apikey: "RI37PN-FCrvKglbg1-ovuMSC94R_cw8VLJUnv2VErgM",
      apikey: "_dztcB_rxZutvT1ZVeMHRvFcCci54cNZeYvrE2QamZ4",
      // You can get the API KEY from developer.here.com
      map: {},
    };
  },
  created() {
    // Initialize the platform object:
    this.platform = new window.H.service.Platform({
      apikey: this.apikey,
    });
  },
  async mounted() {
    this.initializeHereMap();

    const H = window.H;
    var pigio = new H.map.Icon("../../vektor.png"),
      odhod = new H.map.Marker({ lat: this.lat, lng: this.lng });
    var prihod = new H.map.Marker(
      { lat: this.latDo, lng: this.lngDo },
      { icon: pigio }
    );
    this.map.addObject(odhod);
    this.map.addObject(prihod);
  },
  methods: {
    initializeHereMap() {
      // rendering map

      const mapContainer = this.$refs.hereMap;
      const H = window.H;
      // Obtain the default map types from the platform object
      var maptypes = this.platform.createDefaultLayers();

      // Instantiate (and display) a map object:
      this.map = new H.Map(mapContainer, maptypes.vector.normal.map, {
        zoom: 13,
        //center: this.center,
        center: { lat: this.lat, lng: this.lng },
      });

      addEventListener("resize", () => this.map.getViewPort().resize());

      // add behavior control
      new H.mapevents.Behavior(new H.mapevents.MapEvents(this.map));

      // add UI
      H.ui.UI.createDefault(this.map, maptypes);
      // End rendering the initial map
    },

    dropMarker(query) {
      this.geocodingService.geocode(
        { searchText: query },
        (data) => {
          if (data.Response.View.length > 0) {
            if (data.Response.View[0].Result.length > 0) {
              let position =
                data.Response.View[0].Result[0].Location.DisplayPosition;
              console.log(position);
              const H = window.H;
              let marker = new H.map.Marker({
                lat: this.lat,
                lng: this.lng,
              });
              this.map.addObject(marker);
            }
          }
        },
        (error) => {
          console.log(error);
        }
      );
      /*
      const H = window.H;
      let marker = new H.map.Marker({
        lat: position.Latitude,
        lng: position.Longitude });
      this.map.addObject(marker);
      */
    },
  },
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
