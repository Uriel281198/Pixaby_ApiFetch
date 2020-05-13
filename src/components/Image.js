import React from 'react'

const Image = ({image}) => {

    const {largeImageURL ,likes,previewURL,tags,views} = image;
    return (
        <div className="imagen col-12 col-sm-6 col-md-3 col-lg-3">
            <div className="card"> 
                <img src={largeImageURL} className="card-img-top imagen-top" alt={tags}/>

                <div className="card-bd">
                    <p className="card-text">{likes} Me gusta</p>
                    <p className="card-text">{views} Views</p>
                </div>
                <div className="card-footer">
                    <a 
                    href={largeImageURL} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-block"
                    >
                    Ver imagen
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Image
