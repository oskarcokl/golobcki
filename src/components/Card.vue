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
    <div>
      <p class="card-id-number">Id paketa: 351978231846540</p>
    </div>
    <div class="verification-number">
      <span>Potrdila koda: 4269</span>
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
  padding: 10px 5px;
  border: 5px solid #6f6f6f;
}

@media only screen and (max-width: 500px) {
  .card-container {
    width: 100%;
    margin: 0;
    padding: 0;
  }
}

.card-title {
  margin-top: 0;
  margin-bottom: 5px;
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

.card-id-number {
  font-size: 1.5em;
  font-weight: 500;
  margin-left: 5%;
  margin-top: 10px;
}

.verification-number {
  color: #c30909;
  font-size: 2em;
  margin-left: 5%;
}
</style>
