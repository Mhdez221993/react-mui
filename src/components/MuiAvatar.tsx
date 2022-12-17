import { Avatar, AvatarGroup, Stack } from "@mui/material";

export const MuiAvatar = () => {
  return (
    <Stack spacing={2}>
      <Stack direction="row" spacing={1}>
        <Avatar sx={{ backgroundColor: "primary.light" }}>BW</Avatar>
        <Avatar sx={{ backgroundColor: "success.light" }}>CK</Avatar>
      </Stack>

      <Stack direction="row" spacing={1}>
        <AvatarGroup>
          <Avatar sx={{ backgroundColor: "primary.light" }}>BW</Avatar>
          <Avatar sx={{ backgroundColor: "success.light" }}>CK</Avatar>

          <Avatar src="https://randomuser.me/api/portraits/men/79.jpg">
            CK
          </Avatar>
          <Avatar src="https://randomuser.me/api/portraits/women/79.jpg">
            CK
          </Avatar>
        </AvatarGroup>
      </Stack>

      <Stack direction="row" spacing={1}>
        <Avatar
          variant="square"
          sx={{ backgroundColor: "primary.light", width: 48, height: 48 }}
        >
          BW
        </Avatar>
        <Avatar
          variant="rounded"
          sx={{ backgroundColor: "success.light", width: 48, height: 48 }}
        >
          CK
        </Avatar>
      </Stack>
    </Stack>
  );
};
