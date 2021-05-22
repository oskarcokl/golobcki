<template>

  <div class="card-container mb-2" style="">
    <div class="row">

      <div class="col-lg-4 ">
        <img class="img-fluid card-image" src="../../public/avatar.png" alt="" />
      </div>
      <div class="col-lg-8">
        <h2 class="h2">Vrnitev ključev</h2>
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


    <div class="row">

      <div class="col-lg-4">
        <div v-if="buttonTxt" class="card-button-container">
          <button class="card-button">Prevezemi!</button>
        </div>
      </div>
      <div class="col-lg-4">
        <div v-if="idPaketa">
          <p class="card-id-number">Id paketa: 351978231846540</p>
        </div>
      </div>
      <div class="col-lg-4">
        <div v-if="koda" class="verification-number">
          <span>Potrdilna koda: 4269</span>
        </div>
      </div>

    </div>

  </div>

</template>

<script>
export default {
  props: ["idPaketa", "koda", "buttonTxt"],
  name: "Card",
};
</script>

<style scoped>

  .order-information-list {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }
  .order-information-list {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }
  .card-container {
    background-color: #e9e9e9;
    text-align: left;
    padding: 10px 5px;
    border: 5px solid #6f6f6f;
  }

  .card-image {
    border: 5px solid #6f6f6f;
  }


  .card-button {
    background-color: #e06d6d;
    border: 3px solid #c30909;
    color: white;
    padding: 5px 4px;
    font-size: 1.3em;
    font-weight: 500;
  }

  /*
.card-container {
  background-color: #e9e9e9;
  text-align: left;
  display: inline-block;
  width: auto;
  padding: 10px 5px;
  border: 5px solid #6f6f6f;
}

@media only screen and (max-width: 500px) {
  .card-container {
    width: auto;
    margin: 0;
    padding: 0;
  }
}

.card-button {
  background-color: #e06d6d;
  border: 3px solid #c30909;
  color: white;
  padding: 5px 4px;
  font-size: 1.3em;
  font-weight: 500;
  margin-left: 65%;
}

.card-button:hover {
  cursor: pointer;
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

   */
  .verification-number {
    color: #c30909;
    font-size: 2em;
    margin-left: 5%;
  }
  .card-id-number {
    font-size: 1.5em;
    font-weight: 500;
    margin-left: 5%;
    margin-top: 10px;
  }
</style>
