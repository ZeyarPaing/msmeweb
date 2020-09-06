import React, { Component } from 'react'
import classes from './Home.module.css'
import { Route, Link, Switch, Redirect } from 'react-router-dom'
import Landing from './Landing'
import RegForm from './RegForm'
import Navigation from '../Components/Navigation'
import MainPage from './MainPage'
import About from '../Components/Aboutus'

import firebase from 'firebase'
const firebaseConfig = {
  //Your firebase configuratrion here.
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  databaseURL: process.env.REACT_APP_databaseURL,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
  measurementId: process.env.REACT_APP_measurementId,
}

firebase.initializeApp(firebaseConfig)
class Home extends Component {
  state = {
    overlaywidth: 0,
    loggedin: null,
    loading: true,
  }

  openOverlay = () => {
    this.setState({ overlaywidth: 100 })
  }
  closeOverlay = () => {
    this.setState({ overlaywidth: 0 })
  }
  singOutUser = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        this.closeOverlay()
      })
      .catch(function (error) {
        // An error happened.
      })
  }
  componentWillMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedin: true, loading: false })
      } else {
        this.setState({ loggedin: false, loading: false }) // No user is signed in.
      }
    })
  }

  render() {
    return (
      <React.Fragment>
        {/* <div style={{width:this.state.overlaywidth + '%'}} className={classes.overlay}>

  <span className={classes.closebtn} onClick={this.closeOverlay}>&times;</span>
  <div className={classes.overlaycontent}>
    <ul>
        <li onClick={this.closeOverlay}><Link to="/dashboard">Dashboard</Link></li>
        <li onClick={this.closeOverlay}><Link to="/about">About Us</Link></li>
        <li onClick={this.closeOverlay}><Link to="/contact">Contact Us</Link></li>
        {this.state.loggedin?<li onClick={this.singOutUser}><Link >Sign Out</Link></li>:null}
     </ul>
  </div>
</div> */}

        <div>
          <Navigation
            authState={{
              loggedin: this.state.loggedin,
              signout: this.singOutUser,
            }}
          />
          {/* <div className={classes.navbarcontainer}>
        <div  className={classes.logocol} ><Link to="/about"><img src={logo} alt="companay-logo" width="30" height="30" /><span>tradinghigh.local</span></Link></div>
        <div  className={classes.navlist}>
            <ul>
                <li><Link to="/dashboard">Dashboard</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
                {this.state.loggedin?<li onClick={this.singOutUser}><Link >Sign Out</Link></li>:null}
            </ul>
        </div>
        <span className={classes.hamburger} onClick={this.openOverlay}>&#9776;</span>
    </div> */}
          <div className={classes.contentcontainer}>
            <Switch>
              <Route
                path="/"
                exact
                render={() => (
                  <MainPage
                    loading={this.state.loading}
                    loggedin={this.state.loggedin}
                  />
                )}
              />
              <Route
                path="/login"
                exact
                render={() => (
                  <Landing
                    loading={this.state.loading}
                    loggedin={this.state.loggedin}
                  />
                )}
              />
              <Route
                path="/dashboard"
                exact
                render={() => (
                  <RegForm
                    loading={this.state.loading}
                    loggedin={this.state.loggedin}
                  />
                )}
              />
              <Route path="/about" exact render={() => <About />} />
            </Switch>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Home
