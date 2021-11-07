<template>
  <ul class="planets-list">
    <PlanetsItem v-for="(planet, index) in planets" 
      :key="index" 
      :index="index" 
      :planet="planet"
      @select-item="selectItem" />
  </ul>
</template>

<script>
import PlanetsItem from '../planets-item/PlanetsItem.vue';

export default {
  props: {
    planets: Array,
  },

  components: {
    PlanetsItem,
  },

  methods: {
    selectItem(index) {
      const selectedItemPlanet = this.planets[index];
      this.$emit('select-item', selectedItemPlanet, index);
    }
  },
}
</script>

<style lang="scss">
  .planets-list {
    flex-grow: 2;
    list-style: none;
    border: 1px solid #444;
    border-radius: 0.25rem;
    background-color: #444;
    padding-left: 0px;
    margin-left: 1.5rem;
    margin-top: 0;
  }
</style>