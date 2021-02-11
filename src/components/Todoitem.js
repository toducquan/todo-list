import React, { Component } from 'react';
import classNames from 'classnames';
import './Todoitem.css'
import check from '../img/check.png'
import uncheck from '../img/uncheck.png'
class Todoitem extends Component{
    render(){
        const { item, onClick } = this.props
        let url = uncheck
        if(item.isComplete){
            url = check
        }
        return(
            <div onClick = {onClick} className={classNames('Todoitem', {
                'Todoitem-complete': item.isComplete
            })}>
                <img src ={url} width= {32} height={32} />
                <p>{this.props.item.title}</p>
            </div>
        )
    }
}

export default Todoitem;