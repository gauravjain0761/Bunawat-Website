import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getMessaging, getToken } from "firebase/messaging"

const firebaseConfig = {
  apiKey: "AIzaSyCPib9uAFYNkXewDgvCxZT1ruMb3vVdNQw",
  authDomain: "web-notify-f5ac1.firebaseapp.com",
  projectId: "web-notify-f5ac1",
  storageBucket: "web-notify-f5ac1.appspot.com",
  messagingSenderId: "677244548130",
  appId: "1:677244548130:web:02bf26f9f9c46417b9867b",
  measurementId: "G-FR4DJVTJ4T"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const messaging = getMessaging(app);

export const getNotifyToken = async () => {
  const token = await getToken(messaging, {
    vapidKey: "BDLj29MsW3H3hREfJPs1Jm9vU2wVNQgd-uc1lG80OCz4-mqfgXgKkz017D2SOY0ffp0KB5ShunCab0938bJ1eE4"
  })

  return token
}