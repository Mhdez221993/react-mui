import { Box, Tab } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";

import { Home } from "@mui/icons-material";
import { useState } from "react";

export const MuiTabs = () => {
  const [value, setValue] = useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider", width: "300px" }}>
          <TabList
            aria-label="Tabs example"
            onChange={handleChange}
            textColor="secondary"
            indicatorColor="secondary"
            // centered
            variant="scrollable"
            scrollButtons="auto"
          >
            <Tab
              label="Tab one"
              value="1"
              icon={<Home />}
              iconPosition="start"
            />
            <Tab label="Tab Two" value="2" />
            <Tab label="Tab Three" value="3" disabled />
            <Tab label="Tab Four" value="4" />
            <Tab label="Tab Six" value="5" />
            <Tab label="Tab Seven" value="6" />
          </TabList>
        </Box>

        <TabPanel value="1">Tab One Content</TabPanel>
        <TabPanel value="2">Tab Two Content</TabPanel>
        <TabPanel value="3">Tab Three Content</TabPanel>
        <TabPanel value="4">Tab Four Content</TabPanel>
        <TabPanel value="5">Tab Five Content</TabPanel>
        <TabPanel value="6">Tab Six Content</TabPanel>
      </TabContext>
    </Box>
  );
};
