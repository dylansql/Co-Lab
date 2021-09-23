import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'

const VenudioXP = (props) => {
    const { type } = useParams()
    const { list } = props

    
    useEffect(() => {
        console.log('Line 11: Review', list)
        console.log('here is the type' , type)
        const newList = list.filter(item => {
            if (item.fields.category.toLowerCase() === type || item.fields.category.toLowerCase() === `${type}\n`) {
                console.log(item.fields.category.toLowerCase(), type)
            }
            return item.fields.category.toLowerCase() === type || item.fields.category.toLowerCase() === `${type}\n`
        })
        console.log("Here is the newL List",newList)
        props.setFilteredList(newList)
        
    }, []);


    return (
        <div className="Experience">
            <h1>{type}</h1>
            <h3>What's your budget?</h3>
                <div className="size-low">
                    <Link to={`/category/Venudio/${type}/xpo/low-range/results`}><button>Low Budget</button></Link>
                            <h5>Logo should be Above</h5>
                    </div>
                <div className="size-mid">
                    <Link to={`/category/Venudio/${type}/xpo/mid-range/results`}><button>Mid Budget</button></Link>
                            <h5>Logo should be Above</h5>
                    </div>
                <div className="size-low">
                <Link to={`/category/Venudio/${type}/xpo/high-range/results`}><button>High Budget</button></Link>
                            <h5>Logo should be Above</h5>
                    </div>
        </div>
    );
}

export default VenudioXP; 