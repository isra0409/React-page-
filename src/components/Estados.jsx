import React from 'react';

const Estados = () => {

    const [multi, setMulti] = React.useState(2)

    const multiplicar = () => {
        console.log("multiplicaste con exito! (:")
        setMulti(multi * 2)
    }

    return (
        <div>
            <h3>tu multiplicacion es: {multi}</h3>
            <button onClick={() => multiplicar()}>Multipliquemos!</button>
        </div>
    );
};

export default Estados;



