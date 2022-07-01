import React from 'react'
import './BestSeller.css';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import Grid from '@mui/material/Grid';
import ArrowRightAltSharpIcon from '@mui/icons-material/ArrowRightAltSharp';
import Header from './Header';


export default function BestSeller(props) {
    return (
        <div className='"main'>
                <Header header={props.bestseller.header} />
            <Grid container spacing={{ xs: 2, md: 10 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {props.bestseller.content.map((index) => (
                    <Grid item xs={2} sm={4} md={3} >
                        <Card className="seller_card" sx={{boxShadow:"none"}}>
                            {/* <CardActionArea> */}
                                <CardMedia
                                    component="img"
                                    height="190"
                                    image={index.imgpath}
                                />
                                {/* <CardContent> */}
                                    <Typography sx={{my:1}} gutterBottom variant="h5" component="div">
                                        {index.heading}
                                    </Typography>
                                    <Typography  sx={{my:1}}  variant="body2" color="text.secondary">
                                        {index.description}
                                    </Typography>
                                {/* </CardContent> */}
                            {/* </CardActionArea> */}
                            {/* <CardActions > */}
                                <Button className='btn' variant="outlined"  color="secondary" >
                                    {index.btntext}
                                </Button>
                            {/* </CardActions> */}
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </div>
    )
}
