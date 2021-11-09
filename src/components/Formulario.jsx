import React from 'react'
import '../css/formulario.css'


const Formulario = () => {

    const [fruta, setFruta] = React.useState("")
    const [descripcion, setDescripcion] = React.useState("")

    const [lista, setLista] = React.useState([])


    const procesarDatos = (e) => {
        e.preventDefault()

        if (!fruta.trim()){
            console.log("Fruta esta vacío")
        
        if (!descripcion.trim()){
            console.log("Descripcion esta vacío")
        }

        console.log("Procesando datos..." + fruta + descripcion) 
    }

    setLista([
            ...lista,
            {
                nombreFruta: fruta, nombreDescripcion: descripcion
            }
        ])

        e.target.reset()
        setFruta("")
        setDescripcion("")
    }

    return (
        <div>

            <form onSubmit= { procesarDatos } className="contenedorForm">

                <input
                    type="text"
                    placeholder="Escriba su fruta"
                    className="form-control mb-2"
                    onChange={ (e) => setFruta(e.target.value)}
                />

                <input
                    type="text"
                    placeholder="Escriba su descripcion"
                    className="form-control mb-2"
                    onChange={ e => setDescripcion(e.target.value)}
                />

                <button className="btn btn-primary btn-block" type="submit">Agregar</button>
            </form>

            <ul>
                {
                    lista.map((item, index) => (
                        <li key={index}>
                            {item.nombreFruta} - {item.nombreDescripcion}
                        </li>
                    ))
                }
            </ul>
            
        </div>
    )
}

export default Formulario
