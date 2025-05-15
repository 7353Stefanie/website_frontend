import { useContext } from 'react';
import React  from 'react';
import PersonIcon from '@mui/icons-material/Person';
import SearchIcon from '@mui/icons-material/Search';
import  {AuthContext } from '../theme/authContext';
import LogoutIcon from '@mui/icons-material/Logout';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Divider from '@mui/material/Divider';
import PushPinIcon from '@mui/icons-material/PushPin';
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';

import { AppBar, Box, Toolbar, Button,ListItemText, Drawer, ListItemIcon, List, ListItem,ListItemButton ,IconButton} from "@mui/material";
import { SearchIconWrapper, StyledInputBase, SearchContainer } from '../theme/theme';

export default function Header() {

      const navigate = useNavigate();
      const [open, setOpen] = React.useState(false);
      const [pinned, setPinned] = React.useState(false);
        const auth = useContext(AuthContext);
     // const [isLoggedIn, setIsLoggedIn] = React.useState(false);
      //const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("isLoggedIn") === "true");



      const handleDrawerOpen = () => {
        setOpen(true);
      };

      const handleDrawerClose = () => {
        setOpen(false);
      };

      const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
      };

        const handlePinToggle = () => {
          setPinned(!pinned);
          setOpen(true); // Wenn gepinnt, Drawer soll offen bleiben
        };


   const DrawerList = (
      <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
        <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    );




  return (

    <div>
     <Box sx={{ flexGrow: 1 }}>

        <AppBar position="static">
          <Toolbar sx={{ backgroundColor: '#3d2d31' }}>

        <div>

             <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={[
                          {
                            mr: 2,
                          },
                          open && { display: 'none' },
                        ]}
                      >
                      <MenuIcon />
             </IconButton>
              <Drawer open={open} onClose={toggleDrawer(false)}>
                {DrawerList}
              </Drawer>
              <IconButton color="inherit" onClick={handlePinToggle}>
                          {pinned ? <PushPinIcon /> : <PushPinOutlinedIcon />}
              </IconButton>
            </div>

            <SearchContainer>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
              />
            </SearchContainer>

                              { auth?.infos.benutzername !== "" &&  auth?.isLoggedIn ?
                                  (
                                                  <div>
                                                  <button onClick={() =>{console.log("dropdown-menu- zum benutzerbereich, Logout");
                                                      }}>  Wilkommen { auth?.infos.benutzername}!
                                                   </button>
                                                   <Button sx={{ backgroundColor: '#34262a' }}
                                                                                                          variant="contained" endIcon={<LogoutIcon />}
                                                                                                           onClick={() => {auth?.logout()}}>
                                                                                                 </Button></div>

                                  )
                                 :(
                                     <Button sx={{ backgroundColor: '#34262a' }}
                                              variant="contained" endIcon={<PersonIcon />}
                                               onClick={() => {navigate('/login'); }}>
                                     </Button>

                               )}

          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};
