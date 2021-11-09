import React from 'react'

//const arrayVacio = prompt("ingrese algo")

//if (arrayVacio == "isra"){
//    console.log("funcando ok")
//} else {
//    console.log("no eres isra")
//}


const Listas = () => {

    const estadoInicial = [
        {id:1, texto: "tarea 1"},
        {id:2, texto: "tarea 2"},
        {id:3, texto: "tarea 3"},
    ]

    const [lista, setLista] = React.useState(estadoInicial)

    const btnAgregar = () => {
        console.log("click ok")
        setLista([
            ...lista,
            {id: 4, texto: "tarea 4"}
        ])   
        
    }

    console.log(lista)
    
    
    return (
        <div>
            <h3>Listas</h3>
            {
                lista.map( (item, index) => (
                    <h4 key={item.id}>{item.texto}</h4>
                ))
            }
            <button onClick={() => btnAgregar()}>Agregar</button>
        </div>
    )
}

export default Listas


//   const arrayPrueba1 = [1, 2, 3, 4]
//   const arrayPrueba2 = [5, 6 ,7, 8]

//    const unionArray = [...arrayPrueba1, ...arrayPrueba2, ...estadoInicial]
//    unionArray.push("holis")

//    console.log(unionArray)
