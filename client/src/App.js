import React from 'react';
import {Container} from 'semantic-ui-react';
import {Route, Switch} from 'react-router-dom';
import Home from './components/shared/Home';
import About from './components/shared/About';
import NoMatch from './components/shared/NoMatch';
import NavBar from './components/shared/NavBar';
import Pokedex from './components/pokemon/Pokedex';
import PokemonShow from './components/pokemon/PokemonShow';


const App = () => (
<>
  <NavBar/>
  <Container>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/about' component={About}/>
      <Route exact path='/pokedex' component={Pokedex}/>
      <Route exact path='/Pokemon/:id' component={PokemonShow}/>
      <Route component={NoMatch}/>
    </Switch>
  </Container>
</>
)

export default App;
