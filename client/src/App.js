import React, { Component } from 'react';
import './App.css';
import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import TweetsApp from './components/TweetsApp';

firebase.initializeApp({
  apiKey: "AIzaSyC3RDSnOVpeWaH9LKey9hr3E1_5inGp-7s",
  authDomain: "twit-task.firebaseapp.com",
  projectId: "twit-task",
})

class App extends Component {
  state = { isSignedIn: false }
  uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.TwitterAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      signInSuccessWithAuthResult: () => false
    }
  }

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ isSignedIn: !!user })
      console.log("user", user)
    })
  }

  render() {
    const isSignedIn = this.state.isSignedIn
    return (
      <div className="App">

      <nav className="navbar navbar-light bg-light">
        <span className="navbar-brand mb-0 h1">Twitter-Task</span>

        <div >
        {this.state.isSignedIn ? (
          <span>
            <div>Signed In!</div>
            <button onClick={() => firebase.auth().signOut()}>Sign out!</button>
            <h1>Welcome {firebase.auth().currentUser.displayName}</h1>
            <img
              alt="profile picture"
              src={firebase.auth().currentUser.photoURL}
            />
          </span>
        ) : (
          <StyledFirebaseAuth
            uiConfig={this.uiConfig}
            firebaseAuth={firebase.auth()}
          />
        )}
        </div>
        
      </nav>

      <div className="container">

           {this.state.isSignedIn ? (
             <TweetsApp />
           ) : (
            <div>
                <h3>Please signIn to see twitter stream!</h3>
            </div>
           )}

          
      </div>
        
        
      </div>
    );
  }
}

export default App;
