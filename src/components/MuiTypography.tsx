import { Typography } from "@mui/material";

const MuiTypography = () => {
  return (
    <div>
      <Typography variant="h1">h1 heading</Typography>
      <Typography variant="h2">h2 heading</Typography>
      <Typography variant="h3">h3 heading</Typography>
      <Typography variant="h4" component="h1" gutterBottom>
        h4 heading
      </Typography>
      <Typography variant="h5">h5 heading</Typography>
      <Typography variant="h6">h6 heading</Typography>

      <Typography variant="subtitle1">subtitle 1</Typography>
      <Typography variant="subtitle2">subtile 2</Typography>

      <Typography variant="body1">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non a quos
        amet saepe tenetur numquam debitis harum reiciendis laudantium quaerat
        voluptatum quia, sint porro aut dolores ab aliquam eos commodi.
      </Typography>
      <Typography variant="body2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores eos
        itaque accusantium nulla, quis mollitia explicabo cupiditate
        perspiciatis ab sit quam eius voluptatibus provident numquam quisquam
        nostrum a ipsam nisi?
      </Typography>
    </div>
  );
};

export default MuiTypography;
