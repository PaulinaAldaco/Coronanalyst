import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Inicio from './Inicio';
import SobreNosotros from './SobreNos';
import Registro from './pantallas/Registro';
import Login from './Login';
import Encuesta from './Encuesta';
import SesionCerrada from './pantallas/SesionCerrada';
import DatosPersonales from './DatosPersonales'



function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Inicio} exact />
        <Route path='/SobreNosotros' component={SobreNosotros} exact />
        <Route path='/Registro' component={Registro} exact />
        <Route path='/Login' component={Login} exact />
        <Route path='/Encuesta' component={Encuesta} exact />
        <Route path='/SesionCerrada' component={SesionCerrada} exact />
        <Route path='/DatosPersonales' component={DatosPersonales} exact />
      </Switch>
    </Router>
  );
}

export default App;