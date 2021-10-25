<template>
  <ul >
    <li>Star DB</li>
    <li id="people">People</li>
    <li id="planets">Planets</li>
    <li id="starships">Starships</li>
  </ul>
</template>

<style lang="scss" scoped>
  ul {
    display: flex;
    list-style: none;
    justify-content: flex-start;

      li {
        padding: 15px;
      }
      li:hover {
        cursor: pointer;
      }
  }
</style>