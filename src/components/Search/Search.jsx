import './Search.css'
import { IoSearch } from "react-icons/io5";

const Search = () => {
  return (
    <div className="search-bar-container"> 
      <IoSearch className="search-icon" />
      <input
        type="text"
        placeholder="Buscar..."
        className={'search-input'}
      />
    </div>
  );
};

export default Search;