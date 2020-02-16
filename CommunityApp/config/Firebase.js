import firebase from 'firebase'

import 'firebase/firestore'


import {
    API_KEY,
    AUTH_DOMAIN,
    DATABASE_URL,
    PROJECT_ID,
    MESSAGE_SENDER_ID,
    APP_ID
} from 'react-native-dotenv'

const firebaseConfig = {
    apiKey: "AIzaSyCnnzOZXasTft5AW2sJSrrogPlvl2w05X4",
    authDomain: "community-2020.firebaseapp.com",
    databaseURL: "https://community-2020.firebaseio.com",
    projectId: "community-2020",
    storageBucket: "community-2020.appspot.com",
    messagingSenderId: "954027992665",
    appId: "1:954027992665:web:51b57efc9a86498760b348"
}

// Initialize Firebase
const Firebase = firebase.initializeApp(firebaseConfig)

export const db = firebase.firestore()

// avoid deprecated warnings

// Commenting out for now (see iPhone screenshots for error description)

// db.settings({
//     timestampsInSnapshots: true
// })

export default Firebase