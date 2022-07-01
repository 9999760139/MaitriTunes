import React, { useState } from 'react';
import './Navbar.css';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from "react-router-dom";
import {
    ListItem, ListItemIcon, ListItemText, List,
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    // Button, Menu,
    // MenuItem,
    useMediaQuery,
    useTheme,
    Badge
} from '@mui/material';
import { Box } from '@mui/system';
import DrawerComponent from './Drawer';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';


const Navbar = ({ history }) => {
    // const [anchorEl, setAnchorEl] = useState(null);
    const [openDrawer, setOpenDrawer] = useState(false);


    // const openMenu = Boolean(anchorEl);


    // const getColor=(curr) =>
    // {
    //     if (history.location.pathname===curr)
    //     {
    //         return "#1B98F5"
    //     }
    // }
   

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <div className="appbar">
            <AppBar elevation={0} sx={{ bgcolor: "rgba(,0,0,0)", color: "black" }}>
                <Toolbar >
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            width: "100%",
                        }}
                        component='div'>
                        <Box>
                            {matches ?
                                (<Box sx={{
                                }}>
                                    <Box sx={{
                                        display: "flex",
                                        alignItems: "center",
                                    }}><IconButton onClick={() => setOpenDrawer(true)}>
                                            <MenuIcon /></IconButton>
                                        <Typography>MaitriTunes</Typography>
                                    </Box>
                                </Box>) : "𝓜𝓪𝓲𝓽𝓻𝓲 𝓣𝓾𝓷𝓮𝓼"
                            }
                        </Box>

                        {matches ? (<DrawerComponent openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />) : (<Box sx={{ display: "flex", alignItems: "center" }}>
                            <List className="link" sx={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                            }}>
                                <Link exact to="/home">
                                <ListItem button>
                                    <ListItemIcon>
                                        <ListItemText>
                                            Home
                                        </ListItemText>
                                    </ListItemIcon>
                                </ListItem>
                                </Link>
                                <ListItem button>
                                    <ListItemIcon>
                                        <ListItemText>
                                            About Us
                                        </ListItemText>
                                    </ListItemIcon>
                                </ListItem>
                                <ListItem button>
                                    <ListItemIcon>
                                        <ListItemText>
                                            Contact Us
                                        </ListItemText>
                                    </ListItemIcon>
                                </ListItem>
                                <Link exact to="/detailpage">
                                <ListItem button>
                                    <ListItemIcon>
                                        <ListItemText color="secondary">
                                            Detail
                                        </ListItemText>
                                    </ListItemIcon>
                                </ListItem>
                                </Link>
                            </List>
                        </Box>)}
                        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <IconButton>
                                <Badge color="secondary" badgeContent={0} color="primary"><PermContactCalendarIcon /></Badge>
                            </IconButton>
                            <IconButton>
                                <Badge color="secondary"  badgeContent={0} >
                                    <ShoppingCartIcon />
                                </Badge>
                            </IconButton>
                        </Box>
                    </Box>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navbar;