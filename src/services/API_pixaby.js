const BaseURL = process.env.REACT_APP_BASE_URL;
const KeyApi  = process.env.REACT_APP_KEY;

export const getDataApi = async (keyWord,paginas) =>{
    if (keyWord === '') return
      const Pages = 30;
     
      const url = `${BaseURL}?key=${KeyApi}&q=${keyWord}&per_page=${Pages}&page=${paginas}`;

      const respuesta = await fetch(url);
      const resultado = await respuesta.json();

     
      return resultado;

      
}