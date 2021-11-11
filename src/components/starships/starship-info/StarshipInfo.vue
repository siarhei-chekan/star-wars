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
    .starships-info {
      flex-direction: column;
    }
  }
</style>