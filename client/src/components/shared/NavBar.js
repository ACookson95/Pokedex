import React from 'react';
import { Menu, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const Navbar = () => (

  <Menu>
    <Link to='/'>
      <Menu.Item>
        <Icon name="home"/>
        Home
      </Menu.Item>
    </Link>
    <Link to='/about'>
      <Menu.Item>
        <Icon name="question circle" color="blue"/>
        About
      </Menu.Item>
    </Link>
    <Link to='/pokedex'>
      <Menu.Item>
        <Icon name="heartbeat" color="red"/>
        Pokedex
      </Menu.Item>
    </Link>
  </Menu>

)



export default Navbar