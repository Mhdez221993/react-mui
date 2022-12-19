import { Avatar, Box, Skeleton, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";

export const MuiSkeleton = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 3000);
  }, []);

  return (
    <Box sx={{ width: "250px" }}>
      {isLoading ? (
        <Skeleton
          variant="rectangular"
          width={256}
          height={144}
          animation="wave"
        />
      ) : (
        <img
          src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"
          alt="skeleton"
          width={256}
          height={144}
        />
      )}

      <Stack
        direction="row"
        spacing={1}
        sx={{ width: "100%", marginTop: "12px" }}
      >
        {isLoading ? (
          <Skeleton
            variant="circular"
            width={50}
            height={50}
            animation="wave"
          />
        ) : (
          <Avatar>V</Avatar>
        )}
        <Stack sx={{ width: "80%" }}>
          {isLoading ? (
            <>
              <Typography variant="body1">
                <Skeleton variant="text" animation="wave" width="100%" />
              </Typography>
              <Typography variant="body2">
                <Skeleton variant="text" animation="wave" width="100%" />
              </Typography>
            </>
          ) : (
            <Typography variant="body1">React MUI Tutorial</Typography>
          )}
        </Stack>
      </Stack>
    </Box>
  );
};
