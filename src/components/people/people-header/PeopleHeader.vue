<template>
  <ul >
    <h2 >Star DB</h2>
    <li @click="pushToPeopleRoute" >People</li>
    <li @click="pushToPlanetsRoute">Planets</li>
    <li @click="pushToStarshipsRoute">Starships</li>
  </ul>
</template>

<script>
export default {
  methods: {
    pushToPeopleRout() {
      this.$emit('push-to-people-route');
    },

    pushToPlanetsRoute() {
      this.$emit('push-to-planets-route');
    },

    pushToStarshipsRoute() {
      this.$emit('push-to-starships-route');
    },
  },
}
</script>

<style lang="scss" scoped>
  ul {
    display: flex;
    list-style: none;
    justify-content: flex-start;
    align-items: center;
    padding-left: 15px;

      li {
        padding: 15px;
        color: #00bc8c;
      }
      h2, li:hover {
        cursor: pointer;
      }
      h2 {
        margin: 0;
        padding: 15px;
      }
  }
</style>