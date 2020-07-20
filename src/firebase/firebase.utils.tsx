import firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDyDjxdNi7bHcRzhN6g0c5kvBDnxBgz17U",
    authDomain: "first-proyect-firebase.firebaseapp.com",
    databaseURL: "https://first-proyect-firebase.firebaseio.com",
    projectId: "first-proyect-firebase",
    storageBucket: "first-proyect-firebase.appspot.com",
    messagingSenderId: "187611195398",
    appId: "1:187611195398:web:32bf527710576bcdddfb87",
    measurementId: "G-5E141CVCTQ"
}

export const createUserProfileDocument = async (userAuth: firebase.User | null, additionalData?) => {
    if(!userAuth) return

    const userRef = firestore.doc(`users/${userAuth.uid}`)

    const snapShot = await userRef.get()

    if(!snapShot.exists){
        const {displayName, email} = userAuth
        const createdAt = new Date()

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (e) {
            console.log('error creating user', e.message)
        }
    }

    return userRef
}

firebase.initializeApp(firebaseConfig)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase