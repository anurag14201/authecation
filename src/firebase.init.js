// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDevpxzoGh-hsOXyfVikriMj0fqRorr6pk",
    authDomain: "my-simple-authen.firebaseapp.com",
    projectId: "my-simple-authen",
    storageBucket: "my-simple-authen.appspot.com",
    messagingSenderId: "540303659829",
    appId: "1:540303659829:web:8fb2c10bb35f4d469f727c",
    measurementId: "G-X94QWFHCP0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default app;

