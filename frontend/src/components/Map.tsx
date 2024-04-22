import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'

const Map = () => {
  return (
    <div id="map" className="m-8 shadow-2xl p-4 z-0 max-w-full max-h-full">
      <p className="mb-4">Location</p>
      <MapContainer
        center={[51.505, -0.09]}
        zoom={13}
        scrollWheelZoom={true}
        className="h-96 sm:h-80 w-full mx-auto mb-8"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[51.505, -0.09]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  )
}

export default Map
