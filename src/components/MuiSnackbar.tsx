import { Alert, AlertProps, Button, Snackbar } from "@mui/material";
import { forwardRef, useState } from "react";

const SanckbarAlert = forwardRef<HTMLDivElement, AlertProps>(
  function SnackbarAlert(props, ref) {
    return <Alert elevation={6} ref={ref} {...props} />;
  }
);

export const MuiSnackbar = () => {
  const [open, setOpen] = useState(false);

  const handleClose = (
    event?: Event | React.SyntheticEvent,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open simple snackbar</Button>
      {/* <Snackbar
        open={open}
        message="Note archived"
        onClose={handleClose}
        autoHideDuration={3000}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
      /> */}

      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <SanckbarAlert onClose={handleClose} security="success">
          Form submited successfully!
        </SanckbarAlert>
      </Snackbar>
    </>
  );
};
