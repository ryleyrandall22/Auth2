import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyAQm18gk559JFRNcvSNfWfgAskYCqlrqzg",
  authDomain: "authentication2-ryley.firebaseapp.com",
  databaseURL: "https://authentication2-ryley.firebaseio.com",
  projectId: "authentication2-ryley",
  storageBucket: "",
  messagingSenderId: "424246983876",
  appId: "1:424246983876:web:0c1cd11f10a853672a9d91"
};

firebase.initializeApp(config);

export const auth = firebase.auth();

export const db = firebase.firestore();
