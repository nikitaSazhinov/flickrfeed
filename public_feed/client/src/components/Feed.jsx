import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Feed = () => {

    const [data, setData] = useState([]);
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)

    useEffect(() => {

        const fetchData = async () => {
            setError(false)
            setLoading(true)

            try {
                const results = await axios("/public")
                console.log(results);
                //fetch("/public").then(res => res.json(data)).then(data => setData(data))
                setData(results.data.feed.entry)
            } catch (err) {
                setError(true)
                setTimeout(() => setError(false), 4000);
            }

            setLoading(false);
        }
        fetchData()
    }, [])

    const renderError = () => {
        if (error) {
            return (
                <div className="alert alert-danger alert-dismissible fade show" role="alert">
                    Error has occured
                </div>
            )
        }
   }

   const renderImages = () => {
        if (loading) {
            return <h2>LOADING</h2>
        }
        console.log(data)

        return data.map(item => {
            return (
                <div key={item.id} className="image">
                    <h2>{item.title}</h2>
                    <img src={item.link[1].href} width="100%" height="auto"/>
                </div>
            )
        })
   }


    return (
        <div>
            {renderError()}
            <h2>Feed here</h2>
            <div>
                {renderImages()}
            </div>
           
        </div>
    )
}


export default Feed;
