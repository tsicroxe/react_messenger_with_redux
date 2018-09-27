import * as firebase from 'firebase';


import { 
	API_KEY, 
	AUTH_DOMAIN, 
	DATABASE_URL, 
	PROJECT_ID, 
	STORAGE_BUCKET, 
	MESSAGING_SENDER_ID}
     from'react-native-dotenv';


let instance = null
 
class FirebaseService {
  constructor() {

    firebaseConfig = {
    apiKey: `${API_KEY}`,
    authDomain: `${AUTH_DOMAIN}`,
    databaseURL: `${DATABASE_URL}`,
    projectId: `${PROJECT_ID}`,
    storageBucket: `${STORAGE_BUCKET}`,
    messagingSenderId: `${MESSAGING_SENDER_ID}`
  };

    if (!instance) {
      this.app = firebase.initializeApp(firebaseConfig);
      instance = this;
    }
    return instance
  }
}
 
const firebaseService = new FirebaseService().app
console.log(firebaseService);
export default firebaseService;