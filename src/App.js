import React from 'react';

import {
  BrowserRouter, 
  Route,
  Switch
} from 'react-router-dom'


//Components import
import Index from './Components/Pages/Index'


function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Index}></Route>
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
