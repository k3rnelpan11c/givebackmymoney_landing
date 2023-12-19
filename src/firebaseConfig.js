import { initializeApp } from 'firebase/app';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBfYvqHWzeXzpB7WZ1Q3w7m-pxskl1aOM",
  authDomain: "givebackmymoney.firebaseapp.com",
  projectId: "givebackmymoney",
  storageBucket: "givebackmymoney.appspot.com",
  messagingSenderId: "699704749382",
  appId: "1:699704749382:web:370f993cd751548c75c947",
  measurementId: "G-QZBYYXJ6CX"
};

const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp