<script>
export default {
    name: 'NumPerso',
    props: [
        'journal'
    ]
}

</script>

<template>
    <div>
        <h2> {{ journal.pseudo }}</h2> 
      <p> {{ journal.numero }}</p>
      <p> appel passé le {{ journal.date }} à {{ journal.heure }}</p>
    </div>
</template>


<style scoped>

div {
    width: 200px;
    margin: 0 auto;
    height: 200px;
    background-color: aqua;
    padding: 10px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}

</style>