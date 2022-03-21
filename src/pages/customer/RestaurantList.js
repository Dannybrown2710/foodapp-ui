import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { RestaurantData } from "../coustomer/RestaurantDetails.js";
import RestaurantCard from "./RestaurantCard.js";
import {updateList, selectRestaurant} from "../../redux/slices/restaurant"
import axios from "axios";

function Restaurant() {
  const { list , activeRestaurant } = useSelector((state) => state.restaurant);

  const dispatch = useDispatch()
  console.log(list)
  useEffect(() => {
    axios
    .post("/user/login", {
      email: "admin@admin.com",
      password: "Admin@123",
    })
    .then((res) => {
      console.log(res);
    });
    axios
      .get("/restaurant")
      .then(function (response) {
       dispatch(updateList(response.data))
       dispatch(selectRestaurant(response.data[0].id))
       setTimeout(console.log(activeRestaurant),1000);
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {});
  },[]);

  return (
    <Grid container spacing={1}>
      {list.map((restaurant) => (
        <Grid item xs={3}>
          <RestaurantCard restaurant={restaurant} />
        </Grid>
      ))}
    </Grid>
  );
}

export default Restaurant;
