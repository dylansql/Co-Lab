import { Link } from 'react-router-dom'

const Music = () => {
    
    return (
        <div className="Music">
            <h1>Music</h1>
            <h3>What's your missing Piece?</h3>
                <div className="Musician">
                    <Link to={`/category/Musician`}><button>I need an Artist</button></Link>
                            <h5>Logo should be Above</h5>
                    </div>
                <div className="Producer">
                    <Link to={`/category/Producer`}><button>I need a Producer</button></Link>
                            <h5>Logo should be Above</h5>
                    </div>
                <div className="AudEngineer">
                <Link to={`/category/Audio Engineer`}><button>I need an Audio Engineer</button></Link>
                            <h5>Logo should be Above</h5>
                    </div>
        </div>
    );
}

export default Music; 