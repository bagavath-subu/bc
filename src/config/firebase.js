import firebase from 'firebase/app'
import 'firebase/storage'
import 'firebase/database'

const firebaseConfig = {
    apiKey: "AIzaSyD7vFOsefnliqzGwz14pKfUXDQWj9UP6Ic",
    authDomain: "babycry-86dfc.firebaseapp.com",
    databaseURL: "https://babycry-86dfc.firebaseio.com",
    projectId: "babycry-86dfc",
    storageBucket: "babycry-86dfc.appspot.com",
    messagingSenderId: "434586833471",
    appId: "1:434586833471:web:d440007c1215973d109e8a",
    measurementId: "G-WRLP0VPTRS"
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
const database = firebase.database();

export {
    storage, database, firebase as default
}