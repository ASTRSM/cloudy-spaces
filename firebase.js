// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {getAnalytics} from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDY6TPi1eqLAMFTffupTMvmyzHegXAbFmU',
  authDomain: 'cloudy-spaces.firebaseapp.com',
  projectId: 'cloudy-spaces',
  storageBucket: 'cloudy-spaces.appspot.com',
  messagingSenderId: '438774414118',
  appId: '1:438774414118:web:fe74036f31295f4b315fe7',
  measurementId: 'G-LVMSY26ZGR',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
