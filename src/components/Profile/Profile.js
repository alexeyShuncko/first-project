import React, { useState } from 'react';
// import s from './Profile.module.css';
import {
    Container, Card, CardMedia, CardContent, CardActions,
    Typography, Button, List, ListSubheader, ListItem,
    ListItemIcon, ListItemText, Dialog, DialogTitle, DialogContent, DialogContentText,
    TextField, DialogActions, ListItemButton, Collapse
} from '@mui/material';

import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import GitHubIcon from '@mui/icons-material/GitHub';
import { connect } from 'react-redux';
import ava from '../../image/foto.jpg'


import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';

import { getUpdateProfile } from "../../Redux/profileReducer";



const Profile = (props) => {


    const [open, setOpen] = useState(false)
    const [editOpen, setEditOpen] = useState(false)



    const editProfile = () => {
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false)
    }
    const saveProfile = () => {

        console.log(document.getElementById('github'))

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
                vk: document.getElementById('vk')
                ? document.getElementById('vk').value
                : null,
                facebook: document.getElementById('facebook')
                ? document.getElementById('facebook').value
                : null,
                instagram: document.getElementById('instagram')
                ? document.getElementById('instagram').value
                : null,
                twitter: document.getElementById('twitter')
                ? document.getElementById('twitter').value
                : null,
                website: document.getElementById('website')
                ? document.getElementById('website').value
                : null,
                youtube: document.getElementById('youtube')
                ? document.getElementById('youtube').value
                : null,
                mainLink: document.getElementById('mainLink')
                ? document.getElementById('mainLink').value
                : null
            }
        }
        setOpen(false)
        props.getUpdateProfile(data, props.profile.id)
    }


    const handleClick = () => {
        setEditOpen(!editOpen)
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
                        ? <Typography variant="body1" >
                            Status: {props.profile.status}
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
                            <ListItemText id="data-vk"
                                primary={props.profile.user.contacts.twitter || 'no data'} />
                        </ListItem>
                        <ListItem divider>
                            <ListItemIcon>
                                <InstagramIcon />
                            </ListItemIcon>
                            <ListItemText id="data-vk"
                                primary={props.profile.user.contacts.instagram || 'no data'} />
                        </ListItem>

                        <ListItem divider>
                            <ListItemIcon>
                                <GitHubIcon />
                            </ListItemIcon>
                            <ListItemText id="data-vk"
                                primary={props.profile.user.contacts.github || 'no data'} />
                        </ListItem>

                        <ListItem>
                            <ListItemIcon>
                                <YouTubeIcon />
                            </ListItemIcon>
                            <ListItemText id="data-vk"
                                primary={props.profile.user.contacts.youtube || 'no data'} />
                        </ListItem>

                    </List>
                    <CardActions>
                        {props.profile.id === props.profile.user.userId
                            ? <>
                                <Button variant="contained" onClick={editProfile}>Edit Profile</Button>
                                <Button variant="contained" color='secondary'>Edit Status</Button>
                            </>

                            : props.users.users.find(a => a.id === props.profile.user.userId).followed
                                ? <Button variant="contained" color='secondary'>Unfollow</Button>
                                : <Button variant="contained" color='success'>Follow</Button>

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

                            <TextField
                                defaultValue={props.profile.user.contacts.facebook}
                                autoComplete='off'
                                margin="dense"
                                id="facebook"
                                label="Facebook"
                                variant="outlined"
                                size='small'
                            />
                            <TextField
                                defaultValue={props.profile.user.contacts.twitter}
                                autoComplete='off'
                                margin="dense"
                                id="twitter"
                                label="Twitter"
                                variant="outlined"
                                size='small'
                            />
                            <TextField
                                defaultValue={props.profile.user.contacts.github}
                                autoComplete='off'
                                margin="dense"
                                id="github"
                                label="Github"
                                variant="outlined"
                                size='small'
                            />
                            <TextField
                                defaultValue={props.profile.user.contacts.instagram}
                                autoComplete='off'
                                margin="dense"
                                id="instagram"
                                label="Instagram"
                                variant="outlined"
                                size='small'
                            />
                            <TextField
                                defaultValue={props.profile.user.contacts.vk}
                                autoComplete='off'
                                margin="dense"
                                id="vk"
                                label="VK"
                                variant="outlined"
                                size='small'
                            />
                            <TextField
                                defaultValue={props.profile.user.contacts.website}
                                autoComplete='off'
                                margin="dense"
                                id="website"
                                label="Website"
                                variant="outlined"
                                size='small'
                            />
                            <TextField
                                defaultValue={props.profile.user.contacts.youtube}
                                autoComplete='off'
                                margin="dense"
                                id="youtube"
                                label="Youtube"
                                variant="outlined"
                                size='small'
                            />
                            <TextField
                                defaultValue={props.profile.user.contacts.mainLink}
                                autoComplete='off'
                                margin="dense"
                                id="mainLink"
                                label="MainLink"
                                variant="outlined"
                                size='small'
                            />
                        </List>
                    </Collapse>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} variant='contained' color='error'>Cancel</Button>
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

export default connect(mapStateToProps, { getUpdateProfile })(Profile)

