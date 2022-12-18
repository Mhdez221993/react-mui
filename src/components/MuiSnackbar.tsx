import { Button, Snackbar } from "@mui/material";

import { useState } from "react";

export const MuiSnackbar = () => {
  const [open, setOpen] = useState(false);

  const handleClose = (event: Event | React.SyntheticEvent, reason: string) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open simple snackbar</Button>
      <Snackbar
        open={open}
        message="Note archived"
        onClose={handleClose}
        autoHideDuration={3000}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
      />
    </>
  );
};
