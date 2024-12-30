// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
//import.meta.env.VITE_APP_NMBR
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_APIKEY,
  authDomain: import.meta.env.VITE_APP_AUTHDOMAIN,
  projectId: import.meta.env.VITE_APP_PROJECTID,
  storageBucket: import.meta.env.VITE_APP_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_APP_MESSAGINGSENDER,
  appId: import.meta.env.VITE_APP_APPID
};

// Initialize Firebase
/* const app = initializeApp(firebaseConfig); */
export const app= initializeApp(firebaseConfig);
const db = getFirestore(app);
async function getProducts(db) {
    const productsCol = collection(db, 'productos');
    const productsSnapshot = await getDocs(productsCol);
    const productsList = productsSnapshot.docs.map(doc => doc.data());
    return productsList;
  }
export const productsASM= await getProducts(db);