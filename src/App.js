import React, { useEffect, useState } from "react";
import { CssBaseline, Grid } from "@mui/material"; // Ganti @mui/material-ui/core ke @mui/material
import Header from "./component/Header/Header";
import List from "./component/List/List";
import Map from "./component/Map/Map";
import { getPlacesData } from "./api";
// import Main from './components/main/main';

function App() {
  const [places, setPlaces] = useState([]);
  const [coordinates, setCoordinates] = useState({lat:0,lng:0});
  const [bounds, setBounds] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoordinates({ lat: latitude, lng: longitude });
      },
      () => {}
    );

  useEffect(() => {
    getPlacesData(bounds.sws, bounds.ne).then((data) => {
      console.log(data);
      setPlaces(data);
    });
  }, [coordinates, bounds]);
  return (
    <>
      <CssBaseline />
      <Header />
      <Grid container spacing={3} style={{ width: "100%" }}>
        <Grid item xs={12} md={4}>
          <List />
        </Grid>
        <Grid item xs={12} md={8}>
          <Map setCoordinates={setCoordinates} setBounds={setBounds} coordinates={coordinates} />
        </Grid>
      </Grid>
    </>
  );
}

export default App;
