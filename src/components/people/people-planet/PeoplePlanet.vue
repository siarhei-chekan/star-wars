<template>
  <div class="people-planet">
    <img src="https://starwars-visualguide.com/assets/img/placeholder.jpg"  alt="planet">
    <ul>
      <li>Population: 200,000</li>
      <li>Rotation Period: 23 days</li>
      <li>Diameter: 10,465km</li>
    </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  .people-planet {
    display: flex;
    border: 1px solid #444;
    border-radius: 3px;
    background-color: #444;
    margin-bottom: 30px;
    margin-left: 1.5rem;

      img {
        width: 150px;
        height: 150px;
        border-radius: 25px;
        padding: 15px;
      }

      ul {
        list-style: none;
      }
  }
</style>