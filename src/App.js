
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
// import Messages from './components/Messages/Messages';
import Music from './components/Music/Music';
import News from './components/News/News';
import Profile from './components/Profile/Profile';
import Settings from './components/Settings/Settings';
import Users from './components/Users/Users';
import { getProfileThunk, setLoading } from "./Redux/profileReducer";
import { getAuthThunk } from "./Redux/AuthReducer";





const App = ({ getAuthThunk, ...props }) => {

  useEffect(() => {
    getAuthThunk()
  }, [])



  return (
    <div>
      {props.profile.loading
        ? <div>Загрузка ... </div>
        : <div>
          <Header />
          <Routes>
            <Route path='/profile/:id' element={<Profile />} />
            <Route path='/' element={<Profile />} />
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

export default connect(mapStateToProps, { getProfileThunk, setLoading, getAuthThunk })(App)


