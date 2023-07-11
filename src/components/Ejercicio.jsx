import React, {useEffect,useState} from "react"

const Ejercicio = () =>{

    const [valor,setValor] = useState(0)
    const [respuesta,setRespuesta] = useState(0)
    const handleNumero = (evento) => {
        let numero = document.querySelector("#numero").value
        let total = 1;
        for (let i=1; i<=numero; i++) {
            total = total * i; 
        }
        setRespuesta(total)
        setValor(numero)
        
    }
    
    return (
        <>
        <h1>Ejercicio</h1>
        <div className="form">
            <label htmlFor="">Numero</label>    
            <input id="numero" placeholder="ingrese un numero" type="number" /> <br />   
            <button onClick={handleNumero}>Calcular factorial</button>
        </div>
        {
            valor > 0  && <p>El factorial {valor} es {respuesta}</p>
        }
        <div id="respuesta">

        </div>
        </>
    )
}

export default Ejercicio