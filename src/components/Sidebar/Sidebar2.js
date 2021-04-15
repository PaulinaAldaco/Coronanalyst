import React from 'react';
import {SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink} 
    from './SidebarElements';

const Sidebar2 = ({isOpen, toggle}) =>{
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
                    <SidebarLink onClick={toggle} to="/Encuesta">
                        Encuesta
                    </SidebarLink>
                    <SidebarLink onClick={toggle} to="/SesionCerrada">
                        Sesión Cerrada
                    </SidebarLink>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    );
};

export default Sidebar2;