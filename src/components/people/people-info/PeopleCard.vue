<template>
  <div class="card">
    <img src="#" alt="character">
    <ul>
      <li>People Info</li>
      <li>People Info</li>
      <li>People Info</li>
      <li>People Info</li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
  .card {
    display: flex;
    flex-grow: 1;
    border: 1px solid #444;
    border-radius: 3px;
    background-color: #444;

      img {
        width: 150px;
        height: 150px;
      }

      ul {
        list-style: none;
        padding-left: 10px;
        margin-left: 1.5rem;

          li {
            padding: 5px 0;
          }
    }
  }

</style>