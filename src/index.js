import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from 'firebase/app';
import { Provider } from 'react-redux';
import store from './store';

 
  const firebaseConfig = {
    apiKey: "AIzaSyALLojw7aJErN83xlw5ehc6MHTwR9W71cA",
    authDomain: "text-n-share.firebaseapp.com",
    projectId: "text-n-share",
    storageBucket: "text-n-share.appspot.com",
    messagingSenderId: "643046626609",
    appId: "1:643046626609:web:3c7254b73c83bb0518cc10"
  };
 
  
  firebase.initializeApp(firebaseConfig);

window.store = store;
ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
    <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);


