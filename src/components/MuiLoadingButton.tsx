import { LoadingButton } from "@mui/lab";
import { Save } from "@mui/icons-material";
import { Stack } from "@mui/material";

export const MuiLoadingButton = () => {
  return (
    <Stack direction="row" spacing={1}>
      <LoadingButton variant="outlined">Submit</LoadingButton>
      <LoadingButton variant="outlined" loading>
        Submit
      </LoadingButton>

      <LoadingButton variant="outlined">Fetch Data</LoadingButton>
      <LoadingButton variant="outlined" loading loadingIndicator="Loading...">
        Fetch Data
      </LoadingButton>

      <LoadingButton
        variant="outlined"
        startIcon={<Save />}
        loadingPosition="start"
      >
        Save
      </LoadingButton>
      <LoadingButton
        loading
        variant="outlined"
        loadingPosition="start"
        startIcon={<Save />}
      >
        Save
      </LoadingButton>
    </Stack>
  );
};
