import { Link } from 'react-router-dom'

const Navbar = () => {
    return <nav className="navbar">
        <h1>Co-Lab</h1>
        <div className="links">
            <Link to="/">Home</Link>
            <Link to='/Create/Post'>Write a Review</Link>
        </div>
    </nav>
}

export default Navbar;