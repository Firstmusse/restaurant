import axios from "axios";

import {formatDate} from '../utils/dateFormater'

export const getCategory = async () => {
  const value = await axios.get(
    "https://still-forest-37543.herokuapp.com/category/"
  );
  return value.data;
};

export const getCardsByCategoryId = async (id) => {
  const cards = await axios.get(
    `https://still-forest-37543.herokuapp.com/?category=${id}`
  );
  return cards.data;
};

export const getInfoCardById = async (cardInfoId) => {
  const cardInfo = await axios.get(
    `https://still-forest-37543.herokuapp.com/${cardInfoId}/`
  );
  return cardInfo.data;
};


export const getAction = async () =>{
  const action = await axios.get(
    "https://still-forest-37543.herokuapp.com/sale/"
  );
    const actions = action.data.map((item)=>{
      const formattedDate = formatDate(item.time_create)
        
      return {...item, date:formattedDate} 
    })
    

  
    return actions
}
