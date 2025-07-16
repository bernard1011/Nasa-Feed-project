import { Link } from "react-router-dom"


const Navbar = ()=> {
    return (
        <nav>
            <Link to='/'>Home</Link>
            <Link to='/nasa'>Nasa Feed</Link>
            <Link to='/about'>About</Link>
        </nav>
    )
}

export default Navbar