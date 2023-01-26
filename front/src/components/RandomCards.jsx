import React from "react";

class RandomCards extends React.Component {
    constructor(props){
        super(props)
    }
    
    render(){
        const {characters, onClose} = this.props
        return (
            characters.map((character, index) => {
                return (
                    <div key={index} className="card">
                        <button onClick={onClose} id={character.id}>X</button>
                        <div>{character.nombre}</div>
                        <div>{character.genero}</div>
                        <div>{character.edad}</div>
                        <img src={`http://localhost:3001/imgs/${character.id}`} alt={character.nombre}/>
                    </div>
                )
            })
        )
    }
}
export default RandomCards