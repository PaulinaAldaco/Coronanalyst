import React,{useContext, useState} from 'react';
import {SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute} from './SidebarElements';
import {MyContext} from '../../contexts/MyContext'

const Sidebar = ({isOpen, toggle}) =>{
    const {rootState} = useContext(MyContext);
    const {isAuth, survey} = rootState;

    let SidebarButton;
    let SidebarLink1;

    if (isAuth){
        if(survey)
        SidebarLink1 = <SidebarLink onClick={toggle} to="/Resultados"> Resultados </SidebarLink>;
        else
        SidebarLink1 = <SidebarLink onClick={toggle} to="/Encuesta"> Encuesta </SidebarLink>;
        
        SidebarButton = <SideBtnWrap><SidebarRoute onClick={toggle} to="/SesionCerrada">Cerrar sesión</SidebarRoute></SideBtnWrap>
    }else{
        SidebarLink1 = <SidebarLink onClick={toggle} to="/Registro"> Registrarse </SidebarLink>
        SidebarButton = <SideBtnWrap><SidebarRoute onClick={toggle} to="/Login">Iniciar sesión</SidebarRoute></SideBtnWrap>
    }


    return(
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
                </SidebarMenu>
                {SidebarButton}
            </SidebarWrapper>
        </SidebarContainer>
    );
};

export default Sidebar;