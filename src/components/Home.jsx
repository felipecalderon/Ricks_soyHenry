import { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import Cards from "./Cards";

const URL = 'https://rickandmortyapi.com/api/character/'

const apiRYM = async (url) => {
  const res = await fetch(url);
  const data = await res.json();
  return data;
}

function Home() {
    const [cantidad, setCantidad] = useState(null)
    const [characters, setCharacters] = useState({
        personajesActivos: [],
        allPersonajes: []
        })

    const getAll = (e) => {
        e.preventDefault();
        let random = Math.floor(Math.random()*cantidad)
        apiRYM(URL+random).then(data => {
          setCharacters({...characters, personajesActivos: [data]})
    })
  }

  const onClose = (e) => {
    const dataFilter = characters.personajesActivos.filter((per) => per.id !== Number(e.target.id))
    setCharacters({
      ...characters,
      personajesActivos: dataFilter
    })
  }
  useEffect(() => {
    apiRYM(URL).then(data => { 
        setCharacters({personajesActivos: data.results, allPersonajes: data.results}) 
        setCantidad(data.info.count)
    })
  }, [])
  return (
    <>
      <SearchBar 
        getAll={getAll} 
        personajes={characters.allPersonajes}
        setCharacters={setCharacters}
        characters={characters}
        />
      <div className="App">
        {
          characters.personajesActivos.length > 0
            ? <Cards 
                characters={characters.personajesActivos} 
                onClose={onClose}
              />
            : 'Presione botón para obtener personajes'
        }
      </div>
    </>
  );
}

export default Home