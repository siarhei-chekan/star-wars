<template>
  <div class="planet-card" @click="clickedByCard">
    <img 
      class="planet-card__img" 
      :src="planetsImgUrl + Number(this.itemIndex + 1) +'.jpg'" 
      alt="planet">
    <ul class="planet-card__item">
      <li class="planet-card__item_item-name">
        {{ this.selectedItemPlanet.name }}
      </li>
      <li class="planet-card__item_item-population">
        <span>Population:</span>{{ this.selectedItemPlanet.population }}
      </li>
      <li class="planet-card__item_item-rotation-period">
        <span>Rotation Period:</span>{{ this.selectedItemPlanet.rotation_period }}
      </li>
      <li class="planet-card__item_item-diameter">
        <span>Diameter:</span>{{ this.selectedItemPlanet.diameter }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      planetsImgUrl: `https://starwars-visualguide.com/assets/img/planets/`,
    };
  },

  props: {
    selectedItemPlanet: Object,
    itemIndex: Number,
  },

  methods: {
    clickedByCard() {
      this.$emit('clicked-by-card', this.itemIndex);
    }
  },
}
</script>

<style lang="scss">
  .planet-card__item_item-name {
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

      .planet-card__img {
        width: 50%;
        border-radius: 25px;
        padding: 15px;
        // height: 70%;
      }

      .planet-card__item {
        list-style: none;
        padding-left: 10px;
        margin-left: 1.5rem;

          li {
            padding: 0.5rem 1rem;
            border-bottom: 1px solid #adb0af36;
          }

            span {
              padding-right: 1.5rem;
            }
    }
  }
</style>