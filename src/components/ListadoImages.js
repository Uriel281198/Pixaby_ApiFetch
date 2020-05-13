import React from 'react'
import Image from '../components/Image'
const ListadoImages = ({imagenes}) => {
    return (
        <div className="col-12 p-5 row">
            {imagenes.map(imagen => <Image key={imagen.id} image={imagen}/>)}
        </div>
    )
}

export default ListadoImages
