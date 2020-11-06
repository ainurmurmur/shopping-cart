import React from 'react';
import { observer } from 'mobx-react';
import classes from './content.module.scss';
import router from '../../store/router';

const Content = observer(class Content extends React.Component {
    render() {
        return (
            <div className={classes.content}>
                <div className={classes.content__intro}>
                    <h1>
                        Свежие пончики из натуральных продуктов
                    </h1>
                    <h4>
                        При покупке 2-х пончиков = кофе с собой в подарок
                    </h4>
                    <button className={classes.content__intro_btn} onClick={() => router.moveTo('items')}>
                        Заказать
                    </button>
                </div>
                <div className={classes.content__photo}>
                    <img src='./donutsall.PNG' alt='mainphoto' />
                </div>
            </div>
        )
    }
})


export default Content;