import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Inicio from './Inicio';
import SobreNosotros from './SobreNos';
import Registro from './pantallas/registro';
import Login from './Login';


function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Inicio} exact />
        <Route path='/SobreNosotros' component={SobreNosotros} exact />
        <Route path='/Registro' component={Registro} exact />
        <Route path='/Login' component={Login} exact />
      </Switch>
    </Router>
  );
}

export default App;