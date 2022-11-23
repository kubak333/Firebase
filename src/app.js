import './../styles/styles.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyASAg9KWLcUheVd5XvH49xrftHOafrXU0U",
  authDomain: "sda-firebase-4f1cf.firebaseapp.com",
  projectId: "sda-firebase-4f1cf",
  storageBucket: "sda-firebase-4f1cf.appspot.com",
  messagingSenderId: "420864867372",
  appId: "1:420864867372:web:953590cc4cc78bafba6589"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

// const kubaRef = ref(storage, "6.png");
// const img = document.getElementById("myImage");
// img.src = `https://firebasestorage.googleapis.com/v0/b/${kubaRef.bucket}/o/${kubaRef.fullPath}?alt=media`

const myBtn = document.getElementById("mySendBtn");
myBtn.addEventListener("click", () => {
    const myResult = document.getElementById("myResult");
    myResult.innerText = "Przesyłam..."

    const file = document.getElementById("myFileInput").files[0];
    
    if(file) {

    const myFileNameInput = document.getElementById("myFileNameInput");
    const myFileRef = ref(storage, file.value);
    uploadBytes(myFileRef, file).then((result) => {
        myResult.innerText = "Przesłano!"

    })
    }
    else {
        myResult.innerText = "Error";
    }
});



//1. Po kliknięciu w elemencie h1 ma się pojawić info "Przesyłam"
//2. Po zakończeniu przesyłania w elemencie h1 ma się pojawić info "Przesłano"
//3. Dodajemy nowy input, w którym uzytkownik moe wpisać nazwę pliku
//4. Plik razem z tą nazwą będzie przesłany
//5. Jezeli uzytkownik nie wybrał pliku i klinął prześlij, to w elemencie h1 wyświetlamy "Error: proszę wybrać plik"
