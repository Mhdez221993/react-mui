import { Box, Stack } from "@mui/material";

const MuiLayout = () => {
  return (
    <Stack sx={{ border: "1px solid" }} direction="row-reverse" spacing={2}>
      <Box
        sx={{
          backgroundColor: "primary.main",
          color: "white",
          padding: "16px",
          width: "100px",
          height: "100px",
          "&:hover": { backgroundColor: "primary.light" },
        }}
      >
        Hdez
      </Box>

      <Box
        display="flex"
        height="100px"
        width="100px"
        bgcolor="success.light"
        p={2}
      ></Box>
    </Stack>
  );
};

export default MuiLayout;
