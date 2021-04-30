import React, { useContext, useState } from 'react';
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute } from './SidebarElements';
import { MyContext } from '../../contexts/MyContext'

const Sidebar = ({ isOpen, toggle }) => {
  const { rootState } = useContext(MyContext);
  const { isAuth, survey, type, profile } = rootState;

  let SidebarButton;
  let SidebarLink1;
  let SidebarLink2;

  if (isAuth) {
    if (type === "admin") {
      SidebarLink1 = <SidebarLink onClick={toggle} to="/AdministrarEditores"> AdministrarEditores </SidebarLink>;
      SidebarLink2 = <SidebarLink onClick={toggle} to="/Resultados"> Resultados </SidebarLink>;
    }
    else if (type === "general") {
      if (profile)
        if (survey)
          SidebarLink1 = <SidebarLink onClick={toggle} to="/Resultados"> Resultados </SidebarLink>;
        else
          SidebarLink1 = <SidebarLink onClick={toggle} to="/Encuesta"> Encuesta </SidebarLink>;
      else
        SidebarLink1 = <SidebarLink onClick={toggle} to="/DatosPersonales"> Datos Personales </SidebarLink>;
    }
    else if (type == "editor") {
      SidebarLink1 = <SidebarLink onClick={toggle} to="/Resultados"> Resultados </SidebarLink>;
      SidebarLink2 = <SidebarLink onClick={toggle} to="/ResultadosEditor"> Encuestas contestadas </SidebarLink>;
    }
    SidebarButton = <SideBtnWrap><SidebarRoute onClick={toggle} to="/SesionCerrada">Cerrar sesión</SidebarRoute></SideBtnWrap>
  } else {
    SidebarLink1 = <SidebarLink onClick={toggle} to="/Registro"> Registrarse </SidebarLink>
    SidebarButton = <SideBtnWrap><SidebarRoute onClick={toggle} to="/Login">Iniciar sesión</SidebarRoute></SideBtnWrap>
  }

  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink onClick={toggle} to="/">
            Inicio
                    </SidebarLink>
          <SidebarLink onClick={toggle} to="/SobreNosotros">
            Sobre Nosotros
                    </SidebarLink>
          {SidebarLink1}
          {SidebarLink2}
        </SidebarMenu>
        {SidebarButton}
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;