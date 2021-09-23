import { Link } from 'react-router-dom'
// import { useParams } from 'react-router-dom'

const Music = () => {

    return (
        <div className="Music">
            <h1>Music</h1>
            <h3>What's your missing Piece?</h3>
                <div className="Musician">
                    <Link to={`/category/music/musician/xpo/`}><button>I need a Musician</button></Link>
                            <h5>Logo should be Above</h5>
                    </div>
                <div className="Producer">
                    <Link to={`/category/Music/producer/xpo`}><button>I need a Producer</button></Link>
                            <h5>Logo should be Above</h5>
                    </div>
                <div className="AudioEngineer">
                <Link to={`/category/Music/audio engineer/xpo`}><button>I need an Audio Engineer</button></Link>
                            <h5>Logo should be Above</h5>
                    </div>
        </div>
    );
    
}

export default Music; 