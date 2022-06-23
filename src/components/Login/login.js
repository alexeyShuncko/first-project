import React from 'react'

import { Box, Button, Checkbox, Container,  FormControlLabel,  TextField } from '@mui/material'
import { connect } from 'react-redux'
import { getLoginThunk, setErrLogin, setErrPass } from "../../Redux/AuthReducer";
import { useNavigate } from "react-router-dom";





const Login = (props) => {

    const navig = useNavigate()

     props.auth.isAuth && navig('/profile')


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
        }
    
    }


    const handleChange =(e)=> {
       if (e.target.id === 'login' && props.auth.errLogin.login) {
        props.setErrLogin(false, '')
       }
       if (e.target.id === 'password' && props.auth.errPass.pass) {
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
                    error={props.auth.errLogin.login} 
                    helperText={props.auth.errLogin.text}
                    id="login" 
                    label="Login" 
                    variant="outlined" 
                    />
                </div>
                <div>
                    <TextField 
                    onChange={handleChange} 
                    error={props.auth.errPass.pass} 
                    helperText={props.auth.errPass.text}
                    id="password" 
                    type={'password'} 
                    label="Password" 
                    variant="outlined" 
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
        auth: state.authData
    }
}

export default connect(mapStateToProps,{getLoginThunk, setErrLogin, setErrPass})(Login)
