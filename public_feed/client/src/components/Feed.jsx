import React, {useState, useEffect} from 'react'
import axios from 'axios'
import './Feed.css'
import {Button} from 'react-bootstrap'

const Feed = () => {

    const [data, setData] = useState([]);
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)
    const [search, setSearch]= useState("")

    useEffect(() => {

        const fetchData = async () => {
            setError(false)
            setLoading(true)

            try {
                const results = await axios("/public")
                console.log(results);
                //fetch("/public").then(res => res.json(data)).then(data => setData(data))
                const urls = results.data.feed.entry.map((item) => 
                 [item.link[1].$.href, item.title])
                setData(urls)
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
            return (
                <div className="loader">
                    <i className="fas fa-spinner fa-4x fa-spin"/>
                </div>
            )
        }
        console.log(data)

        return data.map(item => {
            return (
                <div key={item.id} className="images">
                    <div class="container">
                        
                        <img class="image" src={item[0]} />

                        <div class="overlay">
                            <h2>{item[1]}</h2>
                        </div>
                    </div>
                    
                </div>
            )
        })
   }

   const handleSubmit = async event => {
      // event.preventDefault();
       setError(false)
       setLoading(true)
        
       try {
        
         const results = await axios("/search/" + search, {
        });
        console.log(results.data.rsp.photos[0].photo);

        const urls = results.data.rsp.photos[0].photo.map((item) => 
        ["https://live.staticflickr.com/" + item.$.server + "/" + item.$.id + "_" + item.$.secret + "_w" + ".jpg", item.$.title])
        console.log(urls)
        setData(urls);
    } 
    catch {
        setError(true)
        setTimeout(() => setError(false), 4000)
    }
    setLoading(false)
   }

   const handleSearch =  event  => {
       setSearch(event.target.value)
   }


    return (
    
        <div class="gifs">

            {renderError()}
            <div class="container-fluid">
            <div class="input-group justify-content-center p-2">
                <div className="form-outline w-75" >
                    <input type="text" id="form1" placeholder="search" class="form-control"
                    onChange={handleSearch} value={search}/> 
                </div>
                <div class="input-group-btn">
                    <Button type="submit" onClick={handleSubmit}><i class="fas fa-search"></i></Button>
                </div>
                </div>
                </div>
            <div>

                {renderImages()}
            </div>
           
        </div>
    )
}


export default Feed;
