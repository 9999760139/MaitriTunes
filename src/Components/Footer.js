import * as React from 'react';
import './Footer.css';
// import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material'

import TextField from '@mui/material/TextField';


export default function Footer(props) {
    // console.log(props);
    return (
        <div className='main'>
            <Box sx={{ width: '100%', }} className="footer_start">
                <Grid container rowSpacing={1} columnSpacing={{ xs: "1", sm: "2", md: "3", lg: "1", }} >
                    <Grid item xs={12} sm={12} md={6} lg={6}  >
                        <Grid item xs={12} sm={12} md={12} lg={8}  >
                            <h1 >Send Me News</h1>
                        </Grid>
                        <Grid item xs={12} sm={12} md={8} lg={8}  >
                            <TextField className="email" id="filled-basic" label="Enter your email" variant="filled" color='secondary' />
                        </Grid>
                    </Grid>
                    {props.footer.map((index) => (
                        <Grid className="link" item xs={4} sm={4} md={2} lg={2}>
                            <Box>
                                <Typography variant="subtitle1">{index.heading}</Typography><br />
                                <Typography variant="subtitle2">{index.links1}</Typography><br />
                                <Typography variant="subtitle2">{index.links2}</Typography><br />
                                <Typography variant="subtitle2">{index.links3}</Typography><br />
                                <Typography variant="subtitle2">{index.links4}</Typography>
                            </Box>
                        </Grid>
                    ))}

                </Grid>
            </Box>
            <Box sx={{ py: 2 }} className="footer_end" >
                <Box className='allrights'>
                    <Typography variant="h5" color="text.secondary">
                        𝓜𝓪𝓲𝓽𝓻𝓲 𝓣𝓾𝓷𝓮𝓼
                    </Typography>
                    <Typography variant="subtitle2" color="text.secondary">All Right Reserved</Typography>
                </Box>
                <Typography variant="subtitle2" className="andcopy" color="text.secondary">
                    &copy;2021 Maitri Tunes All Right.
                </Typography>
            </Box>
        </div >
    );
}
