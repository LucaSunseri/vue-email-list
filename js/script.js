/*
  Attraverso l’apposita API di Boolean
  https://flynn.boolean.careers/exercises/api/random/mail
  generare 10 indirizzi email e stamparli in pagina all’interno di una lista.
  **Bonus**
  1. Far comparire gli indirizzi email solamente quando sono stati tutti generati.
  2. Predisporre una scritta “Errore” nel caso fallisse la chiamata HTTP
*/
const app = new Vue({

  el: '#app',
  data: {
    listEmail: [],
    loading: false,
    errorMsg: false,
  },
  mounted() {

  },
  methods: {

    genera10Email() {

      this.listEmail = [];
      this.loading = true;

      for (let i = 0; i < 10; i++) {
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then(response => {
             // console.log('response', response);
             let email = response.data.response;
             // console.log(email);
             this.listEmail.push(email);

             if (this.listEmail.length === 10) {
              this.loading = false;
             }
        })
        .catch(error => {
             console.log('Errore 404', error);
             this.errorMsg = true;
             this.loading = false;
        })
      }

    }

  }
})