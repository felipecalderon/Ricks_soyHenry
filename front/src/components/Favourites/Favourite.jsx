import React from "react";
import { connect } from "react-redux";
import styles from './Favs.module.css'
class Favourites extends React.Component {
    componentDidMount(){
        
    }
    render(){
        const {favoritos} = this.props
        return (
            <>
            <div className={styles.cards}>
            {
                favoritos?.map((character, index) => {
                    let random = Math.floor(Math.random()*character.frases.length)
                    return (
                        <div key={index} className={styles.card}>
                        <button id={character.id}>X</button>
                        <div>{character.alias} {character.familia}</div>
                        <div>Edad: {character.edad} años</div>
                        <img src={`http://localhost:3001/imgs/${character.id}`} alt={character.nombre}/>
                        <marquee>{character.frases[random]}</marquee>
                    </div>
                    )
                })
            }
            </div>
            <div className={styles.seccion}>
                <img src="https://assets.stickpng.com/images/58f37726a4fa116215a92410.png" alt="" sizes="" srcset="" />
                <p>¿Estos son los favoritos? Ddddonde está el filtro morty? donde está mi buscador y mi acceso con login? Solo te pedí un maldito filtro con buscador, maldición tendremos que hacerlo de nuevo Morty!</p>
            </div>
            </>
        )
    }
}

const mapStatetoProps = (state) => {
    const {favoritos} = state
    return {favoritos}
}
export default connect(mapStatetoProps, null)(Favourites)