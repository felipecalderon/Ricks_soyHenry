import styles from './Cards.module.css'

const Cards = ({characters, onClose}) => {

    return (
            characters.map((character, index) => {
                let random = Math.floor(Math.random()*character.frases.length)
                return (
                    <div key={index} className={styles.card}>
                        <button onClick={onClose} id={character.id}>X</button>
                        <h2>{character.nombre}</h2>
                        <div>Género: {character.genero}</div>
                        <div>Edad: {character.edad} años</div>
                        <img src={`http://localhost:3001/imgs/${character.id}`} alt={character.name}/>
                        <p>{character.frases[random]}</p>
                    </div>
                )
            })
    )
}
export default Cards