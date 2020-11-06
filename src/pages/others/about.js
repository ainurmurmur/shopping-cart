import React from 'react';
import { observer } from 'mobx-react';
import classes from './other.module.scss';
import donutsAbout from '../../Images/donuts1.PNG'

const About = observer(class About extends React.Component {
    render() {
        return (
                <div className={classes.content__about}>
                    <div className={classes.content__about_photo}>
                        <img src={donutsAbout} alt='donut'  className={classes.content__about_photo_size}/>
                    </div>
                    <div className={classes.content__about_text}>
                    <h3>
                        О пончиках
                    </h3>
                    <p>
                    Сладкий глазированный пончик сначала покорил Америку, после весь мир. Ему посвящены памятники. Пончик сегодня представляют в разных вариациях и с невообразимыми начинками. 
Никто на самом деле и не знает, когда и кем были изобретены <strong>пончики</strong>.
<br></br><br></br>
 Пончики изначально выглядели как длинный кусок теста, а не колечко, как сегодня. В Америке больше распространены пончики в форме колечек. 
 <br></br><br></br>
Как только его не называют в разных странах мира! Например, в Израиле пончики именуются  <strong>sufganiyah</strong>. Во Франции имеется всем известный beignet — пончик с начинкой, <strong>в США готовят donut</strong>.
                    </p>
                    </div>
                    <div className={classes.content__about_photo}>
                    <img src={donutsAbout}  alt='donut'  className={classes.content__about_photo_size}/>
                    </div>
                </div>
        )
    }
})


export default About;