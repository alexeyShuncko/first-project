import React from 'react'

import { Box, Button, Checkbox, Container,  FormControlLabel,  TextField } from '@mui/material'
import { connect } from 'react-redux'
import {  setErrLogin, setErrPass, setID } from "../../Redux/profileReducer";
import { getLoginThunk } from "../../Redux/profileReducer";
import { useNavigate } from "react-router-dom";





const Login = (props) => {
  
    const navig = useNavigate()

    //  useEffect(()=> {
    //      props.profile.isAuth && props.profile.id && navig(`/profile/${props.profile.id}`) 
    //  })
    
 

    const fomSubmit = (value) => {
        let login = document.getElementById('login')
        let password = document.getElementById('password')
        let check = document.getElementById('check').checked

      

        if (login.value.length === 0) {
            props.setErrLogin(true, 'Пустое поле!') 
        }
        if (password.value.length === 0) {
            props.setErrPass(true, 'Пустое поле!')
        }
        else {
            props.getLoginThunk(login.value,password.value,check, null)
            .then((id)=> {
             navig(`/profile/${id}`)
         })
        
        }
    
    }


    const handleChange =(e)=> {
       if (e.target.id === 'login' && props.profile.errLogin.login) {
        props.setErrLogin(false, '')
       }
       if (e.target.id === 'password' && props.profile.errPass.pass) {
        props.setErrPass(false, '')   
       }
    }

    return <div>
        <Container maxWidth={'md'} sx={{ mt: '6rem', display: 'flex', justifyContent: 'center' }}>
            <Box
            noValidate = {false}
            component="form"
            sx={{
                '& .MuiTextField-root': { mb: 1 },
              }}
            >
                <div>
                    <TextField 
                    onChange={handleChange} 
                    error={props.profile.errLogin.login} 
                    helperText={props.profile.errLogin.text}
                    id="login" 
                    label="Login" 
                    variant="outlined" 
                    // autoComplete='off'
                    />
                </div>
                <div>
                    <TextField 
                    onChange={handleChange} 
                    error={props.profile.errPass.pass} 
                    helperText={props.profile.errPass.text}
                    id="password" 
                    type={'password'} 
                    label="Password" 
                    variant="outlined" 
                    autoComplete='off'
                    />
                </div>
                <div>
                <FormControlLabel  control={<Checkbox  id='check'/>} label="Запомнить меня" />
               
                </div>
                <div>
                    <Button 
                    variant='contained' 
                    onClick={fomSubmit}
                    >
                        Login</Button>
                </div>
            </Box>
        </Container>

    </div>
}

let mapStateToProps = (state) => {
    return {
        auth: state.authData,
        profile: state.profileData
    }
}

export default connect(mapStateToProps,{getLoginThunk, setErrLogin, setErrPass, setID})(Login)
