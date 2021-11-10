<template>
  <div class="people-planet">
    <img class="people-planet__img"
      :src="planetImgSrc"
      alt="planet">
    <ul class="people-planet__item">
      <li class="people-planet__item_item-name">
        {{ this.selectedItemPlanet.name }}
      </li>
      <li class="people-planet__item_item-population">
        <span>Population:</span> {{ this.selectedItemPlanet.population }}
      </li>
      <li class="people-planet__item_item-rotation-period">
        <span>Rotation Period:</span> {{ this.selectedItemPlanet.rotation_period }}
      </li>
      <li class="people-planet__item_item-rotation-diameter">
        <span>Diameter:</span> {{ this.selectedItemPlanet.diameter }}
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  props: {
    selectedItemPlanet: Object,
    planetImgSrc: String,
  },
}
</script>

<style lang="scss">
  .people-planet__item_item-name {
    font-size: 2rem;
  }

  .people-planet {
    display: flex;
    align-items: center;
    flex-grow: 1;
    border: 1px solid #444;
    border-radius: 3px;
    background-color: #444;
    margin-bottom: 30px;
    margin-left: 1.5rem;

      .people-planet__img {
        width: 150px;
        height: 150px;
        border-radius: 25px;
        padding: 15px;
      }

      .people-planet__item {
        list-style: none;
        padding: 0;
      }
        li {
          padding: 0.5rem 1rem;
          border-bottom: 1px solid #adb0af36;
        }

          span {
            padding-right: 1.5rem;
          }
  }
</style>