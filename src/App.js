import React from "react";
import { Switch, Route, Link } from 'react-router-dom'

const App = () => {
  return (
    <>
    <div className='homePageHeader'>
      <h1>Lambda Eats</h1>
      <Link to='/'
        className='order-pizza' >
        <button className='order-pizza'>Pizza?</button>
      </Link>
    </div>

    <Switch>
      <Route path='/'>
        <MyForm />
      </Route>
      <Route>

      </Route>
    </Switch>
    </>
  );
};
export default App;
