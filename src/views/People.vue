<template>
  <div>
    <PeopleHeader />
    <PeoplePlanet />
    <div class="people-info">
      <PeopleList @select-item="selectItem" />
      <PeopleCard :selected-item="selectedItem" 
        :item-index="itemIndex" />
    </div>
  </div>


</template>

<script>
import PeopleHeader from '../components/people/people-header/PeopleHeader.vue';
import PeopleList from '../components/people/people-list/PeopleList.vue';
import PeopleCard from '../components/people/people-info/PeopleCard.vue';
import PeoplePlanet from '../components/people/people-planet/PeoplePlanet.vue';

export default {
  data() {
    return {
      selectedItem: {},
      itemIndex: null,
    };
  },

  components: {
    PeopleHeader,
    PeopleList,
    PeopleCard,
    PeoplePlanet,
  },

  methods: {
    selectItem(selectedItem, index) {
      console.log('People, Selected item', index, selectedItem);
      this.selectedItem = selectedItem;
      this.itemIndex = index;
    },
  },
}
</script>

<style lang="scss" scoped>
  .people-info {
    display: flex;
    justify-content: space-between;
    column-gap: 25px;
  }

</style>