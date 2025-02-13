import React, { useState } from "react";
import { Grid, Typography, InputLabel, MenuItem, FormControl, Select, Box } from "@mui/material";
import PlaceDetails from "../PlaceDetails/PlaceDetails";

const List = () => {
  const [type, setType] = useState("restaurants");
  const [rating, setRating] = useState(0);
  const places = [
    { name: "Cool Place" },
    { name: "Best Beer" },
    { name: "Best Steak" },
    { name: "Cool Place" },
    { name: "Best Beer" },
    { name: "Best Steak" },
    { name: "Cool Place" },
    { name: "Best Beer" },
    { name: "Best Steak" },
  ];

  return (
    <Box sx={{ padding: "20px" }}>
      <Typography variant="h4">Restaurant, Hotels & Attractions around you</Typography>

      <FormControl sx={{ margin: "10px", minWidth: "120px" }}>
        <InputLabel>Type</InputLabel>
        <Select value={type} onChange={(e) => setType(e.target.value)}>
          <MenuItem value="restaurants">Restaurants</MenuItem>
          <MenuItem value="hotels">Hotels</MenuItem>
          <MenuItem value="attractions">Attractions</MenuItem>
        </Select>
      </FormControl>

      <FormControl sx={{ margin: "10px", minWidth: "120px" }}>
        <InputLabel>Rating</InputLabel>
        <Select value={rating} onChange={(e) => setRating(e.target.value)}>
          <MenuItem value={0}>All</MenuItem>
          <MenuItem value={3}>Above 3.0</MenuItem>
          <MenuItem value={4}>Above 4.0</MenuItem>
          <MenuItem value={4.5}>Above 4.5</MenuItem>
        </Select>
      </FormControl>

      {/* Tambahkan Box dengan overflow: auto */}
      <Box sx={{ maxHeight: "800px", overflowY: "auto", border: "1px solid #ccc", borderRadius: "8px", padding: "10px" }}>
        <Grid container spacing={2}>
          {places.map((place, i) => (
            <Grid item key={i} xs={12}>
              <PlaceDetails place={place} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default List;
