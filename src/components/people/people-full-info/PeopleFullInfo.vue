<template>
  <div class="people-card" >
    <img 
      class="people-card__img" 
      :src="characterImgSrc" 
      alt="character">
    <ul class="people-card__item">
      <li class="people-card__item_item-name">
        {{ this.selectedItem.name }}
      </li>
      <li class="people-card__item_item-gender">
        <span>Gender:</span>{{ this.selectedItem.gender }}
      </li>
      <li class="people-card__item_item-birth-year">
        <span>Birth Year:</span>{{ this.selectedItem.birth_year }}
      </li>
      <li class="people-card__item_item-eye-color">
        <span>Eye Color:</span>{{ this.selectedItem.eye_color }}
      </li>
      <li class="people-card__item_item-hair-color">
        <span>Hair Color:</span>{{ this.selectedItem.hair_color }}
      </li>
      <li class="people-card__item_item-height">
        <span>Height:</span>{{ this.selectedItem.height }}
      </li>
      <li class="people-card__item_item-mass">
        <span>Mass:</span>{{ this.selectedItem.mass }}
      </li>
      <li class="people-card__item_item-skin-color">
        <span>Skin Color:</span>{{ this.selectedItem.skin_color }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    selectedItem: Object,
    itemIndex: Number,
    characterImgSrc: String,
  },
}
</script>

<style lang="scss">
  .people-card__item_item-name {
    font-size: 2rem;
  }

  .people-card:hover {
    cursor: pointer;
  }

  .people-card {
    display: flex;
    flex-grow: 1;
    border: 1px solid #444;
    border-radius: 3px;
    background-color: #444;

      .people-card__img {
        width: 30%;
        border-radius: 25px;
        padding: 15px;
        // height: 70%;
      }

      .people-card__item {
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