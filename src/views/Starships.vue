<template>
  <div>
    <Header 
      @push-to-people-route="pushToPeopleRoute" 
      @push-to-planets-route="pushToPlanetsRoute" 
      @push-to-starships-route="pushToStarshipsRoute" />
    <!-- <div class="planets-error-button">
      <Button  v-if="isloadingPlanetError" />
    </div>     -->
    <div class="starships-info">
      <StarshipsList v-if="isLoadingStarshipsOver"
        @select-item="selectItem" 
        :starships="starships" />
      <Spinner v-else />
      <StarshipsInfo 
        v-if="isLoadingStarshipsOver && !isFullStarshipInfo"       
        :selected-item-starship="selectedItemStarship" 
        :item-index="itemIndex" 
        @clicked-by-card="clickedByCard" />
      <router-view 
        v-else-if="isFullStarshipInfo"
        :selected-item-starship="selectedItemStarship" 
        :item-index="itemIndex" />
      <Spinner v-else />
    </div>
  </div>
</template>

<script>
import StarshipsList from '../components/starships/starships-list/StarshipsList.vue';
import StarshipsInfo from '../components/starships/starship-info/StarshipInfo.vue';
import Spinner from '../components/spinner/Spinner.vue';
import Header from '../components/header/Header.vue';
// import Button from '../components/button/Button.vue';

const axios = require('axios').default;

export default {
  data() {
    return {
      starships: [],

      selectedItemStarship: {},
      itemIndex: 0,
      // planetsId: '',
      
      isLoadingStarshipsOver: false,

      isFullStarshipInfo: false,

      // isloadingPlanetError: false,
    };
  },

  created() {
    axios.get("https://swapi.dev/api/starships/")
      .then(response => {
        this.starships = response.data.results;
        console.log(this.starships);
        this.selectedItemStarship = this.starships[this.itemIndex];

        // const planetsUrl = this.selectedItemPlanet.url;
        // const lastSlashIndex = planetsUrl.lastIndexOf('/');
        // const slashIndexAfterIdPlanet = planetsUrl.lastIndexOf('/', lastSlashIndex - 1);

        // this.planetsId = planetsUrl.slice(slashIndexAfterIdPlanet + 1, lastSlashIndex);

        this.isLoadingStarshipsOver = true;
      })
      .catch(error => {         
        console.log('Something gone wrong!', error.response.data);
        this.isloadingPlanetError = true;
        });
  },
  
  components: {
    StarshipsList,
    StarshipsInfo,
    Spinner,
    Header,
    // Button,
  },

  methods: {
    selectItem(selectedItemStarship, index) {
      this.selectedItemStarship = selectedItemStarship;
      this.itemIndex = index;
      // this.selectedItemPlanet = this.planets.find(planet => planet.url === selectedItem.homeworld);

      const starshipUrl = selectedItemStarship.url;
      const lastSlashIndex = starshipUrl.lastIndexOf('/');
      const slashIndexAfterIdStarship = starshipUrl.lastIndexOf('/', lastSlashIndex - 1);

      this.starshipsId = starshipUrl.slice(slashIndexAfterIdStarship + 1, lastSlashIndex);

      this.isFullStarshipInfo = false;
      // this.isLoadingPeopleOver = false;
      this.$router.push('/starships');
    },

    clickedByCard(itemIndex) {
      // console.log(itemIndex);
      // this.$emit('clicked-by-card', itemIndex);
      this.isFullStarshipInfo = true;
      this.$router.push(`/starships/${itemIndex}`);
    },

    pushToPeopleRoute() {
      this.$router.push('/people');
    },

    pushToPlanetsRoute() {
      this.$router.push('/planets');
    },

    pushToStarshipsRoute() {
      this.$router.push('/starships');
    },
  },
}
</script>

<style lang="scss">
  .starships-info {
    display: flex;
    justify-content: space-between;
    column-gap: 25px;
  }

  .planets-error-button {
    display: flex;
    justify-content: center;
  }
</style>