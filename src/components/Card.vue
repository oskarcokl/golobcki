<template>
  <div class="card-container">
    <div class="card-content-image-container">
      <div class="card-image-container">
        <img class="card-image" src="../../public/avatar.png" alt="" />
      </div>
      <div class="card-content">
        <h2 class="card-title">Vrnitev ključev</h2>
        <ul class="order-information-list">
          <li class="order-information-item">Manjši paket</li>
          <li class="order-information-item">Ljubljana, Vodnikova 6</li>
          <li class="order-information-item">
            Ljubljana, Ulica Ivane Kobilce 4
          </li>
          <li class="order-information-item">5€</li>
        </ul>
      </div>
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
  background-color: #e9e9e9;
  text-align: left;
  display: inline-block;
  width: 400px;
  padding: 10px, 5px;
  border: 5px solid #6f6f6f;
}

.order-information-list {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.card-content-image-container {
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding-top: 10px;
  padding-bottom: 10px;
}

.card-image {
  width: 100px;
  border: 5px solid #6f6f6f;
  height: auto;
}
</style>
