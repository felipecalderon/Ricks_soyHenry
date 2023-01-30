const SearchBar = ({onSearch}) => {
    return (
    <div className="search">
        <input onKeyUp={onSearch} type="text" placeholder="Ingresar id del personaje"/>
        <hr />
    </div>
    )
}   
export default SearchBar