const firebaseConfig = {
    apiKey: "AIzaSyBvz4fGy0ue4ZpLX_C-jY8AKHtIrcazLac",
    authDomain: "js-login-and-signin.firebaseapp.com",
    projectId: "js-login-and-signin",
    storageBucket: "js-login-and-signin.appspot.com",
    messagingSenderId: "371245146141",
    appId: "1:371245146141:web:4ae02f0f9acea7a78166f4",
    measurementId: "G-ZEKH856E2G"
  };
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

