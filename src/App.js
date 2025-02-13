import React from "react";
import { CssBaseline, Grid } from "@mui/material"; // Ganti @mui/material-ui/core ke @mui/material
import Header from "./component/Header/Header";
import List from "./component/List/List";
import Map from "./component/Map/Map";

// import Main from './components/main/main';

function App() {
  return (
    <>
      <CssBaseline />
      <Header />
      <Grid container spacing={3} style={{ width: "100%" }}>
        <Grid item xs={12} md={4}>
          <List />
        </Grid>
        <Grid item xs={12} md={8}>
          <Map />
        </Grid>
      </Grid>
    </>
  );
}

export default App;
