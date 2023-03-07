// Import the functions you need from the SDKs you need
import { initializeApp  } from "firebase/app";
import { addDoc, collection, getDocs, getFirestore, updateDoc, doc, getDoc } from "firebase/firestore"

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
    
    // Get Users from Database
    getUsers(callback){
        getDocs(collection(this.db,"users")).then(
            (querySnapshot) => {
                const myData = querySnapshot.docs
                .map((doc) => ({...doc.data(), id:doc.id}))
                window.myData = myData
                callback(myData)
            })
    }

    async addNewUser(oggetto){
        try{
            await addDoc(collection(this.db,"users"),oggetto)
            console.log("Aggiunto");
        }catch(e){
            console.log("Errore nella scrittura nel server");
        }
    }

    async updateCreditCard(cartaDati){
        const cartaRef = doc(this.db, "users", window.user.id)
        try{
            await updateDoc(cartaRef, {
                carta: cartaDati.carta,
                cvv: cartaDati.cvv,
                scadenza: cartaDati.scadenza
            })

            window.user.carta = cartaDati.carta
            window.user.cvv = cartaDati.cvv
            window.user.scadenza = cartaDati.scadenza
            console.log(window.user);
        }catch(e){
            console.log("Errore nell'update carta del server "+e);
        }
    }

    async getUserData(utente){
        console.log("QUI");
        const docRef = doc(this.db, "users", "8hEKuwJF7yDo8xrE8aCt");
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
        }
    }

}

export default Database