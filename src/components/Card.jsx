import { useState } from "react";


const Card = ({elem}) => {
const [showMore, setShowMore] = useState(false)
const sentences = elem.explanation.split('.').filter


  return (

      <div className="bg-gray-50 p-2">
        <h2>{elem.title}</h2>
        {elem.media_type === "image" ? (
          <img src={elem.url} alt={elem.title} />
        ) : (
          <iframe
          src={elem.url}
          title={elem.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        )}

        <p>{elem.explanation}</p>
      </div>
    
  );
};


export default Card