import React, {useEffect,useState} from "react"
import { Route,Link } from "react-router-dom"

const Home = () => {
    return (
        <>
            <h1>pagina Inicio</h1>
            <Link to={'Ejercicio'}>ejercicio</Link> <br />
            <Link to={'Perfil'}>perfil</Link>

        </>

    )
    
}

export default Home