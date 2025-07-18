import { useState, useEffect} from "react";

const API_KEY = import.meta.env.VITE_NASA_API_KEY;
const API_URL = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&count=5`;


const NasaFeed = () => {
const [data, setData] = useState([]);
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
    {
      data.map((elem, index)=>(
        <div key={index}>
          <h1>{elem.title}</h1>
          {elem.media_type === 'image' ? (<img src={elem.url} alt={elem.title}/>) : (<p>Video: <a href={elem.url}>{elem.url}</a></p>)}
          <p>{elem.explanation}</p>
        </div>
      ))};

    
  </>
)
};

export default NasaFeed