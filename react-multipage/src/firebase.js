import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBAZkNR2E8Bfru3LCThrELuoCGYTuVcCd4",
    authDomain: "projectsync-98cb4.firebaseapp.com",
    projectId: "projectsync-98cb4",
    storageBucket: "projectsync-98cb4.appspot.com",
    messagingSenderId: "224430306473",
    appId: "1:224430306473:web:8823a5715d6856d39ea5b8",
    measurementId: "G-CJ80ZJECCT"
};

// Export the Firebase services you want to use
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export {app, auth}
