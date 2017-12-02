const firebase = require('firebase')

const config = {
  apiKey: "AIzaSyBMbFiSreruvn7Qh7lhmn-h42owCFmgO04",
  authDomain: "salad-a7c82.firebaseapp.com",
  databaseURL: "https://salad-a7c82.firebaseio.com",
  projectId: "salad-a7c82",
  storageBucket: "salad-a7c82.appspot.com",
  messagingSenderId: "577410933588"
}

module.exports =  firebase.initializeApp(config)