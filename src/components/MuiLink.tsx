import { Link, Stack } from "@mui/material";

import Typography from "@mui/material/Typography";

export const MuiLink = () => {
  return (
    <Stack direction="row" spacing={2} m={4}>
      <Link href="#" variant="body2">
        Link
      </Link>

      <Typography variant="h6">
        <Link href="#" color="secondary" underline="hover">
          Secondary
        </Link>
      </Typography>
    </Stack>
  );
};
