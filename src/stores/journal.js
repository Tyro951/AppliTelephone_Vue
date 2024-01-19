import {defineStore} from "pinia";
var now = new Date();
export const useJournalStore = defineStore('journal', {

    state: () => ({
        entrees: [
            {
              pseudo: 'Grégory',
              numero: '0612345678',
              date: now.getDate() + '/' + (now.getMonth() +1) + '/' + now.getFullYear(),
              heure: now.getHours() + ':' + now.getMinutes(),
            },
            {
              pseudo: 'Paul',
              numero: '0719345274',
              date: now.getDate() + '/' + (now.getMonth() +1) + '/' + now.getFullYear(),
              heure: now.getHours() + ':' + now.getMinutes(),
            },
            {
              pseudo: 'Norman',
              numero: '0101010101',
              date: now.getDate() + '/' + (now.getMonth() +1) + '/' + now.getFullYear(),
              heure: now.getHours() + ':' + now.getMinutes(),
            }
          ],
    }),
    actions: {
        ajoutPersonnage(journal) {
            this.entrees.push(journal)
        }
    }


})