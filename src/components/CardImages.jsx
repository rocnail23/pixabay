import React from 'react'

const CardImages = ({image}) => {

    const {largeImageURL,likes,previewURL,tags,views} = image
  return (
    <div className='col-12 col-sm-6 col-md-6 col-lg-3'>
        <div class="card mb-4">
    <img src={previewURL} class="card-img-top" style={{height:"200px"}} alt="..."/>
    <div class="card-body">
     
      <p className="card-text">{likes} likes</p>
      <p className="card-text">{views} vistas</p>
    </div>
    <div className="card-footer">
      <a href={largeImageURL}
        target='_blank'
        rel='noopener noreferrer'
        className='btn btn-primary btn-block'
      >ver imagen</a>
    </div>
  </div>
    </div>
  )
}

export default CardImages