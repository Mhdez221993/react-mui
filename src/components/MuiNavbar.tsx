import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";

import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";

export const MuiNavbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton size="large" edge="start" color="inherit" aria-label="logo">
          <CatchingPokemonIcon />
        </IconButton>
        <Typography variant="h6" component="div">
          POKEMONAPP
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
