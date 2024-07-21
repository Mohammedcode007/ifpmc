// Header.tsx
import React from "react";
import { Typography, Grid, IconButton, Menu, MenuItem } from "@mui/material";
import { makeStyles } from "@mui/styles";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import PrintOutlinedIcon from "@mui/icons-material/PrintOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Triangle from "./Triangle"; // Import the Triangle component

const useStyles = makeStyles({
  subtitle: {
    color: "#476B87",
  },
  iconWithText: {
    display: "flex",
    alignItems: "center",
    gap: "5px",
    position: "relative", // Ensure the position is relative for the arrow to be positioned absolutely
  },
  container: {
    display: "flex",
    paddingTop: "50px",
    paddingBottom: "50px",
  },
  menuItem: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  shareText: {
    display: "flex",
    alignItems: "center",
    gap: "5px",
    position: "relative",
  },
  menu: {
    top: "30px",
    "& .MuiPaper-root": {
      position: "relative",
    },
  },
});

const Header: React.FC = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <header>
      <Grid container spacing={2}>
        <Grid item xs={12} md={9}>
          <Typography variant="h4">
            OLI framework and McDonald’s style
          </Typography>
        </Grid>

        <Grid
          item
          xs={12}
          md={9}
          className={classes.container}
          direction={{ xs: "column", md: "row" }}
          alignItems={{ xs: "flex-start", md: "center" }}
        >
          <Grid item xs={12} md={9}>
            <Typography variant="subtitle1" className={classes.subtitle}>
              By Bilal El Etemmy & Rana Mohamed
            </Typography>
            <Typography variant="body2">25 June 2024</Typography>
          </Grid>
          <Grid container justifyContent="flex-end" spacing={2}>
            <Grid item className={classes.iconWithText}>
              <IconButton onClick={handleClick}>
                <ShareOutlinedIcon />
              </IconButton>
              <div className={classes.shareText}>
                <Typography variant="body2">Share</Typography>
              </div>
              <Triangle color="#333" /> {/* Add Triangle here */}
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                className={classes.menu}
                PaperProps={{
                  style: {
                    maxHeight: 200,
                    width: "20ch",
                  },
                }}
              >
                <MenuItem onClick={handleClose} className={classes.menuItem}>
                  <TwitterIcon />
                  Share on Twitter
                </MenuItem>
                <MenuItem onClick={handleClose} className={classes.menuItem}>
                  <LinkedInIcon />
                  Share on LinkedIn
                </MenuItem>
                <MenuItem onClick={handleClose} className={classes.menuItem}>
                  <WhatsAppIcon />
                  Share on WhatsApp
                </MenuItem>
              </Menu>
            </Grid>
            <Grid item className={classes.iconWithText}>
              <IconButton>
                <PrintOutlinedIcon />
              </IconButton>
              <Typography variant="body2">Print</Typography>
            </Grid>
            <Grid item className={classes.iconWithText}>
              <IconButton>
                <DownloadOutlinedIcon />
              </IconButton>
              <Typography variant="body2">Download</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </header>
  );
};

export default Header;
