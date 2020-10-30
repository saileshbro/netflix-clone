import Firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import firebaseConfig from '../firebase.config'

const firebase = Firebase.initializeApp(firebaseConfig)
export default firebase
