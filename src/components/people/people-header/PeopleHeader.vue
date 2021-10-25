<template>
  <ul >
    <h2>Star DB</h2>
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
    align-items: center;
    padding-left: 15px;

      li {
        padding: 15px;
        color: #00bc8c;
      }
      h2, li:hover {
        cursor: pointer;
      }
      h2 {
        margin: 0;
        padding: 15px;
      }
  }
</style>