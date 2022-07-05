import { Box, Container, IconButton, Slider, Stack, Typography } from '@mui/material';
import React, { useState } from 'react';
import './Music.module.css';


import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import VolumeDown from '@mui/icons-material/VolumeDown';
import VolumeUp from '@mui/icons-material/VolumeUp';
import { connect } from 'react-redux';
import { setActivTreck, setDurationValue, setActive, setDuration } from "../../Redux/musicReducer";



const Music = ({ setDurationValue, setDuration, ...props }) => {

    const [volumeValue, setVolumeValue] = useState(30)
    const [indexSong, setIndexSong] = useState(0)
    const [durationType, setDurationType] = useState(false)



    const handleDuration = (_, value) => {
        setDurationValue(value)
        document.getElementById('player').currentTime = value
    }
    const handleChange = (event, newValue) => {
        setVolumeValue(newValue)
        document.getElementById('player').volume = volumeValue * 0.01
    }
    const volumeMinus = () => {
        const minus10 = volumeValue - 10
        if (minus10 > 0) {
            setVolumeValue(minus10)
            document.getElementById('player').volume = minus10 * 0.01
        }
        else {
            setVolumeValue(0)
            document.getElementById('player').volume = 0
        }
    }


    const volumePlus = () => {
        const plus10 = volumeValue + 10
        if (plus10 < 100) {
            setVolumeValue(plus10)
            document.getElementById('player').volume = plus10 * 0.01
        }
        else {
            setVolumeValue(100)
            document.getElementById('player').volume = 1
        }
    }


    const play = () => {

        document.getElementById('player').volume = volumeValue * 0.01

        document.getElementById('player').play()

        const timer = (e) => {
            setDurationValue(e.srcElement.currentTime)
            props.music.duration !== Math.round(e.srcElement.duration)
                && setDuration(Math.round(e.srcElement.duration))
        }
        document.getElementById('player').ontimeupdate = timer
        props.setActive(true)
    }

    const stop = () => {
        document.getElementById('player').pause()
        props.setActive(false)
    }


    const next = () => {
        if (indexSong === props.music.arrMusicName.length - 1) {
            setIndexSong(0)
        }
        else {
            setIndexSong(prev => prev + 1)
        }

        if (props.music.active) {
            document.getElementById('player').oncanplay = play
        }
        else {
            document.getElementById('player').oncanplay = null
        }
    }

    const prev = () => {
        setIndexSong(prev => prev - 1)
        if (props.music.active) {
            document.getElementById('player').oncanplay = play
        }
        else {
            document.getElementById('player').oncanplay = null
        }
    }


    function formatDuration(value) {
        const minute = Math.floor(value / 60);
        const secondLeft = value - minute * 60;
        return `${minute}:${secondLeft <= 9 ? `0${secondLeft}` : secondLeft}`;
    }




    return (
        <Container maxWidth={'md'} sx={{ mt: '6rem' }}>
            <audio
                src={props.music.arrMusicName[indexSong].path}
                id='player'
                onEnded={next}
            ></audio>

            <Box sx={{ textAlign: 'center' }}>
                <Typography variant='h5'>{props.music.arrMusicName[indexSong].name}</Typography>
                <Stack spacing={2} direction="row" alignItems="center" >
                    <Slider
                        aria-label="Duration"
                        size='small'
                        value={props.music.durationValue}
                        onChange={handleDuration}
                        min={0}
                        step={1}
                        max={props.music.duration || 300}
                    />
                </Stack>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    {props.music.durationValue !== 0
                        ? <Typography>
                            {formatDuration(Math.ceil(props.music.durationValue))}
                        </Typography>
                        : null
                    }

                    {props.music.duration
                        ? !durationType
                            ? <Typography
                                onClick={() => setDurationType(!durationType)}
                                sx={{ cursor: 'pointer' }}>
                                {formatDuration(props.music.duration)}
                            </Typography>
                            : <Typography
                                onClick={() => setDurationType(!durationType)}
                                sx={{ cursor: 'pointer' }}>
                                - {formatDuration((props.music.duration) - (Math.ceil(props.music.durationValue)))}
                            </Typography>

                        : null
                    }
                </Box>


                {indexSong !== 0
                    ? <IconButton onClick={prev} >
                        <SkipPreviousIcon />
                    </IconButton>
                    : <IconButton disabled >
                        <SkipPreviousIcon />
                    </IconButton>
                }
                {props.music.active
                    ? <IconButton onClick={stop} >
                        <PauseIcon sx={{ fontSize: '3rem' }} />
                    </IconButton>
                    : <IconButton onClick={play} >
                        <PlayArrowIcon sx={{ fontSize: '3rem' }} />
                    </IconButton>
                }

                {indexSong !== props.music.arrMusicName.length - 1

                    ? <IconButton onClick={next} >
                        <SkipNextIcon />
                    </IconButton>
                    : <IconButton disabled >
                        <SkipNextIcon />
                    </IconButton>
                }

                <Stack spacing={2} direction="row" sx={{ ml: '35%', mr: '35%' }} alignItems="center">
                    {volumeValue !== 0
                        ? <IconButton onClick={volumeMinus}>
                            <VolumeDown color={'action'} />
                        </IconButton>
                        : <IconButton disabled>
                            <VolumeDown color={'action'} />
                        </IconButton>
                    }


                    <Slider aria-label="Volume" size='small' value={volumeValue} onChange={handleChange} />
                    {volumeValue !== 100
                        ? <IconButton onClick={volumePlus}>
                            <VolumeUp color={'action'} />
                        </IconButton>
                        : <IconButton disabled>
                            <VolumeUp color={'action'} />
                        </IconButton>
                    }

                </Stack>

            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                {
                    props.music.arrMusicName.map((a, index) => (
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>

                            {!props.music.active && index === indexSong
                                ? <IconButton onClick={play} >
                                    <PlayArrowIcon sx={{ fontSize: '2rem' }} />
                                </IconButton>
                                : <IconButton onClick={stop} >
                                    <PauseIcon sx={{ fontSize: '2rem' }} />
                                </IconButton>
                            }

                            <Typography key={index}>{a.name}</Typography>
                        </Box>
                    ))
                }
            </Box>

        </Container>
    )
}

let mapStateToProps = (state) => {
    return {
        music: state.musicData
    }
}

export default connect(mapStateToProps, { setActivTreck, setDurationValue, setActive, setDuration })(Music)
