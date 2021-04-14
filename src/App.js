import React from 'react';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Inicio from './inicio';
import SobreNosotros from './SobreNos';
import Registro from './pantallas/registro';
import Login from './Login';


function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/Inicio' component={Inicio} />
        <Route path='/SobreNosotros' component={SobreNosotros} />
        <Route path='/Registro' component={Registro} />
        <Route path='/Login' component={Login} />
      </Switch>
    </Router>
  );
}

export default App;