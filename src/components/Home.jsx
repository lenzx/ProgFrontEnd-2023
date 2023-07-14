import React, {useEffect,useState} from "react"
import { Route,Link } from "react-router-dom"
import rogal from "../assets/imagen/rogal_dorn.png"
import khan from "../assets/imagen/khan.jpg"
import corvus from "../assets/imagen/corvus.jpg"
import "../styles/Home.css"

const Home = () => {
    return (
        <>
            <h1>pagina Inicio</h1>
            <Link to={'Ejercicio'}>ejercicio</Link> <br />
            <Link to={'Perfil'}>perfil</Link>
            <br />
            <hr />
            <br />
            <div className="d-flex justify-content-around">
                <div className="row container-fluid">
                    <div className="col-4 d-flex justify-content-center ">
                        <div class="card" style={{ width: "18rem" }}>
                            <img src={rogal} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Rogal Dorn</h5>
                                <p class="card-text">
                                    "No me pidáis que me acerque cuidadosamente, ocultándome entre las sombras,
                                    o que me aproxime en silencio a mis enemigos al abrigo de la oscuridad.
                                    Soy Rogal Dorn, un Puño Imperial,
                                    un Marine Espacial, Paladín del Emperador. Dejad que mis enemigos se estremezcan
                                    ante mi avance y que tiemblen sólo con verme."
                                </p>
                                <a href="https://warhammer40k.fandom.com/es/wiki/Rogal_Dorn" class="btn btn-primary">Para saber mas</a>
                            </div>
                        </div> 
                    </div>
                    <div className="col-4 d-flex justify-content-center">
                        <div class="card" style={{ width: "18rem" }}>
                            <img src={khan} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Jaghatai Khan</h5>
                                <p class="card-text">
                                    "Soy el Halcón Guerrero, el berkut, el que recorre los territorios. Soy el espíritu del fuego arrasador, aquel al que no se puede atrapar,
                                    el señor de los cielos azul celeste. He viajado más lejos que ninguno de mis hermanos, y ninguno de ellos sabe lo que pienso."
                                </p>
                                <a href="https://warhammer40k.fandom.com/es/wiki/Jaghatai_Khan" class="btn btn-primary">Para saber mas</a>
                            </div>
                        </div> 
                    </div>
                    <div className="col-4 d-flex justify-content-center">
                        <div class="card" style={{ width: "18rem" }}>
                            <img src={corvus} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Corvus Corax</h5>
                                <p class="card-text">
                                    "Una batalla puede ser ganada con fuerza bruta, o por pura suerte. ¿Pero una guerra? Una guerra se gana con astucia,
                                    y se libra sin piedad. Para alcanzar los objetivos más nobles uno debe cometer a veces actos innobles.
                                    Así que no me pidáis que justifique las actuaciones de la Guardia del Cuervo. Los mundos dejados a los carroñeros
                                    a nuestro paso deberían ser suficientemente elocuentes."
                                </p>
                                <a href="https://warhammer40k.fandom.com/es/wiki/Corvus_Corax" class="btn btn-primary">Para saber mas</a>
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
        </>

    )
    
}

export default Home