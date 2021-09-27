import { Link } from 'react-router-dom'

const PhoVideography = () => {


    return (
    
    <div className="space-y-12">
        <h1 className="uppercase font-bold"> Photography / Videography </h1>
            <h3 className="uppercase font-bold">What's your Missing Piece ? </h3>
                <div className="Photographer">
                <Link to={`/category/PhoVideography/photographer/xpo/`}><button className="bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">I need a Photographer</button></Link>
                    </div>
                <div className="Videographer">
                <Link to={`/category/PhoVideography/videographer/xpo/`}><button className="bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">I need a Videographer</button></Link>
                    </div>
    </div>
    );
}

export default PhoVideography;