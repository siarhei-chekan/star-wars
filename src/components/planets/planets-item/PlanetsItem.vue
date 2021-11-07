<template>
  <li class="planets-item" 
    @click="selectItem">
    {{ planet.name }}
  </li>
</template>

<script>
export default {
  props: {
    planet: Object,
    index: Number,
  },

  methods: {
    selectItem() {
      this.$emit('select-item', this.index);
    },
  },
}
</script>

<style lang="scss">
  .planets-item {
    border: 1px solid #adb0af36;
    padding: 0.5rem 1rem;
  }

  .planets-item:hover {
    cursor: pointer;
  }
</style>