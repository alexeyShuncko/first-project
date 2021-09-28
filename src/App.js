import React, { Component } from 'react';
import { connect } from 'react-redux';
import{ Route, withRouter } from 'react-router-dom';
import './App.css';

import Header from './components/Header/HeaderContainer';
import LoginContainer from './components/Login/logincontainer';
import Music from './components/Music/Music';
import Nav from './components/Nav/Nav';
import News from './components/News/News';


//import DialogsContainer from './components/Dialogs/DialogsContainer';
//import ProfileContainer from './components/Profile/ProfileContainer';

import Settings from './components/Settings/Settings';
import UsersContainer from './components/Users/UsersContainer';
import { initialiseApp } from './Redux/AppReducer'
import { compose } from 'redux';
import Preloader from './components/comon/preloader/Preloader';
import { withSuspense } from './HOC/withSuspense';


const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));

class App extends Component {

  componentDidMount() {
    this.props.initialiseApp()
}
  render() {

    if (!this.props.initialized) {
      return <Preloader />
    }

  return (
    
      <div className='app-wrapper'>
        <Header />
        <div className='app-wrapper-nav'><Nav /></div>
        

        <div className='app-wrapper-content'>

          <Route path='/dialogs' 
          render={ withSuspense(DialogsContainer)} />
          <Route path='/profile/:userid?' 
          render={ withSuspense(ProfileContainer)}/>
          <Route path='/users' 
          render={ () => <UsersContainer /> } />
           <Route path='/login' 
          render={ () => <LoginContainer /> } />

          <Route path='/news' render={() => <News />} />
          <Route path='/music' component={Music} />
          <Route path='/settings' component={Settings} />
        </div>
      </div>
    
  );
}}

const mapStateToProps =(state)=> {
  return {
    initialized: state.app.initialized
  }
}

export default compose (
  withRouter,
connect(mapStateToProps, { initialiseApp }))(App)