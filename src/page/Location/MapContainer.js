import React from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
    position: "absolute",
  width: '800px',
  height: '500px',
  left: '50%',
  transform: 'translateX(-50%)',
};

const MapContainer = (props) => {
  return (
    <Map
      google={props.google}
      zoom={14}
      style={mapStyles}
      initialCenter={{
        lat: 21.037169,
        lng: 105.835447
      }}
    />
  );
};

export default GoogleApiWrapper({
  apiKey: 'AIzaSyA2A3XUcjc7hsdSQ7k1sK2PdLlH45DOYeA'
})(MapContainer);
