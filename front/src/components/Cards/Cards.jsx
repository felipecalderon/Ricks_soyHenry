import { useState } from 'react'
import styles from './Cards.module.css'

const Cards = ({personajes, favoritos, onFavorito}) => {
    return (
        personajes.map((personaje, index) => {
            const isFav = favoritos.some(favo => favo.id === personaje.id)
            // let random = Math.floor(Math.random()*personaje.frases.length)
            return (
                    <div key={index} className={styles.card}>
                        <button onClick={onFavorito} id={personaje.id}>{!isFav ? '🤍' : '💚'}</button>
                        <h2>{personaje.nombre}</h2>
                        {/* <div>Género: {personaje.genero}</div>
                        <div>Edad: {personaje.edad} años</div> */}
                        <img src={`http://localhost:3001/imgs/${personaje.id}`} alt={personaje.name}/>
                        {/* <p>{personaje.frases[random]}</p> */}
                    </div>
                )
            })
    )
}
export default Cards