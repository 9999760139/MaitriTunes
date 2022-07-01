import React from 'react'
import './Music.css';
import Typography from '@mui/material/Typography';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import Grid from '@mui/material/Grid';
import ButtonBase from '@mui/material/ButtonBase';
import Paper from '@mui/material/Paper';
import { Box } from '@mui/system';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import GoogleIcon from '@mui/icons-material/Google';
import {
    useMediaQuery,
    useTheme,
} from '@mui/material';
import PlayCircleOutlineOutlinedIcon from '@mui/icons-material/PlayCircleOutlineOutlined';
import Forward10OutlinedIcon from '@mui/icons-material/Forward10Outlined';
import Replay10OutlinedIcon from '@mui/icons-material/Replay10Outlined';
import SettingsBackupRestoreIcon from '@mui/icons-material/SettingsBackupRestore';
import DownloadForOfflineOutlinedIcon from '@mui/icons-material/DownloadForOfflineOutlined';
import IconButton from '@mui/material/IconButton';
import Audio from './Audio';
import { AudioPlayer } from './AudioPlayer';



export default function Music(props) {

    // console.log(props);

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down("sm"));
    return (
        <div className="music">
            <Paper className="paper" sx={{ boxShadow: "none" }}>
                <Grid className="card" container spacing={0} columns={{ sm: 12, md: 12, lg: 12 }}>
                    <Grid item xs={12} sm={4} md={4} >
                        <Box>
                            {matches ? (
                                <ButtonBase className="buttonbase_phone">
                                    <img alt="complex" src={props.music.img_path} />
                                </ButtonBase>
                            )
                                :
                                (<ButtonBase> <Box button className="buttonbase">
                                    <img alt="complex" src={props.music.img_path} />
                                </Box></ButtonBase>)
                            }
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={8} md={8} container>
                        <Grid item xs container direction="row" columnspacing={1}>
                            <Grid item xs>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between' }} >
                                    <Typography gutterBottom variant="subtitle1" sx={{ my: "auto", display: "flex", height: "1", color: "text.secondary" }} component="div">
                                        <HorizontalRuleIcon sx={{ my: "auto", alignSelf: "center" }} /> {props.music.name}
                                    </Typography>
                                    <Typography sx={{ my: "auto", cursor: 'pointer' }} variant="body2" color="text.secondary">
                                        13 dec <FiberManualRecordIcon style={{ fontSize: 8 }} /> 30min
                                    </Typography>
                                </Box>
                                <Typography variant="h4" gutterBottom>
                                    {props.music.heading}
                                </Typography>
                                <Typography variant="subtitle2" color="text.secondary">
                                    {props.music.description}
                                </Typography>
                            </Grid>
                        </Grid>

                    </Grid>
                </Grid>
            </Paper>
            <AudioPlayer />
            {matches ? (
                <Box sx={{ my: 5 }}>
                    <hr />

                    <Grid item xs={12} xs={{ display: "flex", justifySelf: "flex-end" }}>
                        <Typography variant="h4" >{props.music.descript.heading}</Typography>
                        <Typography variant="subtitle2">
                            {props.music.descript.description}
                        </Typography>
                    </Grid>
                    {/* {Array.from(Array(6)).map((_, index) => ( */}
                    <Grid item xs={12} sx={{ mt: 2, display: "flex", justifyContent: "space-around" }}>
                        <FacebookIcon />
                        <LinkedInIcon />
                        <TwitterIcon />
                        <InstagramIcon />
                        <GoogleIcon />
                        {/* ))} */}
                    </Grid>
                </Box>
            )
                :
                (<Box sx={{ my: 5 }}>
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 12, sm: 12, md: 12 }}>
                        {/* {Array.from(Array(6)).map((_, index) => ( */}
                        <Grid item xs={12} sm={3} md={3} sx={{ display: "flex", justifyContent: "space-around" }}>
                            <FacebookIcon />
                            <LinkedInIcon />
                            <TwitterIcon />
                            <InstagramIcon />
                            <GoogleIcon />
                        </Grid>
                        <Grid item sm={0} md={1}>
                            <Box className="vertcle_line" color="text.secondary" />
                        </Grid>
                        <Grid item xs={12} sm={8} md={8} xs={{ display: "flex", justifySelf: "flex-end" }}>
                            <Typography variant="h4" >{props.music.descript.heading}</Typography>
                            <Typography variant="subtitle2">
                                {props.music.descript.description}
                            </Typography>
                        </Grid>
                        {/* ))} */}
                    </Grid>
                </Box>)
            }

        </div>
    )
}
