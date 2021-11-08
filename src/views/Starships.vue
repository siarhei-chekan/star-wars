<template>
  <div>
    <Header 
      @push-to-people-route="pushToPeopleRoute" 
      @push-to-planets-route="pushToPlanetsRoute" 
      @push-to-starships-route="pushToStarshipsRoute" />
    <div class="planets-error-button">
      <Button  v-if="isloadingPlanetError" />
    </div>    
    <div class="starships-info">
      <PlanetsList v-if="isLoadingPlanetsOver"
        @select-item="selectItem" 
        :planets="planets" />
      <Spinner v-else />
      <PlanetInfo 
        v-if="isLoadingPlanetsOver && !isFullPlanetsInfo"       
        :selected-item-planet="selectedItemPlanet" 
        :item-index="itemIndex" 
        @clicked-by-card="clickedByCard" />
      <router-view 
        v-else-if="isFullPlanetsInfo"
        :selected-item-planet="selectedItemPlanet" 
        :item-index="itemIndex" />
      <Spinner v-else />
    </div>
  </div>
</template>

<script>
import PlanetsList from '../components/planets/planets-list/PlanetsList.vue';
import PlanetInfo from '../components/planets/planet-info/PlanetInfo.vue';
import Spinner from '../components/spinner/Spinner.vue';
import Header from '../components/header/Header.vue';
import Button from '../components/button/Button.vue';

const axios = require('axios').default;

export default {
  data() {
    return {
      planets: [],

      selectedItemPlanet: {},
      itemIndex: 0,
      planetsId: '',
      
      isLoadingPlanetsOver: false,

      isFullPlanetsInfo: false,

      isloadingPlanetError: false,
    };
  },

  created() {
    axios.get("https://swapi.dev/api/planets/")
      .then(response => {
        this.planets = response.data.results;
        this.selectedItemPlanet = this.planets[this.itemIndex];

        const planetsUrl = this.selectedItemPlanet.url;
        const lastSlashIndex = planetsUrl.lastIndexOf('/');
        const slashIndexAfterIdPlanet = planetsUrl.lastIndexOf('/', lastSlashIndex - 1);

        this.planetsId = planetsUrl.slice(slashIndexAfterIdPlanet + 1, lastSlashIndex);

        this.isLoadingPlanetsOver = true;
      })
      .catch(error => {         
        console.log('Something gone wrong!', error.response.data);
        this.isloadingPlanetError = true;
        });
  },
  
  components: {
    PlanetsList,
    PlanetInfo,
    Spinner,
    Header,
    Button,
  },

  methods: {
    selectItem(selectedItemPlanet, index) {
      this.selectedItemPlanet = selectedItemPlanet;
      this.itemIndex = index;
      // this.selectedItemPlanet = this.planets.find(planet => planet.url === selectedItem.homeworld);

      const planetsUrl = selectedItemPlanet.url;
      const lastSlashIndex = planetsUrl.lastIndexOf('/');
      const slashIndexAfterIdPlanet = planetsUrl.lastIndexOf('/', lastSlashIndex - 1);

      this.planetsId = planetsUrl.slice(slashIndexAfterIdPlanet + 1, lastSlashIndex);

      this.isFullPlanetsInfo = false;
      // this.isLoadingPeopleOver = false;
      this.$router.push('/planets');
    },

    clickedByCard(itemIndex) {
      // console.log(itemIndex);
      // this.$emit('clicked-by-card', itemIndex);
      this.isFullPlanetsInfo = true;
      this.$router.push(`/planets/${itemIndex}`);
    },

    pushToPeopleRoute() {
      this.$router.push('/people');
    },

    pushToPlanetsRoute() {
      this.$router.push('/planets');
    },

    pushToStarshipsRoute() {
      this.$router.push('/starhips');
    },
  },
}
</script>

<style lang="scss">
  .planets-info {
    display: flex;
    justify-content: space-between;
    column-gap: 25px;
  }

  .planets-error-button {
    display: flex;
    justify-content: center;
  }
</style>