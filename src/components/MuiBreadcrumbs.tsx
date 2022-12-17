import { Box, Breadcrumbs, Link, Typography } from "@mui/material";

export const MuiBreadcrumbs = () => {
  return (
    <Box m={2}>
      <Breadcrumbs aria-label="breadcrumbs">
        <Link href="#" underline="hover">
          Home
        </Link>
        <Link href="#" underline="hover">
          Catalog
        </Link>
        <Link href="#" underline="hover">
          Accessories
        </Link>
        <Typography color="text.primary">Shoes</Typography>
      </Breadcrumbs>
    </Box>
  );
};
