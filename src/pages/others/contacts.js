import React from 'react';
import { observer } from 'mobx-react';
import classes from './other.module.scss';
import SimpleMap from './map'

const Contacts = observer(class Contacts extends React.Component {
    render() {
        return (
            <div className={classes.content__contacts}>
                <h3>
                    Контакты
                    </h3>
                <div className={classes.content__contacts_blocks}>
                    <div className={classes.content__contacts_blocks_1}>
                        <p>8 727 339 08 10</p>
                    </div>
                    <div className={classes.content__contacts_blocks_2}>
                        <p>offers@bonpon.kz</p>
                    </div>
                    <div className={classes.content__contacts_blocks_3}>
                        <p>Республика Казахстан, г. Алматы, 050000, ул. Макатаева, 28/1</p>
                    </div>
                    <div className={classes.content__contacts_blocks_4}>
                        <p>working hours</p>
                    </div>
                </div>
                <div>
                    <SimpleMap />
                </div>
                </div>
        )
    }
})


export default Contacts;