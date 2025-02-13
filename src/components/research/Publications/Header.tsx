import React from "react";
import { Typography, Grid, IconButton, Menu, MenuItem,Avatar,Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import PrintOutlinedIcon from "@mui/icons-material/PrintOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Triangle from "./Triangle"; // Import the Triangle component
import XIcon from "@mui/icons-material/X";
import { useTranslations } from "next-intl";
import { useAppSelector } from "@/lib/hooks";
const useStyles = makeStyles({
  subtitle: {
    color: "#476B87",
    fontFamily: "Almarai",

  },
  iconWithText: {
    paddingRight: '14px',
    paddingTop: '0px', // Default value for small screens
    display: "flex",
    alignItems: "center",
    gap: "5px",
    position: "relative", // Ensure the position is relative for the arrow to be positioned absolutely
    '@media (min-width: 960px)': { // Apply styles for screens medium and up
      paddingTop: '0px !important',
    },
  },
  active: {
    border: "2px solid #476B87", // Add border for the active state
    borderRadius: "4px",
    "& .MuiTypography-root": {
      color: "#476B87", // Change text color for active state
    },
    "& .MuiSvgIcon-root": {
      color: "#476B87", // Change icon color for active state
    },
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
    top: "10px",
    "& .MuiPaper-root": {
      position: "relative",
    },
  },
  avatarContainer: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginRight: "15px", // Space between avatars and text
  },
  textContainer: {
    display: "flex",
    flexDirection: "column",
  },
  title: {
    fontFamily: "Almarai",
  },
});

const Header: React.FC = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [activeIcon, setActiveIcon] = React.useState<string | null>(null);
  const t = useTranslations("share");

  const pathAfterSlash = useAppSelector((state) => state.path.pathAfterSlash);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>, iconName: string) => {
    setAnchorEl(event.currentTarget);
    setActiveIcon(iconName);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setActiveIcon(null);
  };

  return (
    <header>
      <Grid container spacing={2} sx={{ direction: pathAfterSlash === "ar" ? "rtl" : "ltr" }}>
      <Grid item xs={12} md={9}>
          <Typography variant="h4" className={classes.title}>
          {t('OLI')}

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
               <Grid item xs={12} md={9} display='flex'>
            <Box className={classes.avatarContainer}>
              <Avatar src='../../../../public/assets/images/nat.png' />
              <Avatar src='../../../../public/assets/images/nat.png'  />
            </Box>
            <Box className={classes.textContainer}>
              <Typography variant="subtitle1" className={classes.subtitle}>
              {t('By Bilal El Etemmy & Rana Mohamed')}

                
              </Typography>
              <Typography variant="body2"className={classes.title}>
              {t('25 June 2024')}

                </Typography>
            </Box>
          </Grid>
          <Grid container justifyContent="flex-end" spacing={2}>
            <Grid item className={`${classes.iconWithText} ${activeIcon === 'share' ? classes.active : ''}`}>
              <IconButton onClick={(e) => handleClick(e, 'share')}>
                <ShareOutlinedIcon />
              </IconButton>
              <div className={classes.shareText}>
                <Typography variant="body2" className={classes.title}>
                {t('share')}
                </Typography>
              </div>
              {open && activeIcon === 'share' && <Triangle color="#476B8733" />} {/* Add Triangle conditionally */}
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl) && activeIcon === 'share'}
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
                  <XIcon />
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
            <Grid item className={`${classes.iconWithText} ${activeIcon === 'print' ? classes.active : ''}`}>
              <IconButton onClick={() => setActiveIcon('print')}>
                <PrintOutlinedIcon />
              </IconButton>
              <Typography variant="body2" className={classes.title}>
              {t('Print')}
              </Typography>
            </Grid>
            <Grid item className={`${classes.iconWithText} ${activeIcon === 'download' ? classes.active : ''}`}>
              <IconButton onClick={() => setActiveIcon('download')}>
                <DownloadOutlinedIcon />
              </IconButton>
              <Typography variant="body2" className={classes.title}>
                
              {t('Download')}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </header>
  );
};

export default Header;
