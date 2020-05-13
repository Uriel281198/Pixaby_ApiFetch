import React, { useState } from 'react'
import Error from '../components/Error'

const Form = ({ buscarg }) => {

    const [keyWord, setkeyword] = useState('');
    const [isErro, setError] = useState(false);

    const buscar = (e) => {
        e.preventDefault();
        if (keyWord.trim() === '') {
            setError(true);
            return;
        }
        setError(false)
        buscarg(keyWord);
    }

    return (
        <form
            onSubmit={buscar}
        >
            <div className="row">
                <div className="form-group col-md-8">
                    <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Busca tus imagenes"
                        onChange={(e) => setkeyword(e.target.value)}
                    />
                </div>
                <div className="form-group col-md-4">
                    <input
                        type="submit"
                        className="btn btn-lg btn-primary btn-block"
                        value="Buscar"
                    />
                </div>
            </div>
            {isErro ? <Error message="Completa los datos" /> : null}
        </form>
    )
}

export default Form
