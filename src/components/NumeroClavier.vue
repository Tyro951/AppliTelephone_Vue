<script>
import { useJournalStore } from '../stores/journal.js';

export default {
  name: 'NumeroClavier',
  data() {
    return {
      phoneNumber: '',
      nummatch: null,
      numeroClavier: {
        pseudo: '',
        numero: '',
        date: '',
        heure: '',
      },
    };
  },
  setup() {
    const journalStore = useJournalStore();
    return {
      journalStore,
    };
  },
  emits: ['ajout-contact'],
  methods: {
    addToPhoneNumber(digit) {
      this.phoneNumber += digit;
      this.updateMatchingName();
    },
    deleteLastDigit() {
      this.phoneNumber = this.phoneNumber.slice(0, -1);
      this.updateMatchingName();
    },
    updateMatchingName() {
      const matchingEntry = this.journalStore.entrees.find(
        (entry) => entry.numero === this.phoneNumber
      );
      this.nummatch = matchingEntry ? matchingEntry.pseudo : null;
    },
    ajoutPerso() {
      const now = new Date();
      this.numeroClavier.date = now.getDate() + '/' + (now.getMonth() + 1) + '/' + now.getFullYear();
      this.numeroClavier.heure = now.getHours() + ':' + now.getMinutes();
      this.numeroClavier.numero = this.phoneNumber; 
      if (this.nummatch) {
        this.numeroClavier.pseudo = this.nummatch;
      } else {
        this.numeroClavier.pseudo = '';
      }
      this.journalStore.ajoutPersonnage(this.numeroClavier);
      this.$emit('ajout-contact', this.numeroClavier);
      this.numeroClavier = {
        pseudo: '',
        numero: '',
        date: '',
        heure: '',
      };
    },
  },
};
</script>
<template>
    <main>
      <form @submit.prevent="ajoutPerso">
        <div class="preview">{{ phoneNumber }}</div>
        <div class="nom"><p v-if="nummatch">{{ nummatch }}</p></div>
        <div class="grid">
          <p @click="addToPhoneNumber(1)">1</p>
          <p @click="addToPhoneNumber(2)">2</p>
          <p @click="addToPhoneNumber(3)">3</p>
          <p @click="addToPhoneNumber(4)">4</p>
          <p @click="addToPhoneNumber(5)">5</p>
          <p @click="addToPhoneNumber(6)">6</p>
          <p @click="addToPhoneNumber(7)">7</p>
          <p @click="addToPhoneNumber(8)">8</p>
          <p @click="addToPhoneNumber(9)">9</p>
          <p @click="addToPhoneNumber('*')">*</p>
          <p @click="addToPhoneNumber(0)">0</p>
          <p @click="deleteLastDigit">supp</p>
        </div>
        <img @click="ajoutPerso()" src="../assets/tel.png" alt="tel">
      </form>
    </main>
  </template>
  
  <style scoped>
  .preview {
    display: flex;
    color: black;
    font-size: 2em;
    font-weight: 600;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    margin-top: 100px;
  }
  .grid {
    display: grid;
    width: 15%;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(4, 1fr);
    gap: 1rem;
    margin: 0 auto;
    margin-top: 10px;
    margin-bottom: 20px;
  }
  .grid p {
    background-color: gray;
    padding: 1rem;
    width: 100%;
    border-radius: 45%;
    box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.1);
    text-align: center;
  }
  main {
    place-items: center;
  }
  img {
    width: 5%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
  }
  .nom p {
    display: flex;
    color: black;
    font-size: 1.5em;
    font-weight: 600;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
  }
  </style>