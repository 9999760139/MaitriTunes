import {
    Box, Typography,
    useMediaQuery,
    useTheme
} from '@mui/material'
import React from 'react'

export default function Header(props) {
    // console.log(props);
    // console.log(props.header.heading);
    // console.log(props.header.btntext);
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <div>
            <hr />
            {matches ?
                (<Box sx={{ display: "flex", justifyContent: "center" }}>
                    <Typography variant="h5" >{props.header.heading} </Typography>
                </Box>
                )
                :
                (
                    <Box className="main_heading">
                        <Typography variant="h5" >{props.header.heading}</Typography>
                        <Typography variant="h5" >{props.btntext}</Typography>
                    </Box>
                )
            }
            <hr />
        </div>
    )
}
