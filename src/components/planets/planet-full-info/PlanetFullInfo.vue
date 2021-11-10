<template>
  <div class="planet-card" >
    <img 
      class="planet-card__img" 
      :src="planetImgSrc" 
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
      <li class="planet-card__item_item-climate">
        <span>Climate:</span>{{ this.selectedItemPlanet.climate }}
      </li>
      <li class="planet-card__item_item-gravity">
        <span>Gravity:</span>{{ this.selectedItemPlanet.gravity }}
      </li>
      <li class="planet-card__item_item-orbital-period">
        <span>Orbital Period:</span>{{ this.selectedItemPlanet.orbital_period }}
      </li>
      <li class="planet-card__item_item-surface-water">
        <span>Surface Water:</span>{{ this.selectedItemPlanet.surface_water }}
      </li>
      <li class="planet-card__item_item-terrain">
        <span>Terrain:</span>{{ this.selectedItemPlanet.terrain }}
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
        height: 70%;
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