import React, { Component } from 'react';
import './App.css';
import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';




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
          <h1>
            Hello Feed
          </h1>

          <form className="form-group row">
            <input className="form-control" type="text" placeholder="Filter By #hashtag"/>
          </form>
      </div>
        
        
      </div>
    );
  }
}

export default App;
