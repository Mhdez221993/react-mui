import { IconButton, Tooltip } from "@mui/material";

import { Delete } from "@mui/icons-material";

export const MuiTooltip = () => {
  return (
    <Tooltip
      title="Delete"
      arrow
      enterDelay={500}
      leaveDelay={500}
      placement="right"
    >
      <IconButton>
        <Delete />
      </IconButton>
    </Tooltip>
  );
};
