import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import {getStorage} from"firebase/storage";
// Your web app's Firebase configuration
const firebaseConfig = {
apiKey: "AIzaSyCrAdn6Fw9JGvSd2Qhs06ZmNM1m6o_evIM",
authDomain: "hellochef-ke.firebaseapp.com",
projectId: "hellochef-ke",
storageBucket: "hellochef-ke.appspot.com",
messagingSenderId: "294669334953",
appId: "1:294669334953:web:3ac372eabec6423355acb8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db= getFirestore(app)
const storage= getStorage(app)
export {db};
export{storage};


