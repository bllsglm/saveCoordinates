import { useState, useEffect, useRef } from 'react'
import { MapContainer, Marker, TileLayer } from 'react-leaflet'
import { FaTrash, FaDownload, FaSave } from 'react-icons/fa'

const MapWithList = () => {
  const [center, setCenter] = useState([40.8, 29.43])
  const [markerList, setMarkerList] = useState([])
  const [selectedMarker, setSelectedMarker] = useState(null)

  useEffect(() => {
    // Load saved markers when the component is initialized
    const savedMarkers = JSON.parse(localStorage.getItem('markers')) || []
    setMarkerList(savedMarkers)
  }, [])

  const handleSaveCoordinates = () => {
    // Add a new marker
    const newCenter = mapRef.current.getCenter()
    const newMarker = {
      id: Date.now(),
      datetime: new Date().toISOString(),
      position: [newCenter.lat, newCenter.lng],
    }
    const updatedMarkers = [...markerList, newMarker]
    setMarkerList(updatedMarkers)
    localStorage.setItem('markers', JSON.stringify(updatedMarkers))
  }

  const handleDownloadCoordinates = () => {
    const jsonCoordinates = JSON.stringify(markerList)
    const blob = new Blob([jsonCoordinates], { type: 'application/json' })
    const anchor = document.createElement('a')
    anchor.download = 'coordinates.json'
    anchor.href = window.URL.createObjectURL(blob)
    anchor.click()
    window.URL.revokeObjectURL(anchor.href)
  }

  // Delete a saved position from UI
  const handleDeleteMarker = (id) => {
    const updatedMarkers = markerList.filter((marker) => marker.id !== id)
    setMarkerList(updatedMarkers)
    localStorage.setItem('markers', JSON.stringify(updatedMarkers))
  }

  // Show the Marker
  const handleShowMarker = (position) => {
    setSelectedMarker(position)
    setCenter(position)
  }

  const mapRef = useRef(null)

  return (
    <>
      <div className="grid lg:grid-cols-4 grid-cols-1">
        <div className="m-8 shadow-2xl p-4 z-0 lg:col-span-3 lg:h-[900px] md:h-[600px] h-80">
          <MapContainer
            center={center}
            zoom={13}
            scrollWheelZoom={true}
            className=" w-full mx-auto mb-8 md:h-full h-72"
            ref={mapRef}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {selectedMarker && <Marker position={selectedMarker} />}
          </MapContainer>
        </div>

        <div className="lg:col-span-1 flex flex-col items-center">
          <div className="flex max-w-fit">
            <button
              className="bg-blue-500 text-white flex justify-center font-extrabold text-md p-2 m-4 rounded-md hover:opacity-80 hover:scale-95 transition-transform text-nowrap"
              onClick={handleSaveCoordinates}
            >
              <FaSave className="mr-2" /> Noktayı Kaydet
            </button>
            <button
              className="bg-blue-500 text-white flex justify-center  font-extrabold  text-md p-2 m-4 rounded-md hover:opacity-80 hover:scale-95 transition-transform"
              onClick={handleDownloadCoordinates}
            >
              <FaDownload className="mr-2" />
              İndir
            </button>
          </div>

          <h2 className="font-bold text-xl mb-2">Eklenen Noktalar</h2>

          <ul>
            {markerList.map((marker) => (
              <>
                <li
                  key={marker.id}
                  className="text-nowrap leading-10 cursor-pointer hover:bg-slate-300 rounded-lg px-4"
                  onClick={() => handleShowMarker(marker.position)}
                >
                  Lat : {marker.position[0].toFixed(5)} , Lng :{' '}
                  {marker.position[1].toFixed(5)}
                  <button
                    className="ml-8 text-red-500"
                    onClick={() => handleDeleteMarker(marker.id)}
                  >
                    <div className="del-button">
                      <FaTrash className="hover:scale-110 transition-transform" />
                    </div>
                  </button>
                </li>
                <hr />
              </>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

export default MapWithList
