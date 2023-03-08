import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAMJpKVKcnnYEkNA-UklnctVJOp_wovSDg",
  authDomain: "realtime-chatapp-91626.firebaseapp.com",
  projectId: "realtime-chatapp-91626",
  storageBucket: "realtime-chatapp-91626.appspot.com",
  messagingSenderId: "277839861935",
  appId: "1:277839861935:web:baf79e031e07700b215c5a"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage();
export const db = getFirestore();