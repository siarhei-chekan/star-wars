<template>
  <div class="planet-card" @click="clickedByCard">
    <img 
      class="planet-card-img" 
      :src="planetImgSrc" 
      alt="planet">
    <ul class="planet-card-item">
      <li class="item-name">
        {{ this.selectedItemPlanet.name }}
      </li>
      <li class="item-population">
        <span>Population:</span>{{ this.selectedItemPlanet.population }}
      </li>
      <li class="item-rotation-period">
        <span>Rotation Period:</span>{{ this.selectedItemPlanet.rotation_period }}
      </li>
      <li class="item-diameter">
        <span>Diameter:</span>{{ this.selectedItemPlanet.diameter }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    selectedItemPlanet: Object,
    itemIndex: Number,
    planetImgSrc: String,
  },

  methods: {
    clickedByCard() {
      this.$emit('clicked-by-card', this.itemIndex);
    }
  },
}
</script>

<style lang="scss">
  .item-name {
    font-size: 2rem;
  }

  .planet-card:hover {
    cursor: pointer;
  }

  .planet-card {
    display: flex;
    flex-grow: 1;
    border: 1px solid #444;
    border-radius: 3px;
    background-color: #444;
  }      

  .planet-card-item {
    list-style: none;
    padding-left: 10px;
    margin-left: 1.5rem;
  }

  .planet-card-item li {
    padding: 0.5rem 1rem;
    border-bottom: 1px solid #adb0af36;
  }

  .planet-card-item span {
    padding-right: 1.5rem;
  }

  .planet-card-img {
    width: 50%;
    border-radius: 25px;
    padding: 15px;
    height: 70%;
  }
  
  @media only screen and (max-width: 575.98px) {
    .planet-card-img {
      width: 150px;
      height: 150px;
    }

    .planet-card {
      margin-left: 1.5rem;
      align-items: center;
      flex-direction: column;
    }

    .planet-card-item li {
      text-align: center;
    }
  }
</style>