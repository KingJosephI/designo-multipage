import mapboxgl from 'mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import { useEffect, useRef, useState } from 'react';
import './MyMap.scss';

function MyMap() {
  mapboxgl.accessToken =
    'pk.eyJ1IjoiamthYmVtYmEyMDIzIiwiYSI6ImNsYnMxbXJzaDBtMnQzb3FkMGN1N21zMHgifQ.z1h3DFIQvWMqxd4YN_XiKQ';
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng] = useState(-70.9);
  const [lat] = useState(42.35);
  const [zoom] = useState(9);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [lng, lat],
      zoom: zoom,
    });
  });
  return (
    <div
      style={{ width: '100%', height: '100%' }}
      ref={mapContainer}
      className="map-container"
    />
  );
}

export default MyMap;
