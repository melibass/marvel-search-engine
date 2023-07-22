import React, { useState } from 'react';

//import components
import Container from '../components/Container';
import SearchBar from '../components/SearchBar';
import Grid from '../components/Grid';
import Card from '../components/Card';

const IMAGE_CHOSEN = 'portrait_fantastic'
export default function Home() {
    // heroes es la variable, setHeroes es la funcion que uso para modificarlo.
    const [ heroes, setHeroes ] = useState([]);

    let cards;

    if(heroes){
      cards = heroes.map((hero)=> 
        <Card 
          name={hero.name}
          id={hero.id}
          key={hero.id}
          thumbnail={`${hero.thumbnail.path}/${IMAGE_CHOSEN}.${hero.thumbnail.extension}`}
        />
      )
    }

  return (
    <Container>
        <h1>Discover Marvel Universe</h1>
        <SearchBar setter={setHeroes}/>
            <Grid>
                {cards ? cards : ''}
            </Grid>
            
    </Container>
  )
}
