<template>
  <PeopleHeader />
  <people-list />
  <PeopleCard />
</template>

<script>
import PeopleHeader from '../components/people/people-header/PeopleHeader.vue';
import PeopleList from '../components/people/people-list/PeopleList.vue';
import PeopleCard from '../components/people/people-info/PeopleCard.vue';

export default {
  components: {
    PeopleHeader,
    PeopleList,
    PeopleCard,
  },
}
</script>

<style>

</style>