<script>
import { useJournalStore } from '../stores/journal.js';

export default {
  name: 'ContactView',
  data() {
    return {
      nom: '',
      numero: '',
    };
  },
  methods: {
    ajouterContact() {
      const now = new Date();
      const nouveauContact = {
        pseudo: this.nom,
        numero: this.numero,
        date: now.getDate() + '/' + (now.getMonth() + 1) + '/' + now.getFullYear(),
        heure: now.getHours() + ':' + now.getMinutes(),
      };

      useJournalStore().ajoutPersonnage(nouveauContact);

      
      this.nom = '';
      this.numero = '';
    },
  },
};
</script>

<template>
  <div>
    <h2>Ajouter un contact</h2>
    <form @submit.prevent="ajouterContact">
      <label for="nom">Nom :</label>
      <input v-model="nom" required />

      <label for="numero">Numéro :</label>
      <input v-model="numero" type="number" required />

      <button type="submit">Ajouter</button>
    </form>
  </div>
</template>
<style scoped>
  .form-container {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }

  .form-group {
    margin-bottom: 15px;
  }

  label {
    display: block;
    margin-bottom: 5px;
  }

  input {
    width: 100%;
    padding: 8px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
  }

  button {
    background-color: #4caf50;
    color: white;
    padding: 10px 15px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  button:hover {
    background-color: #45a049;
  }
</style>