<template>
  <li>{{person.name}}</li>
</template>

<script>
export default {
  props: [
    'person',
  ],
}
</script>

<style lang="scss" scoped>
  li {
    padding: 5px 0;
  }
  
  li:hover {
    cursor: pointer;
  }
</style>