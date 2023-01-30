/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import SearchBar from "../Search/SearchBar";
import Cards from "../Cards/Cards";
import { useDispatch, useSelector } from "react-redux";
import * as actions from '../../redux/actions'
import styles from './Home.module.css'

function Home() {
  const personajes = useSelector((state) => state.personajes)
  const favoritos = useSelector((state) => state.favoritos)

  const dispatch = useDispatch()

  const onClose = (e) => {
    console.log(e.target.id)
  }

  const onSearch = (e) => {
    personajes.filter((personaje) => {
        return personaje.id === Number(e.target.value) || personaje.nombre.toLowerCase().includes(e.target.value)
    }) 

    if(e.key === 'Enter') e.target.value = ''
  }

  const onFavorito = (e) => {
    if(favoritos.includes(personajes[e.target.id - 1])) return alert(`${personajes[e.target.id - 1].nombre} ya está en favoritos`)
    dispatch(actions.addFav(e.target.id))
    
  }
  
  useEffect(() => {
    dispatch(actions.getCharacters())
  }, [])

  return (
    <>
      <SearchBar 
        onSearch={onSearch}
        />
      <div className={styles.container}>
        {
          personajes.length > 0
            ? <Cards 
                favoritos={favoritos}
                personajes={personajes} 
                onClose={onClose}
                onFavorito={onFavorito}
              />
            : 'No hay personajes'
        }
      </div>
    </>
  );
}

export default Home