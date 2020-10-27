import React from 'react';
import {observer} from 'mobx-react';
import {classes} from './content.module.scss';


const Content = observer (class Content extends React.Component{
    render(){
        return (
           <div>
               <div>
                   Text
                   <button>Заказать</button>
               </div>
               <div>
                   photo
               </div>
           </div>
        )
    }
}) 


export default Content;