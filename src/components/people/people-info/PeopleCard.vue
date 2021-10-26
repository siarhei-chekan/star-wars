<template>
  <div class="card">
    <img src="https://starwars-visualguide.com/assets/img/characters/1.jpg" alt="character">
    <ul>
      <li>Luke Skywalker</li>
      <li>"gender": "male"</li>
      <li>"birth_year": "19BBY"</li>
      <li>"eye_color": "blue"</li>
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
        width: 30%;
        border-radius: 25px;
        padding: 15px;
        // height: 70%;
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