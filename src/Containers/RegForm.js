import React, { Component } from 'react'
import firebase from 'firebase'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import classes from './Dashboard.module.css'
import Form1 from '../Components/FormComponents/Form1'
import { Button } from 'reactstrap'

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
class RegForm extends Component {
  formData = [
    <Form1 />,
    <React.Fragment />,
    <React.Fragment />,
    <React.Fragment />,
    <React.Fragment />,
    <React.Fragment />,
    <React.Fragment />,
    <React.Fragment />,
    <React.Fragment />,
  ]

  state = {
    position: 0,
  }

  currentForm = this.formData[this.state.position]

  render() {
    return (
      <div
        className={classes.contentwrapper}
        style={
          this.props.loggedin ? { padding: '5rem 0' } : { padding: '10rem 0' }
        }
      >
        {this.props.loading ? (
          <p>Loading..</p>
        ) : !this.props.loggedin ? (
          <React.Fragment>
            <h2 className={classes.header}>
              မှတ်ပုံတင်လျှောက်ထားရန် အကောင့်ဝင်ရန်လိုအပ်သည်
            </h2>
            <p>အောက်ပါတို့မှ တစ်ခုခုဖြင့် အကောင့်ဝင်ပါ။</p>
            <StyledFirebaseAuth
              uiConfig={uiConfig}
              firebaseAuth={firebase.auth()}
              className={classes.authbox}
            />
          </React.Fragment>
        ) : (
          <div className={classes.formwrapper}>
            {this.formData[this.state.position]}
            <div className={classes.btngp}>
              <Button color="primary" outline className={classes.backbtn}>
                နောက်သို့
              </Button>
              <Button color="primary" type="submit">
                ရှေ့သို့
              </Button>
            </div>
          </div>
        )}
      </div>
    )
  }
}
export default RegForm
