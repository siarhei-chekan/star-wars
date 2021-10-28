<template>
  <li @click="selectItem">{{person.name}}</li>
</template>

<script>
export default {
  props: [
    'person',
    'index'
  ],

  methods: {
    selectItem() {
      console.log(this.index, 'people item');
      this.$emit('select-item', this.index);
    },
  },
}
</script>

<style lang="scss" scoped>
  li {
    border: 1px solid #adb0af36;
    padding: 0.5rem 1rem;
  }

  li:hover {
    cursor: pointer;
  }
</style>