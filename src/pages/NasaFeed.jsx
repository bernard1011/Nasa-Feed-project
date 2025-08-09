import { useState, useEffect } from "react";
import Card from "../components/Card.jsx";

const API_KEY = import.meta.env.VITE_NASA_API_KEY;
const API_URL = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&count=5`;

const NasaFeed = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((json) => {
        setData(json);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading ... </p>;
  if (!data) return <p>Somthing went wrong</p>;

  return (
    <>
    <div className="flex flex-col gap-8">
      {data.map((elem, index) => (
        <Card elem={elem} key={index} />
      ))}
    </div>
      
    </>
  );
};

export default NasaFeed;
