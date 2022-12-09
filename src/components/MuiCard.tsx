import { Box, Card, CardContent, Typography } from "@mui/material";

import Button from "@mui/material/Button";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";

export const MuiCard = () => {
  return (
    <Box width="300px">
      <Card>
        <CardMedia
          component="img"
          height="140px"
          image="https://source.unsplash.com/random"
          alt="card image from unsplash"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            React
          </Typography>
          <Typography variant="body2" color="text.secondary">
            React is a free and open-source front-end JavaScript library for
            building user interfaces based on UI components.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Lear more</Button>
        </CardActions>
      </Card>
    </Box>
  );
};
