"use strict"
/*
nome repo: vue-hello
Descrizione:
Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
Bonus:
Aggiungere alla pagina un’immagine, presa anch’essa da un data.
*/
const app = Vue.createApp({
  data() {
    return {
      message: "Hello Vue!",
      userName: "Andrea Colombo",
      titleRed: "text-danger",
      imgHelloThere: 'hellothere.PNG',
      showImage: false,
      imageURL: ""
    }
  },
  methods: {
    btnActive() {
      console.log("Benvenuto nel mondo di VueJS, " + this.userName);
      this.titleRed = "text-primary";
      this.message = "Hello There!";
      this.showImage = true;
      this.imageURL = `./img/${this.imgHelloThere}`;
    },  
  }
}).mount("#app")

