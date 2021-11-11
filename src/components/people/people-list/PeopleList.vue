<template>
  <ul class="people-list">
    <PeopleItem v-for="(character, index) in people" 
      :key="index" 
      :index="index" 
      :character="character"
      @select-item="selectItem" />
  </ul>
</template>

<script>
import PeopleItem from '../people-item/PeopleItem.vue';

export default {
  props: {
    people: Array,
  },

  components: {
    PeopleItem,
  },

  methods: {
    selectItem(index) {
      const selectedItem = this.people[index];
      this.$emit('select-item', selectedItem, index);
    }
  },
}
</script>

<style lang="scss">
  .people-list {
    flex-grow: 2;
    list-style: none;
    border: 1px solid #444;
    border-radius: 0.25rem;
    background-color: #444;
    padding-left: 0px;
    margin-left: 1.5rem;
    margin-top: 0;
  }

  @media only screen and (max-width: 575.98px) {
    .people-list {
      overflow: auto;
      height: 100px;
    }
  }
</style>