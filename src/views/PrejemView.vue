<template>
  <div class="prejem-container">
    <div class="prejem-img-info">
      <div class="prejem-img">
        <img src="../../public/avatar.png" alt="" />
      </div>
      <div class="prejem-info">
        <ul class="prejem-info-list">
          <li class="prejem-info-list-item">Spraj za zombije</li>
          <li class="prejem-info-list-item">Majhen paket</li>
          <li class="prejem-info-list-item">Ulica ivane kobilce 4</li>
          <li class="prejem-info-list-item">Vodnikova 6</li>
          <li class="prejem-info-list-item">5€</li>
        </ul>
      </div>
    </div>
    <div class="potrdilo-enter-container">
      <p>Potrdilna številka:</p>
      <input type="number" />
      <button v-on:click="handleClick">Potrdi prejem paketa</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    handleClick() {
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
.prejem-info-list {
  list-style-type: none;
  padding: 0;
  padding-left: 30px;
  margin: 0;
  text-align: left;
}

.prejem-info-list > :not(:first-child) {
  padding-top: 10px;
}

.potrdilo-enter-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.potrdilo-enter-container > p {
  padding-top: 5%;
  font-size: 1.5em;
  font-weight: 500;
}

.potrdilo-enter-container > input {
  background-color: #c4c4c4;
  border: solid 0px;
  width: 200px;
  height: 50px;
  color: white;
  text-align: center;
  font-size: 2em;
  font-weight: 500;
}

.potrdilo-enter-container > input:focus {
  outline: none;
}

.potrdilo-enter-container > button {
  background-color: #e06d6d;
  border: solid 3px #c30909;
  margin-top: 3%;
  font-size: 1.5em;
  color: white;
  width: auto;
  padding: 6px 5px;
}

.prejem-img-info {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

.prejem-img img {
  width: 250px;
  height: auto;
  border: 4px solid #6f6f6f;
}
</style>
