import React, { Component } from 'react'
import classes from './Landing.module.css'
import firebase from 'firebase'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import { Redirect } from 'react-router-dom'

let redirect = <Redirect to="/" />

const uiConfig = {
  callbacks: {
    signInSuccessWithAuthResult: function (authResult, redirectUrl) {
      var user = authResult.user
      var credential = authResult.credential
      var isNewUser = authResult.additionalUserInfo.isNewUser
      var providerId = authResult.additionalUserInfo.providerId
      var operationType = authResult.operationType
      // Do something with the returned AuthResult.
      // Return type determines whether we continue the redirect automatically
      // or whether we leave that to developer to handle.
      return true
    },
    signInFailure: function (error) {
      // Some unrecoverable error occurred during sign-in.
      // Return a promise when error handling is completed and FirebaseUI
      // will reset, clearing any UI. This commonly occurs for error code
      // 'firebaseui/anonymous-upgrade-merge-conflict' when merge conflict
      // occurs. Check below for more details on this.
      // return handleUIError(error);
    },
  },
  queryParameterForSignInSuccessUrl: 'signInSuccessUrl',
  signInFlow: 'popup',
  signInSuccessUrl: '', //Specifying sign in success url can cause double redirect since we are also managing redirect in react-router with local state.
  signInOptions: [
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    firebase.auth.PhoneAuthProvider.PROVIDER_ID,
  ],
  // Other config options...
}

class Landing extends Component {
  render() {
    return (
      <div className={classes.contentwrapper}>
        {this.props.loading ? (
          <p>Loading..</p>
        ) : this.props.loggedin ? (
          redirect
        ) : (
          <React.Fragment>
            <div className={classes.firstcol}>
              <StyledFirebaseAuth
                uiConfig={uiConfig}
                firebaseAuth={firebase.auth()}
                className={classes.emailbox}
              />
            </div>
          </React.Fragment>
        )}
      </div>
    )
  }
}
export default Landing
