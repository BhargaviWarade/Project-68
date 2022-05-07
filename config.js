import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
    apiKey: "AIzaSyByXpasaWUvKuDLR_VBXEO9WpzApsCHUZc",
    authDomain: "classtest-cbaf2.firebaseapp.com",
    projectId: "classtest-cbaf2",
    storageBucket: "classtest-cbaf2.appspot.com",
    messagingSenderId: "148873216982",
    appId: "1:148873216982:web:6587c1b0eced50f1ff5a77"
  
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();