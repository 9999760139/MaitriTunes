import React from 'react'
import './Trending.css'
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Grid from '@mui/material/Grid';
import { Box } from '@mui/system';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import ArrowRightAltSharpIcon from '@mui/icons-material/ArrowRightAltSharp';
import Header from './Header';


export default function Trending(props) {
    // console.log(props);
    return (
        <div className='trending'>
            <Header header={props.trending.header} />
            <div className="arrow_trending">
                <span>
                    <ArrowRightAltSharpIcon sx={{ fontSize: "50px" }} />
                </span>
                <span>
                    <ArrowRightAltSharpIcon sx={{ fontSize: "50px" }} />
                </span>
            </div>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 12, sm: 12, md: 12 }}>
                {props.trending.content.map((index) => (
                    <Grid item xs={12} sm={4} md={4} key={index}>
                        <Card sx={{ maxWidth: 345, boxShadow: "none" }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="240"
                                    image={index.imgpath}
                                    alt="green iguana"
                                />
                            </CardActionArea>
                            {/* <CardContent> */}
                            <Box sx={{ display: "flex", justifyContent: "space-between", }}>
                                <Typography sx={{ my: "auto", cursor: 'pointer' }} variant="subtitle2" color="text.secondary">
                                    13 dec <FiberManualRecordIcon style={{ fontSize: 8 }} /> 30mi
                                </Typography>
                                <Box sx={{ display: "flex", my: "auto", cursor: 'pointer' }} >
                                    <HorizontalRuleIcon sx={{ width: "20px" }} />
                                    <Typography variant="subtitle2" color="text.secondary" sx={{ py: "auto", my: "auto" }}>
                                        {index.name}
                                    </Typography>
                                </Box>
                            </Box>
                            <Box className="trend_heading">                                              
                                <Typography gutterBottom variant="h6" sx={{fontWeight:"bold"}} component="div" >
                                    {index.heading}
                                </Typography>
                            </Box>

                            {/* <Typography variant="subtitile1" color="text.secondary">
                                        {index.description}
                                    </Typography> */}
                            {/* </CardContent> */}
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </div>
    )
}
