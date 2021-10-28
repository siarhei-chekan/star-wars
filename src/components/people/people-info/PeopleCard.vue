<template>
  <div class="card">
    <img :src="charactersImgUrl + Number(this.itemIndex + 1) +'.jpg'" alt="character">
    <ul>
      <li class="item-name">{{ this.selectedItem.name }}</li>
      <li><span>Gender:</span>{{ this.selectedItem.gender }}</li>
      <li><span>Birth Year:</span>{{ this.selectedItem.birth_year }}</li>
      <li><span>Eye Color:</span>{{ this.selectedItem.eye_color }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      charactersImgUrl: `https://starwars-visualguide.com/assets/img/characters/`,
    };
  },
  props: [
    'selectedItem',
    'itemIndex',

  ],
}
</script>

<style lang="scss" scoped>
  .item-name {
    font-size: 2rem;
  }

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
            padding: 0.5rem 1rem;
            border-bottom: 1px solid #adb0af36;
          }

            span {
              padding-right: 1.5rem;
            }
    }
  }

</style>