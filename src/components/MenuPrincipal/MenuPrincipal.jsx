import rdr2 from "../../assets/ps4-game/RDR2P.jpg";
import gtaV from "../../assets/ps4-game/GtaV.jpg";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  Grid,
} from "@mui/material";
import "./MenuPrincipal.css";
const Juego = ({ imagen, titulo, descripcion }) => (
  <Card className="card-container" sx={{ maxWidth: 350 }}>
    <CardMedia
      component="img"
      image={imagen}
      alt={titulo}
      className="card-img"
      sx={{ height: 450, margin: 2 }}
    />
    <CardContent>
      <Typography
        gutterBottom
        variant="h5"
        component="div"
        className="titleGame"
      >
        {titulo}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {descripcion}
      </Typography>
    </CardContent>

    <CardActions>
      <Button variant="contained" size="large" color="primary">
        Comprar
      </Button>
    </CardActions>
  </Card>
);

const MenuPrincipal = () => (
  <Grid container spacing={2}>
    <Grid item>
      <Juego
        imagen={rdr2}
        titulo="Red Dead Redemption 2"
        descripcion="Red Dead Redemption 2 es un videojuego de acción-aventura western basado en el drama. Un juego bastante conocido también por sus cantidades de detalles realistas en un mundo abierto y en perspectiva de primera y tercera persona, con componentes para un jugador y multijugador."
      />
    </Grid>
    <Grid item>
      <Juego
        imagen={gtaV}
        titulo="GTA V"
        descripcion="Grand Theft Auto V es un videojuego de acción-aventura de mundo abierto en tercera persona desarrollado por el estudio escocés Rockstar North y distribuido por Rockstar Games. "
      />
    </Grid>
  </Grid>
);

export default MenuPrincipal;
