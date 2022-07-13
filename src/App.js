
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Routes, Route, useNavigate } from 'react-router-dom';
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
import MuiAlert from '@mui/material/Alert';
import { Slide, Snackbar } from '@mui/material';
import HocSnackBar from './components/HOC/HocSnackBar';






const App = ({ getAuthThunk, ...props }) => {

  const [openSnackBar, setOpenSnackBar] = useState(false)
    const [error, setErrorSnackBar] = useState(false)
    const [errorText, setErrorSnackBarText] = useState('')

  const navig = useNavigate()
 

  useEffect(() => {
    getAuthThunk()
    .then((path)=> {
      if (path === 'login') {
        navig('/login')
      }
     else {
      navig('/profile/19240')
     }
    })

  
  }, [])


  
  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
  function Transition(props) {
    return <Slide {...props} direction="right" />;
  }


  const handleCloseSnackBar =(e, reason)=> {
    if (reason === 'clickaway') {
        return;
      }
    setOpenSnackBar(false)
}
const handleErrorBar =(e, reason)=> {
    if (reason === 'clickaway') {
        return;
      }
      setErrorSnackBar(false)
}

  
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
            <Route path='/profile/:id'  element={
              HocSnackBar(Profile, 
                openSnackBar, setOpenSnackBar, 
                error,setErrorSnackBar,
                errorText,setErrorSnackBarText)
            } />
           <Route path='/login' element={<Login />} />
            {/* <Route path='/messages'  element={<Messages />} /> */}
            <Route path='/news' element={<News />} />
            <Route path='/music' element={<Music />} />
            <Route path='/settings' element={<Settings />} />
            <Route path='/users' element={
              HocSnackBar(Users, 
                openSnackBar, setOpenSnackBar, 
                error,setErrorSnackBar,
                errorText,setErrorSnackBarText)} />
            
          </Routes>
        </div>
      }
       <Snackbar open={openSnackBar} 
            autoHideDuration={2000} 
            onClose={handleCloseSnackBar}
            TransitionComponent={Transition}
            >
                <Alert onClose={handleCloseSnackBar} severity="success" sx={{ width: {md:'100%', xs: '50%'} }}>
                Changes saved!
                </Alert>
            </Snackbar>
            <Snackbar open={error} 
            autoHideDuration={2000} 
            onClose={handleErrorBar}
            TransitionComponent={Transition}
            >
                <Alert onClose={handleErrorBar} severity="error" sx={{ width: {md:'100%', xs: '50%'} }}>
             {errorText}!</Alert>
            </Snackbar>
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


