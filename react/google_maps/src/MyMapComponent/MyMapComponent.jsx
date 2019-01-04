import React from "react";
import { compose, withProps } from "recompose";
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import { MarkerWithLabel } from "react-google-maps/lib/components/addons/MarkerWithLabel";

const google = window.google = window.google ? window.google : {};

const MyMapComponent = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `600px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) =>
  <GoogleMap onClick={props.showCoordFunc}
    defaultZoom={8}
    defaultCenter={{ lat: 50.45466, lng: 30.5238 }}
  >
    {props.isMarkerShown && 
    props.markerCoordArr.map(el => 
        <MarkerWithLabel 
          labelVisible={props.labelVisible} 
          onClick={props.togglelabelVisible}
          position={el}
          labelAnchor={new google.maps.Point(0, 0)}
          labelStyle={{backgroundColor: "yellow", fontSize: "10px", padding: "5px"}}
        >
          <div>Широта:{(el.lat).toFixed(5)} Долгота:{(el.lng).toFixed(5)}</div>
        </MarkerWithLabel>
    )
    }
  </GoogleMap>
);

export default MyMapComponent;