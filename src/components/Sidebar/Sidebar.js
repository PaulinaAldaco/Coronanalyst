import React from 'react';
import {SidebarContainer, Icon, CloseIcon} 
    from './SidebarElements';

const Sidebar = () =>{
    return(
        <SidebarContainer>
            <Icon>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="inicio">
                        Inicio
                    </SidebarLink>
                    <SidebarLink to="SobreNos">
                        Sobre Nosotros
                    </SidebarLink>
                    <SidebarLink to="Registro">
                        Iniciar sesión
                    </SidebarLink>
                    <SidebarLink to="Login">
                        Registrarse
                    </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to="/Login">
                        SignIn
                    </SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    );
};

export default Sidebar;