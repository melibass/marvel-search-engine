import React, { useState } from 'react';

//import components
import Container from '../components/Container';
import SearchBar from '../components/SearchBar';
import Grid from '../components/Grid';

export default function Home() {
    // heroes es la variable, setHeroes es la funcion que uso para modificarlo.
    const [ heroes, setHeroes ] = useState([]);
  return (
    <Container>
        <h1>Discover Marvel Universe</h1>
        <SearchBar setter={setHeroes}/>
            <Grid>
                <div>1</div>
                <div>2</div>
                <div>3</div>
                
            </Grid>
            
    </Container>
  )
}
