import store from '../store'
import firebase from 'firebase'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDarg86nM6V4oZ_oNt2FMfbYX3wVwGDQl8",
    authDomain: "managie.firebaseapp.com",
    projectId: "managie",
    storageBucket: "managie.appspot.com",
    messagingSenderId: "103388939192",
    appId: "1:103388939192:web:e98f34e103666ddca2c54d",
    measurementId: "G-9RBNQMRRH5"
};
const database = firebase.initializeApp(firebaseConfig)

database.signUp = async (email, password) => {
    try {
        await firebase.auth().createUserWithEmailAndPassword(email, password)
        store.commit('setCurrentUser', firebase.auth().currentUser)
        return true
    } catch (error) {
        return error
    }
}

database.signIn = async (email, password) => {
    try {
        await firebase.auth().signInWithEmailAndPassword(email, password)
        store.commit('setCurrentUser', firebase.auth().currentUser)
        return true
    } catch (error) {
        return error
    }
}
export default database