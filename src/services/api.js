import axios from "axios"

export const getEstablishmentsList = async ()  => {
  const value = await axios.get('objectProject.json')
   return value.data 
}

  