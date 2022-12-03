import { Box, Rating } from "@mui/material";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useState } from "react";

const MuiRating = () => {
  const [rate, setRate] = useState<number | null>(3);
  console.log({ rate });

  const handleRating = (
    _event: React.SyntheticEvent<Element, Event>,
    value: number | null
  ) => {
    setRate(value);
  };

  return (
    <Box>
      <Rating
        value={rate}
        onChange={handleRating}
        precision={0.5}
        size="large"
        icon={<FavoriteIcon fontSize="inherit" color="error" />}
        emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
        // readOnly
        highlightSelectedOnly
      />
    </Box>
  );
};

export default MuiRating;
