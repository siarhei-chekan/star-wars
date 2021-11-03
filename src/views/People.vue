<template>
  <div>
    <PeopleHeader />    
    <PeoplePlanet v-if="isLoadingPlanetOver"
      :selectedItemPlanet="selectedItemPlanet" 
      :planets-id="planetsId" />
    <Spinner v-else />
    <div class="people-info">
      <PeopleList v-if="isLoadingPeopleOver"
        @select-item="selectItem" 
        :people="people" />
      <Spinner v-else />
      <PeopleCard 
        v-if="isLoadingPeopleOver"       
        :selected-item="selectedItem" 
        :item-index="itemIndex" />
      <Spinner v-else />        
    </div>
  </div>
</template>

<script>
import PeopleHeader from '../components/people/people-header/PeopleHeader.vue';
import PeopleList from '../components/people/people-list/PeopleList.vue';
import PeopleCard from '../components/people/people-info/PeopleCard.vue';
import PeoplePlanet from '../components/people/people-planet/PeoplePlanet.vue';
import Spinner from '../components/spinner/Spinner.vue';

const axios = require('axios').default;

export default {
  data() {
    return {
      people: [],
      planets: [],

      selectedItem: {},
      selectedItemPlanet: {},
      itemIndex: null,
      planetsId: '',
      
      isLoadingPeopleOver: false,

      isLoadingPlanetOver: false,
    };
  },

  created() {
    axios.get('https://swapi.dev/api/people/')
      .then(response => {
        this.people = response.data.results;
        this.selectedItem = this.people[0];

        this.isLoadingPeopleOver = true;
      })
      .catch(error => console.log(error.response.data));

    axios.get("https://swapi.dev/api/planets/")
      .then(response => {
        this.planets = response.data.results;
        this.selectedItemPlanet = this.planets[0];

        this.isLoadingPlanetOver = true;
      })
      .catch(error => console.log(error.response.data));
  },

  components: {
    PeopleHeader,
    PeopleList,
    PeopleCard,
    PeoplePlanet,
    Spinner,
  },

  methods: {
    selectItem(selectedItem, index) {
      this.selectedItem = selectedItem;
      this.itemIndex = index;
      this.selectedItemPlanet = this.planets.find(planet => planet.url === selectedItem.homeworld);

      const planetsUrl = selectedItem.homeworld;
      const lastSlashIndex = planetsUrl.lastIndexOf('/');
      const slashIndexAfterIdPlanet = planetsUrl.lastIndexOf('/', lastSlashIndex - 1);

      this.planetsId = planetsUrl.slice(slashIndexAfterIdPlanet + 1, lastSlashIndex);
    },
  },
}
</script>

<style lang="scss">
  .people-info {
    display: flex;
    justify-content: space-between;
    column-gap: 25px;
  }
</style>