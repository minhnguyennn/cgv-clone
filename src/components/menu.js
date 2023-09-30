import React from "react";
import {
   AppBar,
   Toolbar,
   Typography,
   Button,
   Menu,
   MenuItem,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function NowShowing() {
   const navigate = useNavigate();
   const [anchorEl, setAnchorEl] = React.useState(null);
   const [anchorE2, setAnchorE2] = React.useState(null);
   const openFilm = Boolean(anchorEl);
   const openTheater = Boolean(anchorE2);
   const handleClickFilm = (event) => {
      setAnchorEl(event.currentTarget);
   };
   const handleClickTheater = (event) => {
      setAnchorE2(event.currentTarget);
   };
   const handleCloseTheater = () => {
      setAnchorE2(null);
   };
   const handleCloseFilm = () => {
      setAnchorEl(null);
   };
   return (
      <AppBar position="static">
         <Toolbar>
            <Typography variant="h6" component="div">
               Logo
            </Typography>
            <Button
               id="basic-button"
               aria-controls={openFilm ? "basic-menu" : undefined}
               aria-haspopup="true"
               aria-expanded={openFilm ? "true" : undefined}
               onClick={handleClickFilm}
               sx={{
                  color: "white",
                  fontWeight: "700",
                  fontSize: "20px",
               }}
            >
               Phim
            </Button>
            <Menu
               id="basic-menu"
               anchorEl={anchorEl}
               open={openFilm}
               onClose={handleCloseFilm}
               MenuListProps={{
                  "aria-labelledby": "basic-button",
               }}
            >
               <MenuItem>
                  <a href="">Phim đang chiếu</a>
               </MenuItem>
               <MenuItem>
                  <a href="">Phim sắp chiếu</a>
               </MenuItem>
            </Menu>

            <Button
               color="inherit"
               id="basic-button"
               aria-controls={openTheater ? "basic-menu-2" : undefined}
               aria-haspopup="true"
               aria-expanded={openTheater ? "true" : undefined}
               onClick={handleClickTheater}
            >
               Rạp CGV
            </Button>
            <Menu
               id="basic-menu-2"
               anchorEl={anchorE2}
               open={openTheater}
               onClose={handleCloseTheater}
               MenuListProps={{
                  "aria-labelledby": "basic-button",
               }}
            >
               <MenuItem>
                  <a href="">Rap đang chiếu</a>
               </MenuItem>
               <MenuItem>
                  <a href="">Rap sắp chiếu</a>
               </MenuItem>
            </Menu>
            <Button color="inherit">Thành viên</Button>
            <Button color="inherit">Cultureplex</Button>
            <Button color="inherit">Tuyển dụng</Button>
         </Toolbar>
      </AppBar>
   );
}
