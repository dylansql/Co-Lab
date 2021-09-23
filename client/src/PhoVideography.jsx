import { Link } from 'react-router-dom'

const PhoVideography = () => {


    return (
    
    <div className="PhoVideography">
        <h1> Photography / Videography </h1>
            <h3>What's your Missing Piece</h3>
                <div className="Photographer">
                <Link to={`/category/PhoVideography/photographer/xpo/`}><button>I need a Photographer</button></Link>
                            <h5>Logo should be above</h5>
                    </div>
                <div className="Videographer">
                <Link to={`/category/PhoVideography/videographer/xpo/`}><button>I need a Videographer</button></Link>
                            <h5>Logo Above</h5>
                    </div>
    </div>
    );
}

export default PhoVideography;