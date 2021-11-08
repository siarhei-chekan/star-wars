<template>
  <li class="starships-item" 
    @click="selectItem">
    {{ starship.name }}
  </li>
</template>

<script>
export default {
  props: {
    starship: Object,
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
  .starships-item {
    border: 1px solid #adb0af36;
    padding: 0.5rem 1rem;
  }

  .starships-item:hover {
    cursor: pointer;
  }
</style>