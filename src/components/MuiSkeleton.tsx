import { Skeleton, Stack } from "@mui/material";

export const MuiSkeleton = () => {
  return (
    <Stack spacing={2} width="250px">
      <Skeleton variant="text" animation={false} />
      <Skeleton variant="rectangular" />
      <Skeleton variant="rounded" />
      <Skeleton variant="circular" width={40} height={40} animation="wave" />
    </Stack>
  );
};
