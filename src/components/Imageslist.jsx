import React from 'react'
import CardImages from './CardImages'
const Imageslist = ({images}) => {
  return (
    <div className="p-2 row">
    {images.map(image => (
        <CardImages 
        image={image}
        key={image.id}/>
    ))}

    </div>
  )
}

export default Imageslist