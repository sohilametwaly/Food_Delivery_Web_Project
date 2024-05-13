import ReactDOM from 'react-dom/client'
import Admin from './Admin.jsx'
import './index.css'
import {BrowserRouter} from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
 
  <BrowserRouter>
    <Admin />
    </BrowserRouter>
  ,
)
