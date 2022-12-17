import { Avatar, Stack } from "@mui/material";

export const MuiAvatar = () => {
  return (
    <Stack>
      <Stack direction="row" spacing={1}>
        <Avatar>BW</Avatar>
        <Avatar>CK</Avatar>
      </Stack>
    </Stack>
  );
};
