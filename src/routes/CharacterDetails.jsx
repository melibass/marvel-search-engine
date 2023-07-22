import React, { useState, useEffect } from 'react';

//import hooks
import { useParams } from 'react-router-dom';

//import fetchHero
import { fetchHero } from '../utils/utils';

const CharacterDetails = () => {
  let {id} = useParams();
  
  const [hero, setHero] = useState();
  

  useEffect(()=>{
    fetchHero(id)
    .then(data=> setHero(data.data.results[0]))
    .catch(err=>console.error(err))
  },[] )

  if (!hero) return;

  return (
    <div className='container large'>
      <div className='hero__details-container'>
        <img 
          src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`} 
          alt='full size'/>
        <div className='hero__details'> 
          <h4> Name </h4>
          <p>{hero.name} </p>
          {hero.description ? (
          <>
           <h4>Description</h4>
            <p>{hero.description}</p>
          </>) : null}
        </div>
        <div className='hero__series'>
          <h4>Series</h4>
          <ul>
            {
              hero.series.items.map(serie => <li key={Math.random()*1000}>{serie.name}</li>)
            }
          </ul>
        </div>
      </div>
    </div>
  );
} 

export default CharacterDetails;