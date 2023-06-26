// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage, ref, getDownloadURL, uploadBytes  } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAQW0nqtofaf4ENZNbMWQwFfzpHHm32wqY",
    authDomain: "laposadadelsol-50242.firebaseapp.com",
    projectId: "laposadadelsol-50242",
    storageBucket: "laposadadelsol-50242.appspot.com",
    messagingSenderId: "388157732987",
    appId: "1:388157732987:web:91fa4518d65f76d109cade",
    measurementId: "G-RVF2PYPCV5"
  };

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

export async function getFile(imagePath) {
    const storage = getStorage();
    const imageRef = ref(storage, imagePath);
  
    try {
      const downloadUrl = await getDownloadURL(imageRef);
      return downloadUrl;
    } catch (error) {
      console.error('Error al obtener la URL de la imagen:', error);
      return null;
    }
  }

export async function setFile(file){
    const storageRef = ref(storage, '/usersIcon/1.jpg');
    uploadBytes(storageRef, file).then(snapshot => {console.log(snapshot)});
}


