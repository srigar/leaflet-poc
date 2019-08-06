import React from "react";
import { Map, TileLayer, Polyline } from "react-leaflet";

export default class Leaflet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: 12.92415,
      lng: 77.67229,
      zoom: 11,
      data: [
        {
          from_lat: "12.92415",
          from_long: "77.67229",
          id: "132512",
          to_lat: "12.92732",
          to_long: "77.63575"
        },
        {
          from_lat: "12.96691",
          from_long: "77.74935",
          id: "132513",
          to_lat: "12.92768",
          to_long: "77.62664"
        }
      ]
    };
  }
  render() {
    const position = [this.state.lat, this.state.lng];
    return (
        <div id="map">
          <Map
            style={{ height: "100vh" }}
            center={position}
            zoom={this.state.zoom}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
             {this.state.data.map(({id, from_lat, from_long, to_lat, to_long}) => {
              return <Polyline key={id} positions={[
                [from_lat, from_long], [to_lat, to_long],
              ]} color={'red'} />
            })}
          </Map>
        </div>
      );
  }
}
