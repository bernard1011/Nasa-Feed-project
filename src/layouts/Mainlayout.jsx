import {Outlet} from 'react-router-dom'
import Navbar from '../components/Navbar.jsx'

const Mainlayout = () => {
    return (
        <> 
            <Navbar/>
            <main className='p-4'>
                <Outlet/>
            </main>
        </>
    )
}

export default Mainlayout