<template>
  <div class="narocilo">
    <div class="card-image-container">
      <img class="card-image" src="../../public/avatar.png" alt="" />
    </div>
    <div>
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
  width: 150px;
  height: auto;
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
</style>