import {
  Button,
  ButtonGroup,
  IconButton,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import React, { useState } from "react";

import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
import SendIcon from "@mui/icons-material/Send";

const MuiButton = () => {
  const [format, setFormat] = useState<string | null>(null);

  console.log(format);

  const handleChange = (
    e: React.MouseEvent<HTMLElement>,
    updatedFormats: string | null
  ) => {
    setFormat(updatedFormats);
  };

  return (
    <Stack spacing={4}>
      <Stack spacing={2} direction="row">
        <Button variant="text" href="https://google.com">
          Text
        </Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlinde</Button>
      </Stack>

      <Stack spacing={2} direction="row">
        <Button variant="contained" color="primary">
          Primary
        </Button>
        <Button variant="contained" color="secondary">
          Secondary
        </Button>

        <Button variant="contained" color="error">
          Error
        </Button>

        <Button variant="contained" color="warning">
          Warning
        </Button>

        <Button variant="contained" color="info">
          Info
        </Button>

        <Button variant="contained" color="success">
          Success
        </Button>
      </Stack>

      <Stack spacing={2} direction="row">
        <Button variant="contained" size="small">
          Small
        </Button>
        <Button variant="contained" size="medium">
          Medium
        </Button>

        <Button variant="contained" size="large">
          Large
        </Button>
      </Stack>

      <Stack spacing={2} direction="row">
        <Button variant="contained" startIcon={<SendIcon />}>
          Send
        </Button>

        <Button
          variant="contained"
          endIcon={<SendIcon />}
          disableElevation
          disableRipple
          onClick={() => alert("Clicked")}
        >
          Send
        </Button>

        <IconButton arial-label="send" color="success" size="small">
          <SendIcon />
        </IconButton>
      </Stack>

      <Stack direction="row">
        <ButtonGroup
          variant="contained"
          size="small"
          color="secondary"
          orientation="vertical"
          arial-label="aligment button group"
        >
          <Button onClick={() => alert("Left Clicked")}>Left</Button>
          <Button>Center</Button>
          <Button>Right</Button>
        </ButtonGroup>
      </Stack>

      <Stack direction="row">
        <ToggleButtonGroup
          aria-label="text formatting"
          value={format}
          onChange={handleChange}
          size="small"
          color="success"
          orientation="vertical"
          exclusive
        >
          <ToggleButton value="bold" aria-label="bold">
            {" "}
            <FormatBoldIcon />{" "}
          </ToggleButton>

          <ToggleButton value="italic" aria-label="italic">
            {" "}
            <FormatItalicIcon />{" "}
          </ToggleButton>

          <ToggleButton value="underlined" aria-label="uderlined">
            {" "}
            <FormatUnderlinedIcon />{" "}
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>
    </Stack>
  );
};

export default MuiButton;
