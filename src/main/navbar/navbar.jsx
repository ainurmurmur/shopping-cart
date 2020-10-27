import React from 'react';
import { observer } from 'mobx-react';
import classes from './navbar.module.scss';
import router from '../../store/router';

const NavBar = observer(class NavBar extends React.Component {
    render() {
        return (
            <div>
                <ul>
                    <li onClick={() => router.moveTo('items')}>
                        Каталог
                    </li>
                    <li>
                        Почему выбирают нас
                    </li>
                    <li>
                        O пончиках
                    </li>
                    <li>
                        Контакты
                    </li>
                </ul>
            </div>
        )
    }
})


export default NavBar;