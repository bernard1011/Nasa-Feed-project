import { useState, useEffect} from "react";

const API_URL = "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY";


const NasaFeed = () => {
const [data, setData] = useState(null);
const [loading, setLoading] = useState(true);

useEffect(()=>{
  fetch(API_URL)
  .then(res=>res.json())
  .then(json=>{
    setData(json)
    setLoading(false)
  })
  .catch(err=>{
    console.error(err)
    setLoading(false)
  })

}, [])

if(loading) return <p>Loading ... </p>
if(!data) return <p>Somthing went wrong</p>

return (
  <>
    <h1>{data.title}</h1>
    <img src={data.url} alt={data.title} />
    <p>{data.explanation}</p>
  </>
)
};

export default NasaFeed