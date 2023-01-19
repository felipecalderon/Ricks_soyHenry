const Cards = ({characters, onClose}) => {

    return (
            characters.map((character, index) => {
                return (
                    <div key={index} className="card">
                        <button onClick={onClose} id={character.id}>X</button>
                        <div>{character.name}</div>
                        <div>{character.species}</div>
                        <div>{character.gender}</div>
                        <img src={character.image} alt={character.name}/>
                    </div>
                )
            })
    )
}
export default Cards