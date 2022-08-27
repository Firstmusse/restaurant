import { useState } from "react";
import ButtonSearch from "../ButtonSearch/ButtonSearch"

import './SearchBlock.css'

function SearchBlock() {

  const [inputValue, setInputValue] = useState('')
  console.log(inputValue);
  return (
    <form className="search-container">
        <input onChange={(e)=>setInputValue(e.target.value)} className="search-input" value={inputValue} type="text" placeholder="Например: корейская кухня" />
        <ButtonSearch/>
    </form>
  )
}
export default SearchBlock