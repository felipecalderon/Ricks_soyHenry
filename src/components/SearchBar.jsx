const SearchBar = ({personajes, getAll, setCharacters, characters}) => {

    const onSearch = (e) => {
        const filtro = personajes.filter((personaje) => {
            return personaje.id === Number(e.target.value) 
            || personaje.name.toLowerCase().includes(e.target.value)
            || personaje.species.toLowerCase().includes(e.target.value)
        })
        setCharacters({...characters, personajesActivos: filtro})
        if(e.key === 'Enter') e.target.value = ''
    }

    return (
    <div className="search">
        <input onKeyUp={onSearch} type="text" placeholder="Ingresar id del personaje"/>
        <br />
        <button onClick={getAll}>Obtener personajes</button>
    </div>
    )
}   
export default SearchBar