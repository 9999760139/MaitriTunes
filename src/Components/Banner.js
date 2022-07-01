import React from 'react'
import './Banner.css'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography';
import { Box, typography } from '@mui/system';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

export default function Banner() {
    return (
        <Box className="banne_main">
            <Box  className="img_box1">
                <img src="https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60" alt="/" width="100%" />
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
            </Box>
            <Box className="text_box">
                <Typography variant='subtitle1'> what desiners , Photoshophers k dsifhsjf jsdjfds0 ekjfsd f this iswhat desiners , Photoshoph</Typography>
            </Box>
            <hr />
            <div className="divbox" sx={{ display: "flex", my: "auto", cursor: 'pointer' }} >
                <Box button className="img_box2" >
                    <Box>
                        <img src="https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60" alt="/" height="100%" width="100%" />
                    </Box>
                    <Box sx={{ display: "flex", my: "auto", cursor: 'pointer' }} >
                        <HorizontalRuleIcon sx={{ width: "20px" }} />
                        <Typography variant="subtitle2" color="text.secondary" sx={{ py: "auto", my: "auto" }}>
                            Shekhar Sir
                        </Typography>
                    </Box>
                    <Typography variant="subtitle1"> what desiners , Photoshophers k dsifhsjf jsdjfds0 ekjfsd f this ihat</Typography>
                    <Typography sx={{ my: "auto", cursor: 'pointer' }} variant="subtitle2" color="text.secondary">
                        13 dec <FiberManualRecordIcon style={{ fontSize: 8 }} /> 30mi
                    </Typography>
                </Box>
                <Box button className="img_box3">
                    <Box>
                        <img src="https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60" alt="/" height="100%" width="100%" />
                        <Box sx={{ display: "flex", my: "auto", cursor: 'pointer' }} >
                            <HorizontalRuleIcon sx={{ width: "20px" }} />
                            <Typography variant="subtitle2" color="text.secondary" sx={{ py: "auto", my: "auto" }}>
                                Shekhar Sir
                            </Typography>
                        </Box>
                    </Box>
                    <Typography variant="subtitle1"> what desiners , Photoshophers k dsifhsjf jsdjfds0 ekjfsd f this iswhat desiners , Photoshophb</Typography>
                    <Typography sx={{ my: "auto", cursor: 'pointer' }} variant="subtitle2" color="text.secondary">
                        13 dec <FiberManualRecordIcon style={{ fontSize: 8 }} /> 30mi
                    </Typography>
                </Box>
            </div>
        </Box >
    )
}
