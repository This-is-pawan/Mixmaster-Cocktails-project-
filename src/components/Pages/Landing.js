import axios from 'axios';
import React from 'react'
import { useLoaderData } from 'react-router-dom'
import CocktailList from './CocktailList';
const url='https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
// console.log(url);

export const Loader = async () => {
  const searchTerm='margarita';
  const response=await axios.get(`${url}${searchTerm}`)
  // console.log(response);
  
  return {drinks:response.data.drinks,searchTerm}

};

const Landing = () => {
  const {drinks,searchTerm} = useLoaderData();
  console.log(drinks); 
  
  return <>
    <CocktailList drinks={drinks}/>
  </>;
};
export default  Landing