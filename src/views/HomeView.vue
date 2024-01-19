<script>
import NumPerso from '../components/NumPerso.vue'
import {useJournalStore} from '../stores/journal.js'

export default {
  name: 'HomeView',
  components: {
    NumPerso,
  },
  data() {
    return {
      
    }
  },
  setup() {
    const journalStore = useJournalStore()
    return {
      journalStore
    }
  },
  computed: {
    entrees() {
      return this.journalStore.entrees
    }
  },
}
</script>

<template>
  <div class="cartes">
      <div v-for="journal in entrees" :key="journal.pseudo">

      <NumPerso :journal="journal"/>

    </div>
  </div>
</template>
<style scoped>

.cartes {
  margin: 50px;
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: space-around;
  color: black;
}

</style>