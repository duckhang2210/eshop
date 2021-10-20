import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
	apiKey: 'AIzaSyDI0jk3TVZ_9kNduEUxebyTGkXDhe647I4',
	authDomain: 'perfume-eshop.firebaseapp.com',
	projectId: 'perfume-eshop',
	storageBucket: 'perfume-eshop.appspot.com',
	messagingSenderId: '1049893531993',
	appId: '1:1049893531993:web:37cadbcb44da5971e6dc48',
	measurementId: 'G-4YDHQ5PB48'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
