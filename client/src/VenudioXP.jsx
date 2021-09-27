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
        <div className="space-y-8">
            <h1 className="uppercase font-bold">{type}</h1>
            <h3 className="uppercase font-bold">What's your budget?</h3>
                <div className="pl-40 lg:pl-96">
                    <Link to={`/category/Venudio/${type}/xpo/low-range/results`}><img src="https://res.cloudinary.com/ddid7dngp/image/upload/v1632590204/Single_Sign_p5bhyc.png" height="100" width="100" className="object-center" /> </Link>
                    </div>
                                <div><h5 className="uppercase font-bold">0-300</h5></div>
                <div className="pl-40 lg:pl-96">
                    <Link to={`/category/Venudio/${type}/xpo/mid-range/results`}><img src="https://res.cloudinary.com/ddid7dngp/image/upload/v1632590197/Double_Sign_msrdmp.png" height="100" width="100" /> </Link>
                    </div>
                    <div>
                            <h5 className="uppercase font-bold">300-500</h5>
                    </div>
                <div className="pl-40 lg:pl-96">
                <Link to={`/category/Venudio/${type}/xpo/high-range/results`}><img src="https://res.cloudinary.com/ddid7dngp/image/upload/v1632590212/Triple_Sign_zyekeh.png" height="100" width="100" /> </Link>
                    </div>
                    <div>
                            <h5 className="uppercase font-bold">500+</h5>
                    </div>
        </div>
    );
}

export default VenudioXP; 