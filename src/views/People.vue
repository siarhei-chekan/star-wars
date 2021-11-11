<template>
  <div>
    <Header 
      @push-to-people-route="pushToPeopleRoute" 
      @push-to-planets-route="pushToPlanetsRoute" 
      @push-to-starships-route="pushToStarshipsRoute" />
    <div class="people-planet-container">
      <Button v-if="isloadingPlanetError" />
      <PeoplePlanet v-if="isLoadingPlanetOver"
        :selectedItemPlanet="selectedItemPlanet" 
        :planet-img-src="planetImgSrc" />
      <Spinner v-else />
    </div>
    <div class="people-info">
      <PeopleList v-if="isLoadingPeopleOver"
        @select-item="selectItem" 
        :people="people" />
      <Spinner v-else />
      <PeopleCard 
        v-if="isLoadingPeopleOver && !isFullCharactersInfo"       
        :selected-item="selectedItem" 
        :item-index="itemIndex"
        :character-img-src="characterImgSrc"
        @clicked-by-card="clickedByCard" />
      <router-view 
        v-else-if="isFullCharactersInfo"
        :selected-item="selectedItem" 
        :item-index="itemIndex" 
        :character-img-src="characterImgSrc" />
      <Spinner v-else />
    </div>
  </div>
</template>

<script>
import Header from '../components/header/Header.vue';
import PeopleList from '../components/people/people-list/PeopleList.vue';
import PeopleCard from '../components/people/people-info/PeopleCard.vue';
import PeoplePlanet from '../components/people/people-planet/PeoplePlanet.vue';
import Spinner from '../components/spinner/Spinner.vue';
import Button from '../components/button/Button.vue';

const axios = require('axios').default;

export default {
  data() {
    return {
      people: [],
      planets: [],

      selectedItem: {},
      selectedItemPlanet: {},
      itemIndex: 0,

      characterImgSrc: '',
      planetImgSrc: '',
      
      isLoadingPeopleOver: false,

      isLoadingPlanetOver: false,

      isFullCharactersInfo: false,

      isloadingPlanetError: false,
    };
  },

  created() {
    axios.get('https://swapi.dev/api/people/')
      .then(response => {
        this.people = response.data.results;
        this.selectedItem = this.people[this.itemIndex];
        const peopleImgUrl = `https://starwars-visualguide.com/assets/img/characters/`;

        const peopleUrl = this.selectedItem.url;
        const lastSlashIndex = peopleUrl.lastIndexOf('/');
        const slashIndexAfterIdPeople = peopleUrl.lastIndexOf('/', lastSlashIndex - 1);
        const peopleId = peopleUrl.slice(slashIndexAfterIdPeople + 1, lastSlashIndex);
        const characterImgUrl = `${peopleImgUrl}${peopleId}.jpg`;

        axios.get(characterImgUrl)
          .then(response => {
            this.characterImgSrc = characterImgUrl;
          })
          .catch(error => {
            console.log('This is not the picture you are looking for!', error);
            this.characterImgSrc = 'https://starwars-visualguide.com/assets/img/placeholder.jpg';
          });

        this.isLoadingPeopleOver = true;
      })
      .catch(error => console.log(error.response.data));

    axios.get("https://swapi.dev/api/planets/")
      .then(response => {
        this.planets = response.data.results;
        this.selectedItemPlanet = this.planets[this.itemIndex];
        const planetsImgUrl = `https://starwars-visualguide.com/assets/img/planets/`;

        const planetsUrl = this.selectedItemPlanet.url;
        const lastSlashIndex = planetsUrl.lastIndexOf('/');
        const slashIndexAfterIdPlanet = planetsUrl.lastIndexOf('/', lastSlashIndex - 1);

        const planetsId = planetsUrl.slice(slashIndexAfterIdPlanet + 1, lastSlashIndex);
        const planetImgUrl = `${planetsImgUrl}${planetsId}.jpg`;

        axios.get(planetImgUrl)
          .then(response => {
            this.planetImgSrc = planetImgUrl;
          })
          .catch(error => {
            console.log('This is not the picture you are looking for!', error);
            this.planetImgSrc = 'https://starwars-visualguide.com/assets/img/placeholder.jpg';
          });

        this.isLoadingPlanetOver = true;
      })
      .catch(error => {
        console.log('Something gone wrong!', error.response.data);
        this.isloadingPlanetError = true;
      });
  },
  
  components: {
    Header,
    PeopleList,
    PeopleCard,
    PeoplePlanet,
    Spinner,
    Button,
  },

  methods: {
    selectItem(selectedItem, index) {
      this.selectedItem = selectedItem;
      this.itemIndex = index;
      const peopleUrl = this.selectedItem.url;
      const planetsUrl = selectedItem.homeworld; 
      this.isLoadingPlanetOver = false;
      this.isLoadingPeopleOver = false;

      axios.get(peopleUrl)
        .then(response => {
          this.selectedItem = response.data;
          const peopleImgUrl = `https://starwars-visualguide.com/assets/img/characters/`;

          const peopleUrl = this.selectedItem.url;
          const lastSlashIndex = peopleUrl.lastIndexOf('/');
          const slashIndexAfterIdPeople = peopleUrl.lastIndexOf('/', lastSlashIndex - 1);
          const peopleId = peopleUrl.slice(slashIndexAfterIdPeople + 1, lastSlashIndex);
          const characterImgUrl = `${peopleImgUrl}${peopleId}.jpg`;

          axios.get(characterImgUrl)
            .then(response => {
              this.characterImgSrc = characterImgUrl;
            })
            .catch(error => {
              console.log('This is not the picture you are looking for!', error);
              this.characterImgSrc = 'https://starwars-visualguide.com/assets/img/placeholder.jpg';
            });

          this.isLoadingPeopleOver = true;
        })
        .catch(error => console.log(error.response.data));      

      axios.get(planetsUrl)
          .then(response => {            
            this.selectedItemPlanet = response.data;
            const planetsImgUrl = `https://starwars-visualguide.com/assets/img/planets/`;

            const planetsUrl = this.selectedItemPlanet.url;
            const lastSlashIndex = planetsUrl.lastIndexOf('/');
            const slashIndexAfterIdPlanet = planetsUrl.lastIndexOf('/', lastSlashIndex - 1);

            const planetsId = planetsUrl.slice(slashIndexAfterIdPlanet + 1, lastSlashIndex);
            const planetImgUrl = `${planetsImgUrl}${planetsId}.jpg`;

            axios.get(planetImgUrl)
              .then(response => {
              this.planetImgSrc = planetImgUrl;
              })
              .catch(error => {
                console.log('This is not the picture you are looking for!', error);
                this.planetImgSrc = 'https://starwars-visualguide.com/assets/img/placeholder.jpg';
            });

            this.isLoadingPlanetOver = true;
          })
          .catch(error => {
            console.log('Something gone wrong!', error.response.data);
            this.isloadingPlanetError = true;
          });

      this.isFullCharactersInfo = false;

      this.$router.push('/people');
    },

    clickedByCard(itemIndex) {
      this.isFullCharactersInfo = true;
      this.$router.push(`/people/${itemIndex}`);
    },

    pushToPeopleRoute() {
      this.isFullCharactersInfo = false;
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
  .people-info {
    display: flex;
    justify-content: space-between;
    column-gap: 25px;
  }

  .people-planet-container {
    display: flex;
    align-items: center;
  }

  @media only screen and (max-width: 575.98px) {
    .people-info {
      flex-direction: column;
    }
  } 
</style>