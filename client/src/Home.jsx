import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className="space-y-12 justify-between">
            <div className="uppercase font-bold" ><h1>Select a Category</h1></div>
        <div className=""><Link to="/category/music"><button className="bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Music</button></Link></div>
        <div><Link to="/category/PhoVideography/"><button className="bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Photography & Videography</button></Link></div>
        <div><Link to="/category/Venudio/"><button className="bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Studio & Venues</button></Link></div>
        </div>
    )
}

export default Home;