/* 4️⃣ ***REDUCER*** 4️⃣ */

// Importa las action-types aquí.
import {
    CHARACTERS,
    FAVOURITES,
    FILTER
} from './actions';

const initialState = {
   personajes: [],
   favoritos: [],
};

const rootReducer = (state = initialState, {type, payload}) => {
   // eslint-disable-next-line default-case
   switch (type) {
   case FILTER: 
   const filtro = state.personajes.filter((personaje) => {
      return personaje.id === Number(payload) || personaje.nombre.toLowerCase().includes(payload)
  }) 
   return{
      ...state,
      personajes: filtro
   }
   
   case CHARACTERS: return{
       ...state,
       personajes: payload
    }
    
    case FAVOURITES: return{
       ...state,
       favoritos: [...state.favoritos, state.personajes[payload]]
    }

    default: return{
       ...state
    }
   }
 };
 
 export default rootReducer;
