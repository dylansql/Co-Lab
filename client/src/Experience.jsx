import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'

const Experience = (props) => {
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
        <div className="space-y-6 justify-center">
            <h1 className="uppercase font-bold">{type}</h1>
            <h3 className="font-bold uppercase">What level of experience do you need?</h3>
                <div className="pl-36">
                    <Link to={`/category/music/${type}/xpo/size-low`}><img src="https://res.cloudinary.com/ddid7dngp/image/upload/v1632590174/Low_XP_k3dk4p.png" alt="experience level low" height="100" width="100" /></Link>
                    </div>
                    <div>
                    </div>
                <div className="pl-36">
                    <Link to={`/category/music/${type}/xpo/size-mid`}><img src="https://res.cloudinary.com/ddid7dngp/image/upload/v1632590183/mid_XP_b1vtur.png" alt="experience level mid" height="100" width="100" /></Link>
                    </div>
                    <div>
                    </div>
                <div className="pl-36">
                <Link to={`/category/music/${type}/xpo/size-high`}><img src="https://res.cloudinary.com/ddid7dngp/image/upload/v1632590165/high_XP_lgwwfg.png" alt="experience level high" height="100" width="100" /></Link>
                    </div>
        </div>
    );
}

export default Experience; 