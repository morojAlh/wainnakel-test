import React from "react";
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import locationPin from '../images/locationPin.svg';

const Map = withScriptjs(withGoogleMap((props) =>{
    let {lat, lon} = props.restaurantInfo;
    lat = parseFloat(lat);
    lon = parseFloat(lon);
    return (
        <GoogleMap
          defaultZoom={17}
          center={{ 
              lat: lat, 
              lng: lon
          }}
          >
          <Marker
            position={{
              lat: lat,
              lng: lon
            }}
            icon={locationPin}
          >
          </Marker>
        </GoogleMap>
      );
  }
))

export default Map;