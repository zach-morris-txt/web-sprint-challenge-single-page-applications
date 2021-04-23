import React from "react";
import { Switch, Route, Link } from 'react-router-dom'

const App = () => {
  return (
    <>
    <div className=''>
      <h1>Lambda Eats</h1>
      <Link to='/'>
        <button className=''>Home</button>
      </Link>
      <Link to='/pizza'>
        <button id='.order-pizza'>Pizza?</button>
      </Link>
    </div>

    <Switch>
      <Route path='/pizza'>
        <> </>
      </Route>
      <Route path='/'>
        <> </>
      </Route>
    </Switch>
    </>
  );
};
export default App;
