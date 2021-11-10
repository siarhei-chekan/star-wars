<template>
  <div class="starship-card" @click="clickedByCard">
    <img
      class="starship-card__img" 
      :src="starshipImgSrc" 
      alt="starship">
    <ul class="starship-card__item">
      <li class="starship-card__item_item-name">
        {{ this.selectedItemStarship.name }}
      </li>
      <li class="starship-card__item_item-model">
        <span>Model:</span>{{ this.selectedItemStarship.model }}
      </li>
      <li class="starship-card__item_item-manufacturer">
        <span>Manufacturer:</span>{{ this.selectedItemStarship.manufacturer }}
      </li>
      <li class="starship-card__item_item-cost-in-credits">
        <span>Cost in credits:</span>{{ this.selectedItemStarship.cost_in_credits }}
      </li>
      <li class="starship-card__item_item-length">
        <span>Length:</span>{{ this.selectedItemStarship.length }}
      </li>
      <li class="starship-card__item_item-max-atmosphering-speed">
        <span>Max atmosphering speed:</span>{{ this.selectedItemStarship.max_atmosphering_speed }}
      </li>
      <li class="starship-card__item_item-crew">
        <span>Crew:</span>{{ this.selectedItemStarship.crew }}
      </li>
      <li class="starship-card__item_item-passengers">
        <span>Passengers:</span>{{ this.selectedItemStarship.passengers }}
      </li>
      <li class="starship-card__item_item-cargo_capacity">
        <span>Cargo capacity:</span>{{ this.selectedItemStarship.cargo_capacity }}
      </li>
      <li class="starship-card__item_item-consumables">
        <span>Consumables:</span>{{ this.selectedItemStarship.consumables }}
      </li>
      <li class="starship-card__item_item-hyperdrive-rating">
        <span>Hyperdrive rating:</span>{{ this.selectedItemStarship.hyperdrive_rating }}
      </li>
      <li class="starship-card__item_item-MGLT">
        <span>MGLT:</span>{{ this.selectedItemStarship.MGLT }}
      </li>
      <li class="starship-card__item_item-starship_class">
        <span>Starship class:</span>{{ this.selectedItemStarship.starship_class }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    selectedItemStarship: Object,
    itemIndex: Number,
    starshipImgSrc: String,
  },

  methods: {
    clickedByCard() {
      this.$emit('clicked-by-card', this.itemIndex);
    }
  },
}
</script>

<style lang="scss">
  .starship-card__item_item-name {
    font-size: 2rem;
  }

  .starship-card:hover {
    cursor: pointer;
  }

  .starship-card {
    display: flex;
    flex-grow: 1;
    border: 1px solid #444;
    border-radius: 3px;
    background-color: #444;

      .starship-card__img {
        width: 50%;
        border-radius: 25px;
        padding: 15px;
        height: 70%;
      }

      .starship-card__item {
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