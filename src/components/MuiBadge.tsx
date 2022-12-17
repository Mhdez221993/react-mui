import { Badge, Stack } from "@mui/material";

import { Mail } from "@mui/icons-material";

export const MuiBadge = () => {
  return (
    <Stack direction="row" spacing={2}>
      <Badge badgeContent={5} color="primary">
        <Mail />
      </Badge>

      <Badge badgeContent={0} color="secondary" showZero>
        <Mail />
      </Badge>

      <Badge badgeContent={100} color="secondary" max={999}>
        <Mail />
      </Badge>

      <Badge variant="dot" color="secondary" invisible={true}>
        <Mail />
      </Badge>
    </Stack>
  );
};
