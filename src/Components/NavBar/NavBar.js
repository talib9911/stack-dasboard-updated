import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import logo from "../../Assets/Images/logo.png";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import HomeIcon from "@mui/icons-material/Home";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import InventoryIcon from "@mui/icons-material/Inventory";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SellIcon from "@mui/icons-material/Sell";
import PeopleIcon from "@mui/icons-material/People";
import EmailIcon from "@mui/icons-material/Email";
import SettingsIcon from "@mui/icons-material/Settings";
import CategoryIcon from "@mui/icons-material/Category";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import SearchIcon from "@mui/icons-material/Search";
import SearchBox from "../SearchBox/SearchBox";
import Badge from '@mui/material/Badge';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Tooltip from '@mui/material/Tooltip';
import Avatar from '@mui/material/Avatar';
import Card1 from "../Card1/Card1";
import Charts from "../Charts/Charts";
import PieChart from "../Charts/PieChart";
import PiesChart from "../Charts/PieChart";

const drawerWidth = 240;

function NavBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);
  const navItems = [
    { text: "Dashboard", icon: <HomeIcon />, highlighted: true },
    { text: "Analytics", icon: <QueryStatsIcon /> },
    { text: "Products", icon: <CategoryIcon /> },
    { text: "Offers", icon: <SellIcon /> },
    { text: "Inventory", icon: <InventoryIcon /> },
    { text: "Orders", icon: <ShoppingCartIcon /> },
    { text: "Sales", icon: <QueryStatsIcon /> },
    { text: "Customer", icon: <PeopleIcon /> },
    { text: "Newsletter", icon: <EmailIcon /> },
    { text: "Settings", icon: <SettingsIcon /> },
  ];
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const drawer = (
    <div>
      <Toolbar
        sx={{ bgcolor: "#d4d9d6", pb: "13px", borderRight: "2px solid gray" }}
      >
        <Box component="img" src={logo} sx={{ height: "70px", ml: "-19px" }} />
        <Typography
          variant="h6"
          sx={{
            fontSize: "18px",
            fontWeight: "bold",
            textAlign: "left",
            mt: "18px",
            lineHeight: "20px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          Pixel
          <Typography
            component="span"
            sx={{ fontSize: "12px", fontWeight: "bold" }}
          >
            Commerce
          </Typography>
        </Typography>
      </Toolbar>
      <Divider sx={{ bgcolor: "#b6bfba" }} />
      <List
        sx={{
          bgcolor: "#d4d9d6",
          pb: "13px",
          pt: "30px",
          px: "20px",
          height: "91.1vh",
          borderRight: "2px solid gray",
        }}
      >
        {navItems.map(({ text, icon, highlighted }) => (
          <ListItem key={text} disablePadding>
            <ListItemButton
              sx={highlighted ? { bgcolor: "#8bd9ad", borderRadius: 1 } : {}}
            >
              <ListItemIcon>{icon}</ListItemIcon>
              <ListItemText
                primary={
                  <Typography
                    sx={
                      highlighted
                        ? { fontWeight: "bold", fontSize: "15px" }
                        : {}
                    }
                  >
                    {text}
                  </Typography>
                }
              />

              {highlighted && <KeyboardArrowRightIcon />}
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  // Remove this const when copying and pasting into your project.
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          bgcolor: "#d4d9d6",
        }}
      >
        <Toolbar sx={{display:"flex",justifyContent:"space-around"}}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr:{xs:8, md:2},ml:{xs:3, md:2}, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ color: "gray", fontWeight: "600", ml:{xs:"0px", xl:"90px"} , display:{xs:"none", lg:"block"},
            fontSize: { lg: 20, xl: 30 }, 
            }}
          >
            Overview
          </Typography>
          <SearchBox />
          <Box sx={{display:{xs:"none", md:"flex", },ml:{xl:"120px"}, gap:"20px" 
            }}>
          <Box sx={{bgcolor:"white", display:"flex", flexShrink:1, justifyContent:"center",alignItems:"center", padding:"4px 10px", gap:"6px", borderRadius:"4px"}}>
            <CalendarMonthIcon sx={{ fontSize: 30, color: "black", fill:"gray", width:{md:"20px",lg:"26px"} }} />
            <Typography variant="H4" sx={{color:"gray", fontSize:{md:"1vw"}, whiteSpace:"nowrap"}}>30 May</Typography>
          </Box>
          <Badge badgeContent={17} color="error" sx={{bgcolor:"white",padding:"7px 10px", borderRadius:"4px"}}>
                <NotificationsIcon sx={{fill:"gray",width:{md:"20px",lg:"26px"} }}/>
              </Badge>
              <Box sx={{bgcolor:"white", display:"flex", justifyContent:"center",alignItems:"center", padding:"4px 10px", gap:"6px", borderRadius:"4px"}}>
            <ChatBubbleIcon sx={{ fontSize: 30, color: "black", fill:"gray" }} />
          </Box>
          </Box>
          <Box sx={{ flexGrow: 0, mr:{xs:"40px"}, ml:{xs:"90px", sm:"12px",md:"30px", lg:"90px"},bgcolor:"white",borderRadius:"50px" }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src={logo}
               />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px', }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography sx={{ textAlign: 'center' }}>{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Typography sx={{ marginBottom: 2 }}>
          <Card1/>
          <Box display="grid" gap="20px" paddingLeft="16px" paddingRight="16px" sx={{display: "grid",
    gridTemplateColumns: {
      xs: "1fr",    
      md: " 1fr 1fr" 
    },}}>
          <Charts/>
          <PiesChart/>
          </Box>
        </Typography>
        <Typography sx={{ marginBottom: 2 }}>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est
          ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar
          elementum integer enim neque volutpat ac tincidunt. Ornare suspendisse
          sed nisi lacus sed viverra tellus. Purus sit amet volutpat consequat
          mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis
          risus sed vulputate odio. Morbi tincidunt ornare massa eget egestas
          purus viverra accumsan in. In hendrerit gravida rutrum quisque non
          tellus orci ac. Pellentesque nec nam aliquam sem et tortor. Habitant
          morbi tristique senectus et. Adipiscing elit duis tristique
          sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
          eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
          posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography>
      </Box>
    </Box>
  );
}

NavBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * Remove this when copying and pasting into your project.
   */
  window: PropTypes.func,
};

export default NavBar;
