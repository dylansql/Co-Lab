import { Link } from 'react-router-dom'

const Experience = () => {
    const { type } = useParams()
    const { xpoType } = useParams()
    
    return (
        <div className="Experience">
            <h1>Music</h1>
            <h3>What's your missing Piece?</h3>
                <div className="size-low">
                    <Link to={`/category/:type/:xpoType`}><button>I need an Artist</button></Link>
                            <h5>Logo should be Above</h5>
                    </div>
                <div className="size-mid">
                    <Link to={`/category/:type/:xpoType`}><button>I need a Producer</button></Link>
                            <h5>Logo should be Above</h5>
                    </div>
                <div className="size-low">
                <Link to={`/category/:type/:xpoType`}><button>I need an Audio Engineer</button></Link>
                            <h5>Logo should be Above</h5>
                    </div>
        </div>
    );
}

export default Experience; 