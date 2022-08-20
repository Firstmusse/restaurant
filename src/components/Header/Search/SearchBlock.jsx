import ButtonSearch from "../ButtonSearch/ButtonSearch"

import './SearchBlock.css'

function SearchBlock() {
  return (
    <form className="search-container">
        <input className="search-input" type="text" placeholder="Например: корейская кухня" />
        <ButtonSearch/>
    </form>
  )
}
export default SearchBlock