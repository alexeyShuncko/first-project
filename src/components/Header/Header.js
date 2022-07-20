import React, { useEffect, useState } from "react";

import {
  MenuItem, Tooltip, Button, Avatar, Container, Typography, IconButton,
  Menu, Toolbar, Box, AppBar
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CellTower from '@mui/icons-material/CellTower';

import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { getProfileThunk, getLogoutThunk, setID } from "../../Redux/profileReducer";
import ava from "../../image/1.jpg";
import Player from "../Music/Player/Player";




const Header = (props) => {
  let path =  window.location.href.slice(37,  window.location.href.length)
  const [active, setActive] = useState(path.slice(0, 1).toUpperCase() + path.slice(1, path.length))

  useEffect(() => {
    if (path.includes('/')) {
      setActive(path.slice(0, 1).toUpperCase() + path.slice(1, path.indexOf('/')))
    }
    else
      setActive(path.slice(0, 1).toUpperCase() + path.slice(1, path.length))
  }, [setActive, path])


  const navig = useNavigate()

  const pages = ['Profile',
    // 'Messages', 
    'News', 'Music', 'Settings', 'Users'];
  const settings = ['Logout'];


  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget)
  };
  const handleCloseNavMenu = (e) => {
    if (props.profile.isAuth && props.profile.id) {
      if (e.currentTarget.innerText.toLowerCase() === 'profile') {
        if (props.profile.id !== props.profile.user.userId) {
          props.getProfileThunk(props.profile.id)
        }
        navig(`/${e.currentTarget.innerText.toLowerCase()}/${props.profile.id}`)
      }
      else
        navig(`/${e.currentTarget.innerText.toLowerCase()}`)
      setAnchorElNav(null);
    }

  };


  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);

  };

  const logout = () => {
    setAnchorElUser(null);
    props.getLogoutThunk()
      .then(() => {
        navig(`/login`)
        props.setID('')
      })

  }


  const openLoginForm = () => {
    navig(`/login`)
  }

  const mainClick = () => {
    if (props.profile.id && props.profile.id !== props.profile.user.userId) {
      props.getProfileThunk(props.profile.id)

    }
    else if (props.profile.id) {
      navig(`/profile/${props.profile.id}`)
    }

  }


  return (
    <AppBar position="fixed" >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* <CellTower sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            onClick={mainClick}
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.2rem',
              color: 'inherit',
              cursor: 'pointer'
            }}
          >
            Social network
          </Typography> */}

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />

            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center" >{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

         
             
              {/* <Typography
                variant="h5"
                noWrap
                onClick={mainClick}
                sx={{
                  mr: 2,
                  display: { xs: 'flex', md: 'none' },
                  flexDirection: 'column',
                
                  flexGrow: 1,
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.2rem',
                  color: 'inherit',
                  cursor: 'pointer'
                }}
              >
                <div>
                <CellTower sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                Social network
                </div>
              
               
              </Typography> */}
              <Box 
              sx={{  display: { xs: 'flex', md: 'none' }, flexGrow: 1, }}>
                <Player />
              </Box>
      
          


          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2, color: 'inherit', display: 'block',
                  fontSize: active === page ? '20px' : '',
                  textDecoration: active === page ? 'overline' : ''
                }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Box sx={{ display: { xs: 'none', md: 'flex' }, flexGrow: 1 }}>
            <Player />
          </Box>

          <Box sx={{ flexGrow: 0, pl: '12px' }}>
            {path === 'login'
              ? <Button variant="contained" onClick={openLoginForm}>Login</Button>
              :
              <>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt="Remy Sharp"
                      src={props.profile.photo || ava} />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: '45px' }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {settings.map((setting) => (
                    <MenuItem key={setting} onClick={logout}>
                      <Typography textAlign="center">{setting}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </>
            }

          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}


let mapStateToProps = (state) => {
  return {
    auth: state.authData,
    profile: state.profileData
  }
}

export default connect(mapStateToProps, { getLogoutThunk, getProfileThunk, setID })(Header)


