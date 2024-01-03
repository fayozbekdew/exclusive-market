import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import NavbarContext from './context/NavbarContext.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <NavbarContext>
        <App />
    </NavbarContext>
)
