import React from 'react';
import {Icon, Menu} from "semantic-ui-react";
import {useAuth} from '../../../hooks';
import './TopMenu.scss';

export function TopMenu() {
    const {auth, logout} = useAuth(); 
    //console.log("auth.me -->", auth.me);

    const renderName = () => {
        if (auth.me?.first_name && auth.me?.last_name) {
            return `Tienda: ${auth.me.first_name}`;
        }
        return `Usuario: ${auth.me?.username}`;
    }
  return (
    <Menu fixed='top' className='top-menu-admin'>
        <Menu.Item className='top-menu-admin__logo'>
            <p>MesaQR Admin</p>
        </Menu.Item>

        <Menu.Menu position='right'>
            <Menu.Item>
                <Icon name='user circle' />
                <span>{renderName()}</span>
            </Menu.Item>
            <Menu.Item onClick={logout}>
                <Icon name='log out' />
                <span>Salir</span>
            </Menu.Item>
        </Menu.Menu>
    </Menu>
  )
}
