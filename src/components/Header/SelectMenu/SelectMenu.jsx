import { useState } from 'react';
import './SelectMenu.css'

function SelectMenu() {
  const openSelectList = (e) => {
    e.target.nextSibling.classList.toggle('active')
  }
  let [activeState, setActiveState] = useState(false);

  
  return (
    <li className='select-menu'>
      <span className={activeState ? 'active' : ''}onClick={() => setActiveState(activeState = !activeState)}>Все заведении</span>
    <ul>
      <li><a href="#" className="select-item">Кафе</a></li>
      <li><a href="#" className="select-item">Рестораны</a></li>
      <li><a href="#" className="select-item">Кофейни</a></li>
      <li><a href="#" className="select-item">Бары</a></li>
      
    </ul>
    </li>
  )
}
export default SelectMenu