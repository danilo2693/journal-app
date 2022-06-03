import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { FacebookAuthProvider, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
    apiKey: 'AIzaSyA9ar_FmYe_SkVNdrg3Ohtgu9L1Gy6UoLk',
    authDomain: 'journal-app-2ab4e.firebaseapp.com',
    projectId: 'journal-app-2ab4e',
    storageBucket: 'journal-app-2ab4e.appspot.com',
    messagingSenderId: '395560509385',
    appId: '1:395560509385:web:6b76db11ea64fc18ef9218',
};

initializeApp(firebaseConfig);

const db = getFirestore();
const googleAuthProvider = new GoogleAuthProvider();
const facebookAuthProvider = new FacebookAuthProvider();

export { db, googleAuthProvider, facebookAuthProvider };
