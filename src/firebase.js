import firebase from 'firebase'


    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB5Yhdme9h81z6i6tKpI98j2HeHeMkxNro",
    authDomain: "eula-4615b.firebaseapp.com",
    projectId: "eula-4615b",
    storageBucket: "eula-4615b.appspot.com",
    messagingSenderId: "692208077890",
    appId: "1:692208077890:web:f86d24361f0aa153e6b1db",
    measurementId: "G-5GWV8N4XSV"
  };

  
  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider =new firebase.auth.GoogleAuthProvider();

  export { db, auth, provider}