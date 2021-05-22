<template>
  <div class="narocilo row">
    <div class="card-image-container col-sm-6 ">
      <div class="ree">
      <img class="card-image float-lg-right img-fluid" src="../../public/avatar.png" alt="" />
      </div>
    </div>
    <div class="data col-sm-6">
      <div class="float-lg-left text-sm-left">
        <p class="name">Ime paketa</p>
        <input v-model="message" placeholder="Knijga">
        <p class="velikost">Velikost paketa</p>
        <select v-model="selected">
          <option disabled value="">Izberite velikost</option>
          <option>Majhen</option>
          <option>Velik ( ͡° ͜ʖ ͡°)</option>
        </select>
        <p class="prevzem">Lokacija prevzema</p>
        <input v-model="message" placeholder="Ljubljana, Svetčeva 9">
        <p class="oddaja">Lokacija oddaje</p>
        <input v-model="message" placeholder="Ljubljana, Tržaška 7">
        <p class="cena">Plačilo</p>
        <input type="number" v-model="message" placeholder="5€">
        <br>
        <br>
        <button class="gumb">Oddaj dostavo</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Narocilo"
}
</script>

<style scoped>
.narocilo{
  color: #6f6f6f;
}
.card-image {
  border-style: solid;
  border-width: 5px;
  border-color: #6f6f6f;
}

.gumb{
  color: #ffffff;
  background-color: #e06D6D;
  font-size: 30px;
  border-style: solid;
  border-width: 5px;
  border-color: #c30909;
}
.ree{
  max-width: 300px;
}
input, select{
  background-color: #c4c4c4;
  border: 0 solid;
  color: #6f6f6f;
}
</style>