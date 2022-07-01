import React from 'react'
import './TheLatestArticles.css';
import Typography from '@mui/material/Typography';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import Grid from '@mui/material/Grid';
import ButtonBase from '@mui/material/ButtonBase';
import Paper from '@mui/material/Paper';
import { 
    useMediaQuery,
    useTheme, } from '@mui/material';
import { Box } from '@mui/system';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import Header from './Header';


export default function TheLatestArticles(props) {
    
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down("sm"));
    return (
        <div>
            {/* <hr />
            <div className="main_heading">
                <Typography variant="h6" >THE LATEST ARTICLES</Typography>
                <Typography variant="h6" >View all</Typography>
            </div>
            <hr /> */}
            <Header header={props.latestarticle.header} />
            {props.latestarticle.content.map((index) => (
                <Paper className="paper" sx={{ boxShadow: "none" }}>
                    <Grid className="card" container spacing={0} columns={{ sm: 12, md: 12, lg: 12 }}>
                        <Grid className="grid_img" item xs={12} sm={3} md={4} >
                            <Box>
                                {matches ? (
                            <ButtonBase className="buttonbase_phone">
                                <img alt="complex" src={index.img_path} />
                            </ButtonBase>
                            ) 
                             :
                              (<Box button className="buttonbase">
                                 <img alt="complex" src={index.img_path} />
                             </Box>)
                            }
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={9} md={8} container>
                            <Grid item xs container direction="column" columnspacing={1}>
                                <Grid item xs>
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }} >
                                        <Typography gutterBottom variant="subtitle1" sx={{ my: "auto", display: "flex", height: "1", color: "text.secondary" }} component="div">
                                            <HorizontalRuleIcon sx={{ my: "auto", alignSelf: "center" }} /> By Shekhar Sir
                                        </Typography>
                                        <Typography sx={{ my: "auto", cursor: 'pointer' }} variant="body2" color="text.secondary">
                                            13 dec <FiberManualRecordIcon style={{ fontSize: 8 }} /> 30min
                                        </Typography>
                                    </Box>
                                    <Typography variant="h6" gutterBottom>
                                        {index.heading}
                                    </Typography>
                                    <Typography variant="subtitle2" color="text.secondary">
                                        {index.description}
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    {/* <Typography sx={{ my: "auto", cursor: 'pointer' }} variant="body2" color="text.secondary">
                                        13 dec <FiberManualRecordIcon style={{ fontSize: 8 }} /> 30min
                                    </Typography> */}
                                </Grid>
                            </Grid>

                        </Grid>
                    </Grid>
                </Paper>
            ))}
        </div >
    )
}
