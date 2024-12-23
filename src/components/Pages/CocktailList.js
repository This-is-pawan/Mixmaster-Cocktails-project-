import React from 'react';
import { Link } from 'react-router-dom';

const CocktailList = ({ drinks }) => {
  // console.log(drinks);

  if (!drinks || drinks.length === 0) {
    return <h4 style={{ textAlign: 'center' }}>No matching results found...</h4>;
  }

  const formattedDrinks = drinks.map((item) => {
    const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } = item;
    return {
      id: idDrink,
      name: strDrink,
      image: strDrinkThumb,
      info: strAlcoholic,
      glass: strGlass,
    };
  });

  return (
    <div className="card-items">
      {formattedDrinks.map((drink) => {
        return (
          <div className="card" key={drink.id}>
            <img src={drink.image} alt={drink.name} className='drink-img' />
            <div className="card-info">
              <h3>{drink.name}</h3>
              <h4>{drink.info}</h4>
              <p>{drink.glass}</p>
              <div className="btn btn-danger px-5">
               <Link to={`/ ${drink.id}`}  className='detalis'>Details</Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CocktailList;
