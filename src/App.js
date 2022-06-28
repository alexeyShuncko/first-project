
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import Error from './components/Error/Error';
import Header from './components/Header/Header';
import Loading from './components/Loading/Loading';
import Login from './components/Login/Login';
// import Messages from './components/Messages/Messages';
import Music from './components/Music/Music';
import News from './components/News/News';
import Profile from './components/Profile/Profile';
import Settings from './components/Settings/Settings';
import Users from './components/Users/Users';
import { getAuthThunk,getProfileThunk } from "./Redux/profileReducer";







const App = ({ getAuthThunk, ...props }) => {


  const navig = useNavigate()
  const location = useLocation() 

  useEffect(() => {
    getAuthThunk()

    if (location.pathname === '/') {
      navig('/profile/19240')
    }
  }, [])



  
  return (
    <div>
      {
        props.profile.serverError && <Error />
      }
      {!props.profile.isAuth
        ? <Loading />
        : <div>
          <Header />
          <Routes>
            <Route path='/profile/:id'  element={<Profile />} />
           <Route path='/login' element={<Login />} />
            {/* <Route path='/messages'  element={<Messages />} /> */}
            <Route path='/news' element={<News />} />
            <Route path='/music' element={<Music />} />
            <Route path='/settings' element={<Settings />} />
            <Route path='/users' element={<Users />} />
            
          </Routes>
        </div>
      }
    </div>


  )
}
let mapStateToProps = (state) => {
  return {
    auth: state.authData,
    profile: state.profileData
  }
}

export default connect(mapStateToProps, { getProfileThunk,  getAuthThunk })(App)


