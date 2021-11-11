<template>
  <div class="starship-card" @click="clickedByCard">
    <img
      class="starship-card-img" 
      :src="starshipImgSrc" 
      alt="starship">
    <ul class="starship-card-item">
      <li class="item-name">
        {{ this.selectedItemStarship.name }}
      </li>
      <li class="item-model">
        <span>Model:</span>{{ this.selectedItemStarship.model }}
      </li>
      <li class="item-manufacturer">
        <span>Manufacturer:</span>{{ this.selectedItemStarship.manufacturer }}
      </li>
      <li class="item-cost-in-credits">
        <span>Cost in credits:</span>{{ this.selectedItemStarship.cost_in_credits }}
      </li>
      <li class="item-length">
        <span>Length:</span>{{ this.selectedItemStarship.length }}
      </li>
      <li class="item-max-atmosphering-speed">
        <span>Max atmosphering speed:</span>{{ this.selectedItemStarship.max_atmosphering_speed }}
      </li>
      <li class="item-crew">
        <span>Crew:</span>{{ this.selectedItemStarship.crew }}
      </li>
      <li class="item-passengers">
        <span>Passengers:</span>{{ this.selectedItemStarship.passengers }}
      </li>
      <li class="item-cargo_capacity">
        <span>Cargo capacity:</span>{{ this.selectedItemStarship.cargo_capacity }}
      </li>
      <li class="item-consumables">
        <span>Consumables:</span>{{ this.selectedItemStarship.consumables }}
      </li>
      <li class="item-hyperdrive-rating">
        <span>Hyperdrive rating:</span>{{ this.selectedItemStarship.hyperdrive_rating }}
      </li>
      <li class="item-MGLT">
        <span>MGLT:</span>{{ this.selectedItemStarship.MGLT }}
      </li>
      <li class="item-starship-class">
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
  .item-name {
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
  }

  .starship-card-img {
    width: 50%;
    border-radius: 25px;
    padding: 15px;
    height: 70%;
  }

  .starship-card-item {
    list-style: none;
    padding-left: 10px;
    margin-left: 1.5rem;
  }

  .starship-card-item li {
    padding: 0.5rem 1rem;
    border-bottom: 1px solid #adb0af36;
  }

  .starship-card-item span {
    padding-right: 1.5rem;
  }

  @media only screen and (max-width: 575.98px) {
    .starship-card {
      margin-left: 1.5rem;
      align-items: center;
      flex-direction: column;
    }
  }
</style>