import React from 'react'
import './Banner1.css'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Typography,useMediaQuery,useTheme } from '@mui/material';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import Banner from './Banner';


export default function Banner1() {

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <Box className="banner1_main">
            {matches ? (<Banner />) : (
                <Grid className='grid_main' container columnSpacing={5} columns={{ sm: 12, md: 12, lg: 12 }}>
                    <Grid className="grid_1" item sm={8} md={8} lg={8}>
                        <Box className="box_1">
                            <img src="https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60" alt='' height="100%" width="100%" />
                        </Box>
                        <Box className='box_2'>
                            <Box sx={{ display: "flex", justifyContent: "space-between", }}>
                                <Typography sx={{ my: "auto", cursor: 'pointer' }} variant="subtitle2" color="text.secondary">
                                    13 dec <FiberManualRecordIcon style={{ fontSize: 8 }} /> 30mi
                                </Typography>
                                <Box sx={{ display: "flex", my: "auto", cursor: 'pointer' }} >
                                    <HorizontalRuleIcon sx={{ width: "20px" }} />
                                    <Typography variant="subtitle2" color="text.secondary" sx={{ py: "auto", my: "auto" }}>
                                        Shekhar Sir
                                    </Typography>
                                </Box>
                            </Box>
                            <Typography variant="h6" > what desiners , Photoshophers k dsifhsjf jsdjfds0 ekjfsd f this iswhat desiners , Photoshophb</Typography>
                            <Typography variant="subtitle2" > what desiners , Photoshophers k dsifhsjf jsdjfds0 ekjfsd f this is b</Typography>
                        </Box>
                    </Grid>
                    <Grid className='grid_2' item sm={4} md={4} lg={4}>
                        <Grid className="grid_5" container spacing={4} columns={{ sm: 12, md: 12, lg: 12 }}>
                            <Grid className="grid_3" item sm={12} md={12} lg={12}>
                                <Box className="box_3">
                                    <img src="https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60" alt='' height="100%" width="100%" />
                                </Box>
                                <Box className="box_4"><Box sx={{ display: "flex", justifyContent: "space-between", }}>
                                    <Typography sx={{ my: "auto", cursor: 'pointer' }} variant="subtitle2" color="text.secondary">
                                        13 dec <FiberManualRecordIcon style={{ fontSize: 8 }} /> 30mi
                                    </Typography>
                                    <Box sx={{ display: "flex", my: "auto", cursor: 'pointer' }} >
                                        <HorizontalRuleIcon sx={{ width: "20px" }} />
                                        <Typography variant="subtitle2" color="text.secondary" sx={{ py: "auto", my: "auto" }}>
                                            Shekhar Sir
                                        </Typography>
                                    </Box>
                                </Box>
                                    <Typography variant="h6" > what desinersfds0 ek dsifhsjf jsdjfds0 ekjfsd fsdhf this is b </Typography>
                                    <Typography variant="subtitle2" > what desiners , Photoshophers k dsifhsjf jsdjfdsb</Typography>
                                </Box>
                            </Grid>
                            <Grid className="grid_4" item sm={12} md={12} lg={12}>
                                <Box className="box_3">
                                    <img src="https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60" alt='' height="100%" width="100%" />
                                </Box>
                                <Box className='box_4'>
                                    <Box sx={{ display: "flex", justifyContent: "space-between", }}>
                                        <Typography sx={{ my: "auto", cursor: 'pointer' }} variant="subtitle2" color="text.secondary">
                                            13 dec <FiberManualRecordIcon style={{ fontSize: 8 }} /> 30mi
                                        </Typography>
                                        <Box sx={{ display: "flex", my: "auto", cursor: 'pointer' }} >
                                            <HorizontalRuleIcon sx={{ width: "20px" }} />
                                            <Typography variant="subtitle2" color="text.secondary" sx={{ py: "auto", my: "auto" }}>
                                                Shekhar Sir
                                            </Typography>
                                        </Box>
                                    </Box>
                                    <Typography variant="h6" > what desiner k dsifhsjf jsdjfds0 ekjfsd fsdhf this is </Typography>
                                    <Typography variant="subtitle2" > what desiners , Photoshophers k dsifhsjf jsdjfds0 ekjfsd f this is b</Typography>
                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            )}
        </Box>
    )
}
