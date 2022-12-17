import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import { Favorite, Home, Person } from "@mui/icons-material";

import { useState } from "react";

export const MuiBottomNavigation = () => {
  const [value, setValue] = useState(0);

  return (
    <BottomNavigation
      value={value}
      sx={{ width: "100%", position: "absolute", bottom: 0 }}
      onChange={(event, newValue) => setValue(newValue)}
      showLabels
    >
      <BottomNavigationAction label="Home" icon={<Home />} />
      <BottomNavigationAction label="Favorites" icon={<Favorite />} />
      <BottomNavigationAction label="Profile" icon={<Person />} />
    </BottomNavigation>
  );
};
