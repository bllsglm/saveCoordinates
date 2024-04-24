import Map from './components/Map'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <>
      <h1 className="flex justify-center pt-4 pb-4 text-3xl text-white bg-gray-600">
        Save the Coordinates
      </h1>
      <Map />
      <ToastContainer />
    </>
  )
}

export default App
