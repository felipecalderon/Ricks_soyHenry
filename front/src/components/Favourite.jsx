import React from "react";
import { connect } from "react-redux";
import styles from './Favs.module.css'
class Favourites extends React.Component {
    componentDidMount(){
        
    }
    render(){
        const {favoritos} = this.props
        return (
            <div className={styles.cards}>
            {
                favoritos?.map((character, index) => {
                    return (
                        <div key={index} className={styles.card}>
                        <button id={character.id}>X</button>
                        <div>{character.nombre}</div>
                        <div>{character.genero}</div>
                        <div>{character.edad}</div>
                        <img src={`http://localhost:3001/imgs/${character.id}`} alt={character.nombre}/>
                    </div>
                    )
                })
            }
            </div>
        )
    }
}

const mapStatetoProps = (state) => {
    const {favoritos} = state
    return {favoritos}
}
export default connect(mapStatetoProps, null)(Favourites)