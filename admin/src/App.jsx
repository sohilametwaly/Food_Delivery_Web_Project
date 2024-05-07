import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar'
import { Routes ,Route} from 'react-router-dom'
import Add from './pages/Add/Add'
import Orders from './pages/Orders/Orders'
import List from './pages/List/List'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const App = () => {
  return (
    <div className="h-screen">
      <Navbar />
      <ToastContainer />
      <hr />
      <div className='flex '>
        <Sidebar />
        <Routes>
          <Route path="/add" element={<Add />}/>
          <Route path="/list" element={<List />}/>
          <Route path="/orders" element={<Orders />}/>
        </Routes>
        </div>
    </div>
  )
}

export default App
