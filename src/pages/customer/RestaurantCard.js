import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { CardMedia, Grid } from "@mui/material";

// import { CardContent, Typography,CardActions } from '@mui/material'

const RestaurantCard = (props) => {
  const { id, name, image, address } = props.restaurant
  const bull = (
    <Box
      component="span"
      sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
    >
      •
    </Box>
  );

  return (
    <div className="max-width">
      <Grid spacing={2} key={id} item xs={10}>
        <Card className="main-card">
          <CardMedia
            component="img"
            height="140"
            image={image}
            alt="green iguana"
            className="card-img"
          />
          <CardContent>
            <Typography
              className="card-name"
              gutterBottom
              variant="h5"
              component="div"
            >
              {name}
            </Typography>
            <Typography
              className="card-address"
              variant="body2"
              color="text.secondary"
            >
              {address}
            </Typography>
            <Typography>
              <p> </p>
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small"> visit Restaurant </Button>
          </CardActions>
        </Card>
      </Grid>
    </div>
  );
};

export default RestaurantCard;
