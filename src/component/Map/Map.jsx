import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "85vh",
};

const center = { lat: 0, lng: 0 };

const Map = () => {
  return (
    <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={14}>
        {/* Add markers or overlays here */}
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
