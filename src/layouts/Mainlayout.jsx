import {Outlet} from 'react-router-dom'
import Navbar from '../components/Navbar.jsx'

const Mainlayout = () => {
    return (
        <> 
            <Navbar/>
            <main>
                <Outlet/>
            </main>
        </>
    )
}

export default Mainlayout