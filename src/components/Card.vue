<template>
  <div class="card-container">
    <div class="card-image-container">
      <img class="card-image" src="../../public/avatar.png" alt="" />
    </div>
    <div class="card-content">
      <h2 class="card-title">Vrnitev ključev</h2>
      <ul class="order-information-list">
        <li class="order-information-item">Manjši paket</li>
        <li class="order-information-item">Ljubljana, Vodnikova 6</li>
        <li class="order-information-item">Ljubljana, Ulica Ivane Kobilce 4</li>
        <li class="order-information-item">5€</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
};
</script>

<style scoped>
.card-container {
  background-color: #e3e3e3;
  text-align: left;
  display: inline-block;
  width: 40%;
  padding: 10px, 5px;
}

.card-image {
  width: 150px;
  height: auto;
}
</style>
