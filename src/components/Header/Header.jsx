import React from 'react';
import { useTelegram } from '../../hooks/useTelegram';
import './Header.css'
import Button from '../Button/Button'

const Header = () => {

   const {user, onClose} = useTelegram()

    return (
        <div children={'header'}>
            <Button onClick={onClose}>закрити</Button>
            <span className={'username'}>{user?.username}</span>
        </div>
    );
};

export default Header;