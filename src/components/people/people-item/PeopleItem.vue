<template>
  <li class="people-item" 
    @click="selectItem">
    {{character.name}}
  </li>
</template>

<script>
export default {
  props: {
    character: Object,
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
  .people-item {
    border: 1px solid #adb0af36;
    padding: 0.5rem 1rem;
  }

  .people-item:hover {
    cursor: pointer;
  }
</style>