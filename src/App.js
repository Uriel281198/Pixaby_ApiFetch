import React, { useState, useEffect, useRef } from 'react';
import Form from './components/Form';
import ListadoImages from './components/ListadoImages'
import styled from 'styled-components';
import { getDataApi } from './services/API_pixaby';
import './index.css'

const App = () => {
  //States
  const [keyWord, setKeyword] = useState('');
  const [images, setImages] = useState([]);
  const [paginas, setPaginas] = useState(1);
  const [totalPaginas, setTotalPaginas] = useState(1);

  //Refs
  const jumbotron = useRef(null);


  useEffect(() => {
    const consultaApi = async () => {      
      if (keyWord === '') return
      const Pages = 30;  
      const resultado = await getDataApi(keyWord,paginas)      
      setImages(resultado.hits)
      setTotalPaginas(Math.ceil(resultado.totalHits / Pages));
      jumbotron.current.scrollIntoView({ behavior: 'smooth' })

    }
    consultaApi();
  }, [keyWord, paginas])


  const paginaAnterior = () => {
    const nuevaPagina = paginas - 1;
    if (nuevaPagina === 0) return;
    setPaginas(nuevaPagina)
  }

  const paginaSiguiente = () => {
    const nuevaPagina = paginas + 1;
    if (nuevaPagina > totalPaginas) return;
    setPaginas(nuevaPagina)
  }
  
  return (
    <Container>
      <div className="jumbotron" ref={jumbotron}>
        <p className="lead text-center"> Search Images</p>
        <Form
          buscarg={setKeyword}
        />
        </div>
        <div className="row justify-content-center">
      
        <ListadoImages imagenes={images} />
        <div className="pagination">
        {paginas === 1 ? null : (
          <button
            type="button"
            className="bbtn btn-info mr-1"
            onClick={paginaAnterior}
          >Anterior &laquo;</button>
        )}
        {paginas === totalPaginas ? null : (
          <button
            type="button"
            onClick={paginaSiguiente}
            className="bbtn btn-info"
          >Siguiente &raquo;</button>
        )}
        </div>
      </div>
      </Container>
  )
}


const Container = styled.div`
  max-width:100%;  
  width:80%;
  margin:auto;

`;

export default App;
