export const CHARACTERS = "CHARACTERS"
export const FAVOURITES = "FAVOURITES"
export const FILTER = 'FILTER'

export const getCharacters = () => {
    return async (dispatch) => {
        try {
            const res = await fetch('http://localhost:3001/')
            const data = await res.json()
            return dispatch({type: CHARACTERS, payload: data});
        } catch (error) {
            console.log(error)
        }
    }
}

export const filterCharacter = (id) => {
    return {type: FILTER, payload: id}
}

export const addFav = (id) => {
    return {type: FAVOURITES, payload: --id}
}

