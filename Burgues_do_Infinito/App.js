import React, {Component} from 'react';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase/app';
import '@firebase/auth';
import ReduxThunk from 'redux-thunk';
import Routes from './router';
import {Provider} from 'react-redux'
import reducers from './reducers'

export default class Estagio extends Component{
  constructor(props) {
    super(props)
    var firebaseConfig = {
		apiKey: "AIzaSyAvu5CH8RXTXAQNEMULnXX9clOV2ADe1kg",
		authDomain: "burgues-do-infinito.firebaseapp.com",
		databaseURL: "https://burgues-do-infinito.firebaseio.com",
		projectId: "burgues-do-infinito",
		storageBucket: "",
		messagingSenderId: "171333420645",
		appId: "1:171333420645:web:5c6226e497626ed5"
	 };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
	}
  render() {
    //   <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
	// 		<Routes />
	// 	</Provider>
    return (
		<Routes />
    );
  }
}
