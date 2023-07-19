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
      imageURL: "",
      imageAnimation: "",
      animationType: "",
      animationReset: "",
      animationStyle: "",
      animationStart: ""
    }
  },
  methods: {
    btnActive() {
      console.log("Benvenuto nel mondo di VueJS, " + this.userName);
      this.titleRed = "text-primary";
      this.message = "Hello There!";
      this.showImage = true;
      this.imageURL = `./img/${this.imgHelloThere}`;
      this.imageAnimation = "animation";
      this.animationType = "fade-in-down";
      this.animationReset = "true";
      this.animationStyle = "animation-duration: 3000ms;";
      this.animationStart = "onLoad";
    },  
  }
}).mount("#app")

