import React, { useState } from 'react';
// import s from './Profile.module.css';
import {
    Button, Card, CardActions, CardContent,
    CardMedia, Collapse, Container, Dialog, DialogActions,
    DialogContent, DialogContentText, DialogTitle, List, ListItem,
    ListItemButton, ListItemIcon, ListItemText, ListSubheader,
    TextField, Typography
} from '@mui/material';

import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { connect } from 'react-redux';
import ava from '../../image/foto.jpg';


import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';

import { getUpdateProfile, getUpdateStatus } from "../../Redux/profileReducer";
import { follow, unfollow } from "../../Redux/usersReducer";
import setting from '../../image/Settings.gif';



const Profile = (props) => {


    const [open, setOpen] = useState(false)
    const [editOpen, setEditOpen] = useState(false)
    const [statusEdit, setStatusEdit] = useState(false)





    const editProfile = () => {
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false)
    }
    const saveProfile = () => {

        const data = {
            userId: props.profile.id,
            lookingForAJob: props.profile.user.lookingForAJob,
            lookingForAJobDescription: props.profile.user.lookingForAJobDescription,
            fullName: document.getElementById('name').value,
            contacts: {
                github:
                    document.getElementById('github')
                        ? document.getElementById('github').value
                        : null,
                vk:
                    // document.getElementById('vk')
                    // ? document.getElementById('vk').value
                    // : 
                    null,
                facebook:
                    // document.getElementById('facebook')
                    // ? document.getElementById('facebook').value
                    // : 
                    null,
                instagram: document.getElementById('instagram')
                    ? document.getElementById('instagram').value
                    : null,
                twitter: document.getElementById('twitter')
                    ? document.getElementById('twitter').value
                    : null,
                website:
                    // document.getElementById('website')
                    // ? document.getElementById('website').value
                    // : 
                    null,
                youtube: document.getElementById('youtube')
                    ? document.getElementById('youtube').value
                    : null,
                mainLink:
                    // document.getElementById('mainLink')
                    // ? document.getElementById('mainLink').value
                    // :
                    null
            }
        }
        setOpen(false)
        props.getUpdateProfile(data, props.profile.id)
            .then(() => { props.setOpenSnackBar(true) })
            .catch((err) => {
                props.setErrorSnackBarText(err.message)
                props.setErrorSnackBar(true)
            })
    }


    const handleClick = () => {
        setEditOpen(!editOpen)
    }



    // Обработчики редактирования профиля

    const handleEditStatus = () => {
        setStatusEdit(true)
    }
    const handleSaveStatus = () => {
        const status = document.getElementById('statusProfile').value
        props.getUpdateStatus(status)
            .then(() => {
                setStatusEdit(false)
                props.setOpenSnackBar(true)
            })
            .catch((err) => {
                setStatusEdit(false)
                props.setErrorSnackBarText(err.message)
                props.setErrorSnackBar(true)
            })

    }

    // Массив социальных сетей
    const arrContacts = [
        // 'facebook',
        'twitter',
        'github',
        'instagram',
        // 'vk',
        // 'website',
        'youtube',
        // 'mainLink'
    ]


    const followUser = () => {
        props.follow(props.profile.user.userId)
            .then(() => {
                props.setOpenSnackBar(true)
            })
            .catch((err) => {
                props.setErrorSnackBarText(err.message)
                props.setErrorSnackBar(true)
            })
    }
    const unfollowUser = () => {
        props.unfollow(props.profile.user.userId)
            .then(() => {
                props.setOpenSnackBar(true)
            })
            .catch((err) => {
                props.setErrorSnackBarText(err.message)
                props.setErrorSnackBar(true)
            })
    }

    return (

        <Container maxWidth={'md'} sx={{ mt: '6rem' }}>
            <Card sx={{ display: { xs: '', md: 'flex' }, p: '1rem' }} >
                <CardMedia
                    sx={{ maxWidth: 345, maxHeight: 345 }}
                    component="img"
                    src={props.profile.user.photos.large !== null ? props.profile.user.photos.large : ava}
                    alt="henghog"
                />
                <CardContent>
                    {props.profile.user.aboutMe
                        ? <Typography gutterBottom variant="h5" component="div">

                            {props.profile.user.fullName} - {props.profile.user.aboutMe}
                        </Typography>
                        : <Typography gutterBottom variant="h5" component="div">

                            {props.profile.user.fullName}
                        </Typography>
                    }

                    {props.profile.status
                        ? <Typography variant="body1"
                            component={'div'}
                            sx={{
                                display: 'flex',
                                alignItems: 'center'
                            }}>
                            {!statusEdit
                                ? props.profile.status
                                : <TextField
                                    defaultValue={props.profile.status}
                                    autoFocus
                                    autoComplete='off'
                                    margin="dense"
                                    id="statusProfile"
                                    label="Status"
                                    variant="outlined"
                                    size='small'
                                />}
                        </Typography>
                        : null}
                    <List
                        sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', pl: 5 }}
                        subheader={<ListSubheader>Contacts:</ListSubheader>}
                        dense
                    >
                        <ListItem divider>
                            <ListItemIcon>
                                <TwitterIcon />
                            </ListItemIcon>
                            <ListItemText id="data-twitter"
                                primary={props.profile.user.contacts.twitter || 'no data'} />
                        </ListItem>
                        <ListItem divider>
                            <ListItemIcon>
                                <InstagramIcon />
                            </ListItemIcon>
                            <ListItemText id="data-instagram"
                                primary={props.profile.user.contacts.instagram || 'no data'} />
                        </ListItem>

                        <ListItem divider>
                            <ListItemIcon>
                                <GitHubIcon />
                            </ListItemIcon>
                            <ListItemText id="data-github"
                                primary={props.profile.user.contacts.github || 'no data'} />
                        </ListItem>

                        <ListItem>
                            <ListItemIcon>
                                <YouTubeIcon />
                            </ListItemIcon>
                            <ListItemText id="data-youtube"
                                primary={props.profile.user.contacts.youtube || 'no data'} />
                        </ListItem>

                    </List>
                    <CardActions>
                        {props.profile.id === props.profile.user.userId
                            ? <>
                                <Button variant="contained" onClick={editProfile}>Edit Profile</Button>
                                {!statusEdit
                                    ? <Button variant="contained"
                                        color='secondary'
                                        onClick={handleEditStatus}
                                    >Edit Status</Button>
                                    : <Button variant="contained"
                                        color='success'
                                        onClick={handleSaveStatus}
                                    >Save Status</Button>}
                            </>

                            : props.users.users.find(a => a.id === props.profile.user.userId).followed
                                ? <Button variant="contained"
                                    color='secondary'
                                    onClick={unfollowUser}
                                >Unfollow</Button>
                                : <Button variant="contained"
                                    color='success'
                                    onClick={followUser}>Follow</Button>

                        }
                        {
                            (props.users.followingInProgress[0] === props.profile.user.userId) &&
                            <img src={setting}
                                alt='settings'
                                width={'35px'}
                                style={{ marginLeft: '10px' }} />
                        }
                    </CardActions>
                </CardContent>
            </Card>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Profile</DialogTitle>
                <DialogContent sx={{ display: 'flex', flexDirection: 'column' }}>
                    <DialogContentText>
                        Change one or more profile fields.
                    </DialogContentText>
                    <TextField
                        defaultValue={props.profile.user.fullName}
                        autoFocus
                        autoComplete='off'
                        margin="dense"
                        id="name"
                        label="Name"
                        variant="outlined"
                        size='small'
                    />
                    <TextField
                        defaultValue={props.profile.user.aboutMe}
                        multiline
                        autoComplete='off'
                        margin="dense"
                        id="aboutMe"
                        label="AboutMe"
                        variant="outlined"
                        size='small'
                    />
                    <ListItemButton onClick={handleClick}>
                        <ListItemIcon>
                            <ImportContactsIcon />
                        </ListItemIcon>
                        <ListItemText primary="Contacts" />
                        {editOpen ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={editOpen} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding sx={{ display: 'flex', flexDirection: 'column' }}
                            id='listForm'>

                            {
                                arrContacts.map(a => (
                                    <TextField key={a}
                                        defaultValue={props.profile.user.contacts[a]}
                                        autoComplete='off'
                                        margin="dense"
                                        id={a}
                                        label={a.slice(0, 1).toUpperCase() + a.slice(1, a.length)}
                                        variant="outlined"
                                        size='small'
                                    />
                                ))
                            }
                        </List>
                    </Collapse>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} variant='contained' color='warning'>Cancel</Button>
                    <Button onClick={saveProfile} variant='contained' color='success'>Save</Button>
                </DialogActions>
            </Dialog>

        </Container>
    )
}

let mapStateToProps = (state) => {
    return {
        profile: state.profileData,
        auth: state.authData,
        users: state.usersPage
    }
}

export default connect(mapStateToProps,
    { getUpdateProfile, getUpdateStatus, follow, unfollow })(Profile)

