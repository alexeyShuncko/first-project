import { Box, Button, Container } from '@mui/material';
import React from 'react';
import './Music.module.css';
import treck1 from '../../music/BoomfunkMCs-Freestyler.mp3'
import treck2 from '../../music/Турбомода - Новогодняя.mp3'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';

const Music = (props) => {


    const arrMusicName = [
        'BoomfunkMCs-Freestyler',
        'Турбомода - Новогодняя'
    ]

    const play = (e) => {
        console.log(e.currentTarget.id)
        
        document.getElementById(`treck${e.currentTarget.id}`).play()
    }
    const stop = () => {
        document.getElementById('player').pause()
    }

    return (
        <Container maxWidth={'md'} sx={{ mt: '6rem' }}>

            {
                arrMusicName.map((a, index) => (
                    <div key={a}>
                        <span>{a}</span>
                        <audio controls src={index === 0 ? treck1 : treck2} id={`treck${index+1}`}></audio>
                        <Box id= {index+1}>
                            <Button onClick={play}>
                                <PlayArrowIcon />
                            </Button>
                            <Button onClick={stop}>
                                <PauseIcon />
                            </Button>
                        </Box>
                    </div>
                ))
            }
            
        </Container>
    )
}
export default Music;