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
                        <div>{character.name}</div>
                        <div>{character.species}</div>
                        <div>{character.gender}</div>
                        <img src={character.image} alt={character.name}/>
                    </div>
                )
            })
        )
    }
}
export default RandomCards