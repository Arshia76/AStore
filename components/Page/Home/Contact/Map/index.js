import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import styles from './Map.module.css';
import L from 'leaflet';

const Map = () => {
  const icon = L.icon({ iconUrl: '/Resource/Images/marker-icon.png' });

  const position = [51.505, -0.09];
  return (
    <div className={styles.Map}>
      <MapContainer
        style={{ height: '400px' }}
        center={position}
        zoom={15}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        <Marker position={position} icon={icon}>
          <Popup>You are Here!</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
