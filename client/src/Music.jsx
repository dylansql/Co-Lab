import { Link } from 'react-router-dom'
// import { useParams } from 'react-router-dom'

const Music = () => {

    return (
        <div className="space-y-10 sm:pl-10">
            <h1 className="uppercase font-bold">Music</h1>
            <h3 className="uppercase font-bold">What's your missing Piece?</h3>
                <div className="Musician">
                    <Link to={`/category/music/musician/xpo/`}><button className="bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">I need a Musician</button></Link>
                    </div>
                <div className="Producer">
                    <Link to={`/category/Music/producer/xpo`}><button className="bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">I need a Producer</button></Link>
                    </div>
                <div className="AudioEngineer">
                <Link to={`/category/Music/audio engineer/xpo`}><button className="bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">I need an Audio Engineer</button></Link>
                    </div>
        </div>
    );
    
}

export default Music; 