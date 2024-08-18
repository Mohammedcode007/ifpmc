import React, { useState } from "react";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Link,
} from "@mui/material";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import { makeStyles } from "@mui/styles";
import XIcon from "@mui/icons-material/X";
import { YouTube, LinkedIn } from "@mui/icons-material";
import { colors } from "@/utils/colors";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
  useMap,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import markerImage from "../../../public/assets/images/markir.png"; // تأكد من أن الصورة في المسار الصحيح

const useStyles = makeStyles((theme) => ({
  listItem: {
    paddingLeft: "0px",
    paddingTop: "0px",
  },
  logo: {
    marginBottom: 4,
  },
  listIcon: {
    minWidth: "30px",
  },
  socialMediaIconContainer: {
    display: "flex",
    gap: "8px",
    marginBottom: "8px",
  },
  socialMediaIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "20px",
    height: "20px",
    borderRadius: "10%",
    backgroundColor: colors.active,
    color: "black",
    "&:hover": {
      backgroundColor: "gray",
    },
  },
  container: {
    backgroundColor: "#fff",
    padding: "2rem",
    borderRadius: "8px",
  },
  title: {
    fontWeight: 600,
    marginBottom: "15px",
    fontFamily: "Almarai",
  },
  imageContainer: {
    marginTop: "1rem",
    display: "flex",
    justifyContent: "flex-start",
    width: "100%",
    height: "170px",
    position: "relative",
    "& img": {
      objectFit: "cover",
    },
  },
}));

const SocialMediaIcon: React.FC<{ icon: React.ElementType }> = ({
  icon: IconComponent,
}) => {
  const classes = useStyles();
  return (
    <Box className={classes.socialMediaIcon}>
      <IconComponent sx={{ color: "white", fontSize: "13px" }} />
    </Box>
  );
};

const LocationMap = ({
  onMapClick,
}: {
  onMapClick: (lat: number, lng: number) => void;
}) => {
  const map = useMap();
  useMapEvents({
    click(e) {
      const { lat, lng } = e.latlng;
      onMapClick(lat, lng);
      map.setView([lat, lng], map.getZoom()); // Center the map on the marker
    },
  });
  return null;
};

const ContactInformation = () => {
  const classes = useStyles();
  const [position, setPosition] = useState<{ lat: number; lng: number } | null>(
    null
  );
  const [mapLink, setMapLink] = useState<string>("");

  const handleMapClick = (lat: number, lng: number) => {
    setPosition({ lat, lng });
    const link = `https://www.openstreetmap.org/?mlat=${lat}&mlon=${lng}&zoom=13`;
    setMapLink(link);
    console.log(`Latitude: ${lat}, Longitude: ${lng}`);
    console.log(`Map Link: ${link}`);
  };

  return (
    <Box className={classes.container}>
      <Typography className={classes.title} variant="h6" gutterBottom>
        Contact Information
      </Typography>
      <List>
        <ListItem className={classes.listItem}>
          <ListItemIcon className={classes.listIcon}>
            <LocationOnOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Here is the location of IFPMC" />
        </ListItem>
        <ListItem className={classes.listItem}>
          <ListItemIcon className={classes.listIcon}>
            <PhoneOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Here is the Phone Number of IFPMC" />
        </ListItem>
        <ListItem className={classes.listItem}>
          <ListItemIcon className={classes.listIcon}>
            <EmailOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Here is the Email of IFPMC" />
        </ListItem>
      </List>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          marginTop: "1rem",
        }}
      >
        <Box className={classes.socialMediaIconContainer}>
          <Link href="#" color="inherit">
            <SocialMediaIcon icon={XIcon} />
          </Link>
          <Link href="#" color="inherit">
            <SocialMediaIcon icon={YouTube} />
          </Link>
          <Link href="#" color="inherit">
            <SocialMediaIcon icon={LinkedIn} />
          </Link>
        </Box>
      </Box>
      <Box className={classes.imageContainer}>
        <MapContainer
          center={[51.505, -0.09]}
          zoom={13}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='Map data © <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <LocationMap onMapClick={handleMapClick} />
          {position && (
            <Marker
              position={[position.lat, position.lng]}
              icon={L.icon({
                iconUrl: markerImage.src, // Ensure the image path is correct
                iconSize: [32, 32], // Size of the icon
                iconAnchor: [16, 32], // Anchor of the icon
                popupAnchor: [0, -32], // Popup anchor
              })}
            >
              <Popup>
                <span>
                  Lat: {position.lat}, Lng: {position.lng}
                </span>
              </Popup>
            </Marker>
          )}
        </MapContainer>
      </Box>
    </Box>
  );
};

export default ContactInformation;
