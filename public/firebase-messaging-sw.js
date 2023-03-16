importScripts("https://www.gstatic.com/firebasejs/9.8.4/firebase-app-compat.js")
importScripts("https://www.gstatic.com/firebasejs/9.8.4/firebase-messaging-compat.js")



const firebaseConfig = {
    apiKey: "AIzaSyCPib9uAFYNkXewDgvCxZT1ruMb3vVdNQw",
    authDomain: "web-notify-f5ac1.firebaseapp.com",
    projectId: "web-notify-f5ac1",
    storageBucket: "web-notify-f5ac1.appspot.com",
    messagingSenderId: "677244548130",
    appId: "1:677244548130:web:02bf26f9f9c46417b9867b",
    measurementId: "G-FR4DJVTJ4T"
};

const app = firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging(app);


messaging.onBackgroundMessage(payload => {
    console.log("------------public---call--------------");
    // previo a mostrar notificación
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: "/logo192.png"
    }


    return self.registration.showNotification(
        notificationTitle,
        notificationOptions
    )
})