import { Avatar, Chip, Stack } from "@mui/material";

import { Face } from "@mui/icons-material";
import { useState } from "react";

export const MuiChip = () => {
  const [chips, setChips] = useState(["Chip-1", "Chip-2", "Chip-3"]);

  const handleDelete = (chipToDelete: string) => {
    setChips((chips) => chips.filter((v) => v !== chipToDelete));
  };

  return (
    <Stack direction="row" spacing={1}>
      <Chip label="Chip" size="small" color="primary" icon={<Face />} />
      <Chip
        label="Chip outlined"
        size="small"
        color="secondary"
        variant="outlined"
        avatar={<Avatar>V</Avatar>}
      />

      <Chip label="Click" color="success" onClick={() => alert("Cliked")} />
      <Chip label="Delete" color="error" onDelete={() => alert("Deleted")} />

      {chips.map((chip) => (
        <Chip key={chip} label={chip} onDelete={() => handleDelete(chip)} />
      ))}
    </Stack>
  );
};
