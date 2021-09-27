import { Link } from 'react-router-dom'

const Venudio = () => {


    return (
        <div className="space-y-8">
            <h1>Venue / Studio </h1>
            <h3>What's your Missing Piece</h3>
                <div className="Venue">
                <Link to={`/category/Venudio/venue/xpo/`}><button className="bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">I need a Venue</button></Link>
                    </div>
                <div className="Studio">
                <Link to={`/category/Venudio/studio/xpo/`}><button className="bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">I need a Studio</button></Link>
                    </div>
        </div>
    );
}

export default Venudio; 