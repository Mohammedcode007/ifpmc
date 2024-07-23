import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

interface BasicTabsProps {
  tabone?: React.ReactNode;
  tabtwo?: React.ReactNode;
  tabthree?: React.ReactNode;
  tabonetitle?: string;
  tabtwotitle?: string;
  tabthreetitle?: string;
}

const BasicTabs: React.FC<BasicTabsProps> = ({
  tabone,
  tabtwo,
  tabthree,
  tabonetitle,
  tabtwotitle,
  tabthreetitle,
}) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          indicatorColor="#476B87"
          textColor="#476B87"
        >
          <Tab
            label={tabonetitle}
            {...a11yProps(0)}
            sx={{
              fontSize: "15px",
              fontWeight: 600,
              lineHeight: "25.14px",
              textAlign: "left",
              color: value === 0 ? "#476B87" : "#476B87",
              textTransform: "none",
              borderBottom:
                value === 0 ? "4px solid #476B87" : "4px solid transparent",
            }}
          />
          <Tab
            label={tabtwotitle}
            {...a11yProps(1)}
            sx={{
              fontSize: "15px",
              fontWeight: 600,
              lineHeight: "25.14px",
              textAlign: "left",
              color: value === 1 ? "#476B87" : "#476B87",
              textTransform: "none",
              borderBottom:
                value === 1 ? "4px solid #476B87" : "4px solid transparent",
            }}
          />
          <Tab
            label={tabthreetitle}
            {...a11yProps(2)}
            sx={{
              fontSize: "15px",
              fontWeight: 600,
              lineHeight: "25.14px",
              textAlign: "left",
              color: value === 2 ? "#476B87" : "#476B87",
              textTransform: "none",
              borderBottom:
                value === 2 ? "4px solid #476B87" : "4px solid transparent",
            }}
          />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        {tabone}
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        {tabtwo}
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        {tabthree}
      </CustomTabPanel>
    </Box>
  );
};

export default BasicTabs;
