import { Link, Stack } from "@mui/material";

export const MuiLink = () => {
  return (
    <Stack direction="row" spacing={2} m={4}>
      <Link href="#">Link</Link>
      <Link href="#" color="secondary">
        Secondary
      </Link>
    </Stack>
  );
};
