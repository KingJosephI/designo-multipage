import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

// import { Icon } from 'leaflet';
// import * as parkData from './data/skateboard-parks.json';

function MyMap() {
  return (
    <MapContainer
    // style={{ backgroundColor: 'teal' }}
    // center={[45.4, -75.7]}
    // zoom={12}
    // scrollWheelZoom={false}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
    </MapContainer>
  );
}

export default MyMap;