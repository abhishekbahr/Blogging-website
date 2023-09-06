let firebaseConfig = {
  apiKey: "AIzaSyBkX8wi5aKjWYQxCY6s9HVDavHJp4114YI",
  authDomain: "blogging-website-63b95.firebaseapp.com",
  projectId: "blogging-website-63b95",
  storageBucket: "blogging-website-63b95.appspot.com",
  messagingSenderId: "925588757777",
  appId: "1:925588757777:web:532eefc62f86afabb700b0",
};
firebase.initializeApp(firebaseConfig);

let db= firebase.firestore();
let auth = firebase.auth();

const logoutUser = () => {
  auth.signOut();
  location.reload();
}