// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection, getDocs, getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

class Database {

    // Your web app's Firebase configuration
    firebaseConfig = {
        apiKey: "AIzaSyCCS80chXmqNzrmYkpLKZd1azLlI-OTy2A",
        authDomain: "callezon-a2ac3.firebaseapp.com",
        projectId: "callezon-a2ac3",
        storageBucket: "callezon-a2ac3.appspot.com",
        messagingSenderId: "1069525212042",
        appId: "1:1069525212042:web:47c06a626d2d839d4bc673"
    };
  
    // Initialize Firebase
    app = initializeApp(this.firebaseConfig);
    db = getFirestore(this.app)
    
    async getUsers(){
        await getDocs(collection(this.db,"users")).then(
            (querySnapshot) => {
                const myData = querySnapshot.docs
                .map((doc) => ({...doc.data(), id:doc.id}))
                return myData
            })
    }


}

export default Database