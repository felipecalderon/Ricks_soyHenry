import { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import Cards from "./Cards";

const URL = 'http://localhost:3001'

const apiRYM = async (url) => {
  const res = await fetch(url);
  const data = await res.json();
  return data;
}

function Home() {
    const [characters, setCharacters] = useState({
        personajesActivos: [],
        allPersonajes: []
        })

    const getAll = (e) => {
        e.preventDefault();
        apiRYM(URL).then(data => {
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
        setCharacters({personajesActivos: data, allPersonajes: data}) 
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
            : 'No hay personajes'
        }
      </div>
    </>
  );
}

export default Home