import {
  Avatar,
  Box,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import { Mail } from "@mui/icons-material";

export const MuiList = () => {
  return (
    <Box sx={{ width: "400px", backgroundColor: "#efefef" }}>
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <ListItemAvatar>
                <Avatar>
                  <Mail />
                </Avatar>
              </ListItemAvatar>
            </ListItemIcon>
            <ListItemText primary="List Item 1" secondary="Secondary text" />
          </ListItemButton>
        </ListItem>

        <Divider />

        <ListItem>
          <ListItemIcon>
            <ListItemAvatar>
              <Avatar>
                <Mail />
              </Avatar>
            </ListItemAvatar>
          </ListItemIcon>
          <ListItemText primary="List Item 2" secondary="Secondary text" />
        </ListItem>

        <Divider />

        <ListItem>
          <ListItemIcon>
            <ListItemAvatar>
              <Avatar>
                <Mail />
              </Avatar>
            </ListItemAvatar>
          </ListItemIcon>
          <ListItemText primary="List Item 3" secondary="Secondary text" />
        </ListItem>
      </List>
    </Box>
  );
};
