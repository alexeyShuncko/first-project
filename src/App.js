
import React from 'react';
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







const App =(props)=> {
  
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/profile'  element={<Profile />} />
        {/* <Route path='/messages'  element={<Messages />} /> */}
        <Route path='/news'  element={<News />} />
        <Route path='/music'  element={<Music />} />
        <Route path='/settings'  element={<Settings />} />
        <Route path='/users'  element={<Users />} />
        <Route path='/login'  element={<Login />} />
      </Routes>
    </div>
)
}
let mapStateToProps = (state) => {
    return {
        name: state.nameReducer
    }
}

export default connect(mapStateToProps,{})(App)


