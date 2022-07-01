import { Button, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import './Subscribe.css'
import Grid from '@mui/material/Grid';


export default function Subscribe(props) {
    // console.log(props);
    return (
        <div className='subscribe_main'>
            <hr />
            <Box className="typography_div">
                <Typography variant="h6" >{props.subscribe.heading}</Typography>
                <Box className="para">
                    <Typography variant="subtitle2"> {props.subscribe.description}
                    </Typography>
                </Box>
            </Box>
            <Box className="btn_div">
                <Grid className="btn_grid" container  spacing={{ xs: 2, md: 10 }} columns={{ xs: 12, sm: 12, md: 12 }}>
                    <Grid item xs={12} sm={4} md={4} >
                        <Button className="sucscribe_btn" variant="contained" color="secondary">{props.subscribe.btntext1}</Button>
                    </Grid>
                    <Grid item xs={12} sm={4} md={4} >
                        <Button className="sucscribe_btn" variant="contained" color="secondary">{props.subscribe.btntext2}</Button>
                    </Grid>
                </Grid>
            </Box>
            <hr />
        </div >
    )
}
