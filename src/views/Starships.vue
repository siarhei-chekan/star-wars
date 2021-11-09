<template>
  <div>
    <Header 
      @push-to-people-route="pushToPeopleRoute" 
      @push-to-planets-route="pushToPlanetsRoute" 
      @push-to-starships-route="pushToStarshipsRoute" />
    <div class="starships-info">
      <StarshipsList v-if="isLoadingStarshipsOver"
        @select-item="selectItem" 
        :starships="starships" />
      <Spinner v-else />
      <StarshipsInfo 
        v-if="isLoadingStarshipsOver && !isFullStarshipInfo"       
        :selected-item-starship="selectedItemStarship" 
        :item-index="itemIndex" 
        :starship-img-src="starshipImgSrc"
        @clicked-by-card="clickedByCard" />
      <router-view 
        v-else-if="isFullStarshipInfo"
        :selected-item-starship="selectedItemStarship" 
        :item-index="itemIndex" 
        :starship-img-src="starshipImgSrc" />
      <Spinner v-else />
    </div>
  </div>
</template>

<script>
import StarshipsList from '../components/starships/starships-list/StarshipsList.vue';
import StarshipsInfo from '../components/starships/starship-info/StarshipInfo.vue';
import Spinner from '../components/spinner/Spinner.vue';
import Header from '../components/header/Header.vue';

const axios = require('axios').default;

export default {
  data() {
    return {
      starships: [],

      selectedItemStarship: {},
      itemIndex: 0,
      starshipImgSrc: '',
      
      isLoadingStarshipsOver: false,

      isFullStarshipInfo: false,
    };
  },

  created() {
    axios.get("https://swapi.dev/api/starships/")
      .then(response => {
        this.starships = response.data.results;
        this.selectedItemStarship = this.starships[this.itemIndex];
        const starshipsImgUrl = `https://starwars-visualguide.com/assets/img/starships/`;

        const starshipsUrl = this.selectedItemStarship.url;
        const lastSlashIndex = starshipsUrl.lastIndexOf('/');
        const slashIndexAfterIdStarships = starshipsUrl.lastIndexOf('/', lastSlashIndex - 1);

        const starshipsId = starshipsUrl.slice(slashIndexAfterIdStarships + 1, lastSlashIndex);
        const starshipImgUrl = `${starshipsImgUrl}${starshipsId}.jpg`;

        axios.get(starshipImgUrl)
          .then(response => {
            this.starshipImgSrc = starshipImgUrl;
          })
          .catch(error => {
            console.log('This is not the picture you are looking for!', error);
            this.starshipImgSrc = 'https://starwars-visualguide.com/assets/img/placeholder.jpg';
          });

        this.isLoadingStarshipsOver = true;
      })
      .catch(error => {         
        console.log('Something gone wrong!', error.response.data);
        });
  },

  components: {
    StarshipsList,
    StarshipsInfo,
    Spinner,
    Header,
  },

  methods: {
    selectItem(selectedItemStarship, index) {
      this.selectedItemStarship = selectedItemStarship;
      this.itemIndex = index;

      const starshipsImgUrl = `https://starwars-visualguide.com/assets/img/starships/`;
      const starshipsUrl = selectedItemStarship.url;
      const lastSlashIndex = starshipsUrl.lastIndexOf('/');
      const slashIndexAfterIdStarships = starshipsUrl.lastIndexOf('/', lastSlashIndex - 1);

      const starshipsId = starshipsUrl.slice(slashIndexAfterIdStarships + 1, lastSlashIndex);
      const starshipImgUrl = `${starshipsImgUrl}${starshipsId}.jpg`;

      axios.get(starshipImgUrl)
        .then(response => {
          this.starshipImgSrc = starshipImgUrl;
        })
        .catch(error => {
          console.log('This is not the picture you are looking for!', error);
          this.starshipImgSrc = 'https://starwars-visualguide.com/assets/img/placeholder.jpg';
        });

      this.isFullStarshipInfo = false;

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