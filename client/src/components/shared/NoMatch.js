import React from 'react';
import {Header} from 'semantic-ui-react';
import {Link} from 'react-router-dom';


const NoMatch = () => (
  <>
    <Header>404 page not found</Header>
    <Link to='/'>
      Go Home
    </Link>
  </>
  
)

export default NoMatch;
