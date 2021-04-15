import React from 'react';
import {SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute} 
    from './SidebarElements';

const Sidebar = ({isOpen, toggle}) =>{
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
                    <SidebarLink onClick={toggle} to="/Login">
                        Registrarse
                    </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute onClick={toggle} to="/Login">
                        Iniciar sesión
                    </SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    );
};

export default Sidebar;