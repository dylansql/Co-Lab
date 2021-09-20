import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className="Home">
            <h1>Home</h1>
        <Link to="/Music"><h3>Music</h3></Link>
        <Link to="/PhoVideography"><h3>Photography & Videography</h3></Link>
        <Link to="/Venudio"><h3>Studio & Venues</h3></Link>
        </div>
    )
}

export default Home;