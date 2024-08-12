import React, { useState } from "react";
import {
  TextField,
  List,
  ListItem,
  Checkbox,
  FormControlLabel,
  Typography,
  Box,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { makeStyles } from "@mui/styles"; // Import makeStyles from @mui/styles

import ClearIcon from "@mui/icons-material/Clear";
import { useAppSelector } from "@/lib/hooks";
import { useTranslations } from "next-intl";

const useStyles = makeStyles({
  formLabelRoot: {
    color: "#476B87", // Example color
    fontFamily: "Source Sans Pro", // Setting font family
  },
  // title: {
  //   fontFamily: "Almarai",
  //   // fontFamily: "Source Sans Pro", // Setting font family

  // },
});

interface Item {
  id: number;
  label: string;
}

const Sidebar: React.FC = () => {
  const classes = useStyles();
  const t = useTranslations("Publications");
  const pathAfterSlash = useAppSelector((state) => state.path.pathAfterSlash);

  const [checkedItems, setCheckedItems] = useState<Record<number, boolean>>({});
  const [textFieldValue, setTextFieldValue] = useState<string>("");

  const items: Item[] = [
    { id: 11, label: t(`Investment`) },
    { id: 45, label: t("Private sectors") },
    { id: 77, label: t("Infrastructure") },
    { id: 88, label: t("Government") },
    { id: 11, label: t("Development") },
    { id: 17, label: t("Transparency") },
    { id: 88, label: t("Regional Policies") },
    { id: 47, label: t("Statistics") },
  ];

  const handleToggle = (item: Item) => () => {
    const newCheckedItems = {
      ...checkedItems,
      [item.id]: !checkedItems[item.id],
    };
    setCheckedItems(newCheckedItems);

    const checkedValues = items
      .filter((it) => newCheckedItems[it.id])
      .map((it) => it.label);
    setTextFieldValue(checkedValues.join(", "));
  };

  const handleClear = () => {
    setCheckedItems({});
    setTextFieldValue("");
  };

  return (
    <Box
      style={{ padding: "27px", width: "85%", backgroundColor: "#ffffff" }}
      sx={{ direction: pathAfterSlash === "ar" ? "rtl" : "ltr" }}
    >
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={2}
      >
        <Typography
          variant="h6"
          sx={{
            fontWeight: "bold",
            fontFamily:
              pathAfterSlash === "ar" ? '"Almarai"' : "Source Sans Pro",
          }}
        >
          {t(`Topics`)}
        </Typography>
        <Typography
          sx={{
            color: "#476B87",
            fontFamily:
              pathAfterSlash === "ar" ? '"Almarai"' : "Source Sans Pro",
          }}
          onClick={handleClear}
        >
          {t(`Clear`)}
        </Typography>
      </Box>
      <TextField
        label="Checked Items"
        variant="outlined"
        fullWidth
        value={textFieldValue}
        onChange={(e) => setTextFieldValue(e.target.value)}
        InputProps={{
          style: {
            color: "#476B87",
            height: "50px",
            textAlign: "center", // تحديد محاذاة النص إلى وسط
          },
          endAdornment: textFieldValue && (
            <InputAdornment position="end">
              <IconButton onClick={handleClear}>
                <ClearIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
        InputLabelProps={{
          classes: {
            root: classes.formLabelRoot, // Applying custom styles
          },
        }}
      />
      <Box
        sx={{ direction: pathAfterSlash === "ar" ? "rtl" : "ltr", gap: "8px" }}
      >
        <List>
          {items.map((item) => (
            <ListItem
              key={item.id}
              sx={{
                padding: 0,
                height: "30px",
                justifyContent: "space-between",
              }}
            >
              <FormControlLabel
                control={
                  <Checkbox
                    checked={checkedItems[item.id] || false}
                    onChange={handleToggle(item)}
                    name={item.label}
                    sx={{
                      color: "#476B87",
                      "&.Mui-checked": {
                        color: "#476B87",
                      },
                    }}
                  />
                }
                label={
                  <Typography
                    sx={{
                      fontWeight: 400,
                      fontSize: "18px",
                      color: "#476B87",
                      lineHeight: "22.63px",
                      fontFamily:
                        pathAfterSlash === "ar"
                          ? '"Almarai"'
                          : "Source Sans Pro",
                    }}
                  >
                    <span
                      style={{
                        fontFamily:
                          pathAfterSlash === "ar"
                            ? '"Almarai"'
                            : "Source Sans Pro",
                      }}
                    >
                      {item.label}
                    </span>
                  </Typography>
                }
                style={{
                  marginRight: pathAfterSlash === "ar" ? "0px" : "16px",
                }} // Apply marginRight based on language
              />
              <Typography
                sx={{
                  marginLeft: pathAfterSlash === "ar" ? "0px" : "auto",
                  fontWeight: 400,
                  fontSize: "18px",
                  color: "#476B87",
                  lineHeight: "22.63px",
                  fontFamily:
                    pathAfterSlash === "ar" ? '"Almarai"' : "Source Sans Pro",
                }}
              >
                <span>({item.id})</span>
              </Typography>
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default Sidebar;
