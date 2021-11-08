<template>
  <div class="starship-card" @click="clickedByCard">
    <img 
      class="starship-card__img" 
      :src="planetsImgUrl + Number(this.itemIndex + 1) +'.jpg'" 
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
    selectedItemStarship: Object,
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
        // height: 70%;
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