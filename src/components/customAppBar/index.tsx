import {Menu} from "react-admin";
//
import {AppBar, Box, Toolbar, IconButton, Typography} from "@mui/material";
//
import PeopleIcon from "@mui/icons-material/People";
import PostAddIcon from "@mui/icons-material/PostAdd";


const CustomAppBar = () => {
  return (
    <Box sx={{flexGrow: 1}}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
            Logo
          </Typography>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
          >
            <Menu.Item
              className="menu-item"
              to={{
                pathname: "/users",
              }}
              leftIcon={<PeopleIcon />}
            />
          </IconButton>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
          >
            <Menu.Item
              className="menu-item"
              to={{
                pathname: "/posts",
              }}
              leftIcon={<PostAddIcon />}
            />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default CustomAppBar;
