import { Alert, Button, Divider, Stack } from "@mui/material";

export const MuiAlert = () => {
  return (
    <Stack spacing={1}>
      <Alert severity="error">This is an error alert</Alert>
      <Alert severity="warning">This is an error alert</Alert>
      <Alert severity="info">This is an error alert</Alert>
      <Alert severity="success">This is an error alert</Alert>

      <Divider />

      <Alert variant="outlined" severity="error">
        This is an error alert
      </Alert>
      <Alert variant="outlined" severity="warning">
        This is an error alert
      </Alert>
      <Alert variant="outlined" severity="info">
        This is an error alert
      </Alert>
      <Alert variant="outlined" severity="success">
        This is an error alert
      </Alert>

      <Divider />

      <Alert variant="filled" severity="error">
        This is an error alert
      </Alert>
      <Alert variant="filled" severity="warning">
        This is an error alert
      </Alert>
      <Alert
        variant="filled"
        severity="info"
        action={
          <Button color="inherit" size="small">
            UNDO
          </Button>
        }
      >
        This is an error alert
      </Alert>
      <Alert
        onClose={() => alert("Closed")}
        variant="filled"
        severity="success"
      >
        This is an error alert
      </Alert>
    </Stack>
  );
};
