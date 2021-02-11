import logo from './logo.svg';
import './App.css';
import Todoitem from './components/Todoitem'
import { Component } from 'react';
import checkall from './img/checkall.png'

class App extends Component {
  constructor() {
    super();
    this.state = {
      newItem: '',
      todoItems : [{title:'mua bim bim', isComplete: true}, {title:'chơi với gấu', isComplete: true}, {title:'ăn cơm', isComplete: false}]
    }
  }
  onItemClick(item){
    return (event) =>{
      const {todoItems} = this.state
      const isComplete = item.isComplete
      const index = todoItems.indexOf(item)
      this.setState({
        newItem: '',
        todoItems:[
          ...todoItems.slice(0, index),
          {
            ...item,
            isComplete: !isComplete
          },
          ...todoItems.slice(index+1)
        ]
      }
      )
    }
  }
  onKeyUp(){
    return (event) =>{
      if(event.keyCode ===13){
        let text = event.target.value
        text = text.trim();
        this.setState({
          newItem: '',
          todoItems: [
            {title: text, isComplete: false},
            ...this.state.todoItems
          ]
        })
      }
    }
  }
  onChange(){
    return(event) =>{
      this.setState({
        newItem: event.target.value
      })
    }
  }
  onClickImg(item){
    console.log(item)
    return (event) =>{
      this.setState({
        todoItems: [
          {
           
          }
        ]
      })
    }
  }
  render(){
    const {todoItems, newItem} = this.state
    return (
      <div className="App">
        <div className="header">
          <img src = {checkall} width={32} height={32} onClick = {this.onClickImg()}></img>
          <input value ={newItem} onChange={this.onChange()} type = "text" placeholder="Thêm công việc" onKeyUp = {this.onKeyUp()}/>
        </div>
          {
             todoItems.map((item, index) => <Todoitem
             index ={index}
             item ={item}
             onClick ={this.onItemClick(item)}/>)
          }     
      </div>
    );
  }
}

export default App;
