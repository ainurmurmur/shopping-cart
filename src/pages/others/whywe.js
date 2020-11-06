import React from 'react';
import { observer } from 'mobx-react';
import classes from './other.module.scss';

const WhyWe = observer(class WhyWe extends React.Component {
    render() {
        return (
            <div className={classes.content}>
                 <h3>
                        Почему выбирают нас
                    </h3>
                <div className={classes.content__whywe}>
                        <div className={classes.content__whywe_area1}>
                        <img src='./area1.PNG' alt='area1' />
                            <h4>
                                Сделаны вручную
                            </h4>
                        </div >
                        <div className={classes.content__whywe_area2}>
                        <img src='./area2.PNG' alt='area2' />
                            <h4>
                                Натуральные продукты
                            </h4>
                        </div>
                        <div className={classes.content__whywe_area3}>
                        <img src='./area3.PNG' alt='area3' />
                            <h4>
                                Удобная оплата
                            </h4>
                        </div>
                        <div className={classes.content__whywe_area4}>
                        <img src='./area4.PNG' alt='area4' />
                            <h4>
                               Доставка по Алматы
                            </h4>
                        </div>

                    </div>
            </div>
        )
    }
})


export default WhyWe;