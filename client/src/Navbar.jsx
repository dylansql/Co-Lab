import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="flex justify-between">
        <div>
            <Link to="/" className="text-xl text-white"><img src="https://res.cloudinary.com/ddid7dngp/image/upload/v1632588474/Colab_Words_whitepng_i17ozu.png" height="60px" width="80 px"/></Link>
        </div>
            <div>
                </div>
        <div>
            <Link to='/Create/Post' className="text-xl text-white">Write a Review</Link>
        </div>
        </nav>
        
    )
}

export default Navbar;