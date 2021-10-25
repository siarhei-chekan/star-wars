<template>
  <ul>
    <li>People 1</li>
    <li>People 2</li>
    <li>People 3</li>
  </ul>
</template>

<script>
export default {

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

      li {
        padding: 5px 0;
      }
  }

</style>