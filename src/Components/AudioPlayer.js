import React, { useState, useRef, useEffect } from 'react'
import './AudioPlayer.css'
import { Box } from '@mui/system';
import IconButton from '@mui/material/IconButton';
import PlayCircleOutlineOutlinedIcon from '@mui/icons-material/PlayCircleOutlineOutlined';
import Forward10OutlinedIcon from '@mui/icons-material/Forward10Outlined';
import Replay10OutlinedIcon from '@mui/icons-material/Replay10Outlined';
import SettingsBackupRestoreIcon from '@mui/icons-material/SettingsBackupRestore';
import DownloadForOfflineOutlinedIcon from '@mui/icons-material/DownloadForOfflineOutlined';
import LinearProgress from '@mui/material/LinearProgress';
import PauseCircleIcon from '@mui/icons-material/PauseCircle';

const AudioPlayer = () => {
    // state
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);

    // references
    const audioPlayer = useRef();   // reference our audio component
    const progressBar = useRef();   // reference our progress bar
    const animationRef = useRef();  // reference the animation

    useEffect(() => {
        const seconds = Math.floor(audioPlayer.current.duration);
        setDuration(seconds);
        progressBar.current.max = seconds;
    }, [audioPlayer?.current?.loadedmetadata, audioPlayer?.current?.readyState]);

    const calculateTime = (secs) => {
        const minutes = Math.floor(secs / 60);
        const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
        const seconds = Math.floor(secs % 60);
        const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
        return `${returnedMinutes}:${returnedSeconds}`; 
    }

    const togglePlayPause = () => {
        const prevValue = isPlaying;
        setIsPlaying(!prevValue);
        if (!prevValue) {
            audioPlayer.current.play();
            animationRef.current = requestAnimationFrame(whilePlaying)
        } else {
            audioPlayer.current.pause();
            cancelAnimationFrame(animationRef.current);
        }
    }

    const whilePlaying = () => {
        progressBar.current.value = audioPlayer.current.currentTime;
        changePlayerCurrentTime();
        animationRef.current = requestAnimationFrame(whilePlaying);
    }

    const changeRange = () => {
        audioPlayer.current.currentTime = progressBar.current.value;
        changePlayerCurrentTime();
    }

    const changePlayerCurrentTime = () => { 
        progressBar.current.style.setProperty('--seek-before-width', `${progressBar.current.value / duration * 100}%`)
        setCurrentTime(progressBar.current.value);
    }

    const replay = () => {
        // timeTravel(Number(progressBar.current.value) = 0);
        progressBar.current.value = Number(progressBar.current.value = 0);
        changeRange();
    }

    const backTen = () => {
        timeTravel(Number(progressBar.current.value) - 10);
        // progressBar.current.value = Number(progressBar.current.value - 10);
        // changeRange();
    }

    const forwardTen = () => {
        timeTravel(Number(progressBar.current.value) + 10);
        // progressBar.current.value = Number(progressBar.current.value + 10);
        // changeRange();
    }
    const timeTravel = (newTime) => {
        progressBar.current.value = newTime;
        changeRange();
      }

    return (
        <Box className="audioPlayer">
            <audio ref={audioPlayer} src="https://www.movedbylove.org/projects/tunes/audio/281.mp3" preload="metadata"></audio>

            <Box className="icons_player">
                <Box>
                    <IconButton className="playPause" onClick={togglePlayPause} color="secondary" >{isPlaying ? <PauseCircleIcon sx={{ fontSize: "40px", mr: 2 }} className="play_icon" /> : <PlayCircleOutlineOutlinedIcon sx={{ fontSize: "40px", mr: 2 }} className="play_icon" />}</IconButton>
                    <IconButton color="secondary"  >
                        <SettingsBackupRestoreIcon onClick={replay} />
                    </IconButton>
                    <IconButton className="forwardBackward" color="secondary" onClick={backTen} ><Replay10OutlinedIcon /> </IconButton>

                    <IconButton className="forwardBackward" color="secondary" onClick={forwardTen}  ><Forward10OutlinedIcon /> </IconButton>
                </Box>
                <Box className='download_icon'>
                    <IconButton className="downloadicon" color="secondary" > <DownloadForOfflineOutlinedIcon /> </IconButton>
                </Box>
            </Box>
            <Box>
                <input type="range" className="progressBar" defaultValue="0" ref={progressBar} onChange={changeRange} />
                {/* <LinearProgress ref={progressBar}  color="success"  className="progressBar" defaultValue="0" onChange={changeRange} /> */}
            </Box>
            <Box className="timeing">
                {/* current time */}
                <Box className="currentTime">{calculateTime(currentTime)}</Box>
                {/* progress bar */}
                {/* duration */}
                <Box className="duration">{(duration && !isNaN(duration)) && calculateTime(duration)}</Box>
            </Box>

        </Box>
    )
}

export { AudioPlayer }
