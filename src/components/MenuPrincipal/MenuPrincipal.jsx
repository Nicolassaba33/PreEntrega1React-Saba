import rdr2 from "../../assets/Games/red_dead_3__nombre_temporal_-5009894.webp";
import gtaV from "../../assets/Games/grand_theft_auto_v-2654943.webp";
import ea24 from "../../assets/Games/ea_sports_fc-5823578.webp";
import acmirage from "../../assets/Games/assassin__039_s_creed__2022_-5741467.webp";
import cyberpunk from "../../assets/Games/cyberpunk-4889717.webp";
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
  <Card className="card-container">
    <div className="cardmedia-container">
      <CardMedia
        component="img"
        image={imagen}
        alt={titulo}
        className="card-img"
      />
    </div>
    <CardContent>
      <Typography
        gutterBottom
        variant="h5"
        component="div"
        className="titleGame"
      >
        {titulo}
      </Typography>
      <Typography
        variant="body2"
        color="text.secondary"
        className="descripcionGame"
      >
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
  <div className="menu-container">
    <Grid container spacing={1}>
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
      <Grid item>
        <Juego
          imagen={ea24}
          titulo="EA 24"
          descripcion="EA Sports FC 24​ es un videojuego de fútbol, desarrollado por EA, y publicado por EA Sports. Este juego marca la primera entrega de la serie EA Sports FC, ​ tras la conclusión de la asociación de EA con FIFA.​​ "
        />
      </Grid>
      <Grid item>
        <Juego
          imagen={acmirage}
          titulo="Assassin's Creed Mirage"
          descripcion="EA Sports FC 24​ es un videojuego de fútbol, desarrollado por EA, y publicado por EA Sports. Este juego marca la primera entrega de la serie EA Sports FC, ​ tras la conclusión de la asociación de EA con FIFA.​​ "
        />
      </Grid>
      <Grid item>
        <Juego
          imagen={cyberpunk}
          titulo="Cyberpunk"
          descripcion="EA Sports FC 24​ es un videojuego de fútbol, desarrollado por EA, y publicado por EA Sports. Este juego marca la primera entrega de la serie EA Sports FC, ​ tras la conclusión de la asociación de EA con FIFA.​​ "
        />
      </Grid>
    </Grid>
  </div>
);

export default MenuPrincipal;
