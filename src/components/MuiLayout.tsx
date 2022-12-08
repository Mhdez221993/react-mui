import { Box, Divider, Grid, Paper, Stack } from "@mui/material";

const MuiLayout = () => {
  return (
    <Paper sx={{ padding: "32px" }} elevation={4}>
      <Stack
        sx={{ border: "1px solid" }}
        direction="row"
        // spacing={2}
        divider={<Divider orientation="vertical" flexItem />}
      >
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

      <Grid container my={4} rowSpacing={2} columnSpacing={4}>
        <Grid item xs={12} sm={6} lg={3}>
          <Box bgcolor="primary.light">Item1</Box>
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <Box bgcolor="primary.light">Item2</Box>
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <Box bgcolor="primary.light">Item3</Box>
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <Box bgcolor="primary.light">Item4</Box>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default MuiLayout;
