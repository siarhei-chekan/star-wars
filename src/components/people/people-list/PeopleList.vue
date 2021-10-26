<template>
  <ul>
    <PeopleItem v-for="person in people" :key="person.index" :person="person" />
  </ul>
</template>

<script>
import PeopleItem from '../people-item/PeopleItem.vue';

const axios = require('axios').default;

export default {
  data() {
    return {
      people: [],
    };
  },

  created() {
    axios.get('https://swapi.dev/api/people/')
      .then(response => {
        this.people = response.data.results;
        console.log(response.data.results);
      })
      .catch(error => console.log(error.response.data));
  },

  components: {
    PeopleItem,
  },
}
</script>

<style lang="scss" scoped>
  ul {
    flex-grow: 2;
    list-style: none;
    border: 1px solid #444;
    border-radius: 3px;
    background-color: #444;
    padding-left: 10px;
    margin-left: 1.5rem;
    margin-top: 0;
  }

</style>