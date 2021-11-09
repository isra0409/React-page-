import React from 'react';

const Ternarios = () => {

    const [num, setNum] = React.useState(0)
    const suma = () => {
        console.log("sumando ok")
        setNum(num + 1)
    }

    return (
        <div>
            <h3>Lorem, ipsum dolor. {num}</h3>

            {
                num > 2 ? "es mayor" : "es menor"
            }

            <button onClick={() => suma()}>Sumar</button>
        </div>
    );
};

export default Ternarios;