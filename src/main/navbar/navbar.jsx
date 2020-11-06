import React from 'react';
import { observer } from 'mobx-react';
import router from '../../store/router';

const NavBar = observer(class NavBar extends React.Component {
    render() {
        return (
            <div>
                <ul>
                    <li onClick={() => router.moveTo('items')}>
                        Каталог
                    </li >
                    <li onClick={() => router.moveTo('whywe')}>
                        Почему выбирают нас
                    </li>
                    <li onClick={() => router.moveTo('about')}>
                        O пончиках
                    </li>
                    <li onClick={() => router.moveTo('contacts')}>
                        Контакты
                    </li>
                </ul>
            </div>
        )
    }
})


export default NavBar;