import { Link } from 'react-router-dom'

const Venudio = () => {


    return (
        <div className="Venudio">
            <h1>Venue / Studio </h1>
            <h3>What's your Missing Piece</h3>
                <div className="Venue">
                <Link to={`/category/Venue`}><button>I need a Venue</button></Link>
                            <h5>Logo should be above</h5>
                    </div>
                <div className="Studio">
                <Link to={`/category/Studio`}><button>I need a Studio</button></Link>
                            <h5>Logo Above</h5>
                    </div>
        </div>
    );
}

export default Venudio; 