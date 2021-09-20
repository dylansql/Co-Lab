import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'

const Experience = () => {
    const { type } = useParams()
    console.log("line 6 XP", type)
    return (
        <div className="Experience">
            <h1>Music</h1>
            <h3>What level of experience do you need?</h3>
                <div className="size-low">
                    <Link to={`/category/${type}/xpo/size-low`}><button>I can work with little experience</button></Link>
                            <h5>Logo should be Above</h5>
                    </div>
                <div className="size-mid">
                    <Link to={`/category/${type}/xpo/size-mid`}><button>I can work with medium experience</button></Link>
                            <h5>Logo should be Above</h5>
                    </div>
                <div className="size-low">
                <Link to={`/category/${type}/xpo/size-high`}><button>I need high experience</button></Link>
                            <h5>Logo should be Above</h5>
                    </div>
        </div>
    );
}

export default Experience; 