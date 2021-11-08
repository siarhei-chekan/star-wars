<template>
  <ul class="starships-list">
    <StarshipsItem v-for="(starship, index) in starships" 
      :key="index" 
      :index="index" 
      :starship="starship"
      @select-item="selectItem" />
  </ul>
</template>

<script>
import StarshipsItem from '../starships-item/StarshipsItem.vue';

export default {
  props: {
    starships: Array,
  },

  components: {
    StarshipsItem,
  },

  methods: {
    selectItem(index) {
      const selectedItemStarship = this.starships[index];
      this.$emit('select-item', selectedItemStarship, index);
    }
  },
}
</script>

<style lang="scss">
  .starships-list {
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