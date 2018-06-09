import React, { Component } from 'react';
import logo from './todobackground.jpg';
import './App.css';
import { TodoList } from './TodoList';

var todoItems = ['Todo1', 'Todo2', 'Todo3'];
class App extends Component {
	constructor(props){
	super(props);
	this.state={
		todoItems:[],
		text:"",
		textn:parseInt(""),
		textg:parseInt(""),
		texte:"",
		isButtonDisabled:false,
		isbuttondisabled:false
	};
	this.addItem=this.addItem.bind(this);
	this.handleChange=this.handleChange.bind(this);
	this.handle=this.handle.bind(this);
	this.deleteItem=this.deleteItem.bind(this);
	this.handle2=this.handle2.bind(this);
	this.getItem=this.getItem.bind(this);
	this.handle3=this.handle3.bind(this);
	this.editItem=this.editItem.bind(this);
	}
	
  render() {
    return (
      <div
	  
        style={{
          height: '100vh',
          width: '100vw',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
		  backgroundColor:'#FFFFFF',
		  backgroundImage:"url("+ logo +")",
		  backgroundSize:'cover',
		  backgroundPosition:'center'
        }}
      >
		<div 
			style={{
				backgroundColor:'#99ccff',
				border:'solid 8px #2c3033',
				borderRadius: '20px',
				boxShadow: '10px 5px 5px grey'
			}}
		>
			<div 
				style={{
					borderStyle:'solid',
					padding:'15px',
					backgroundColor: '#33cccc',
					postision:'absolute',
					borderRadius:'10px 10px 0 0px'
				
				}}
		
			>	
			
				<form onSubmit={this.addItem}>
					<input type="text" placeholder="Todo Item" value={this.state.text} onChange={this.handleChange}/>
					<button type="submit">Add</button>
				</form>	
			</div>
			<div
				style={{
					borderStyle:'solid',
					backgroundColor:'#99ccff'
				}}
			>
			<TodoList todoItems={todoItems} />
			</div>
			<div 
				style={{
					borderStyle:'solid',
					padding:'15px',
					backgroundColor: '#33cccc'
				
				}}
		
			>	
				<form onSubmit={this.deleteItem}>
					<input type="number" placeholder="Enter note number to remove" value={this.state.textn} onChange={this.handle}/>
					<button type="submit">Delete</button>
				</form>
			</div>
			<div 
				style={{
					borderStyle:'solid',
					padding:'15px',
					backgroundColor: '#33cccc'
				
				}}
		
			>	
				<form onSubmit={this.getItem}>
					<input type="number" placeholder="Enter note number to edit" value={this.state.textg} onChange={this.handle2}/>
					<button disabled={this.state.isButtonDisabled} type="submit">Get</button>
				</form>
			</div>
			<div 
				style={{
					borderStyle:'solid',
					padding:'15px',
					borderRadius:'0px 0px 10px 10px ',
					backgroundColor: '#33cccc'
				
				}}
		
			>	
				<form onSubmit={this.editItem}>
					<input type="text"  value={this.state.texte} onChange={this.handle3}/>
					<button disabled={this.state.isbuttondisabled} type="submit">Edit</button>
				</form>
			</div>
		</div>
      </div>
    );

  }
	handle2(e){
		this.setState({
			textg:e.target.value
		});
	}
	handle3(e){
		this.setState({
			texte:e.target.value
		});
	}
	handle(e){
		this.setState({
			textn:e.target.value
		});
	}
	handleChange(e){
		this.setState({
			text:e.target.value
		});
	}
	getItem(e){
		if(this.state.textg!==0){
			this.setState({
				isButtonDisabled:true
			});
			this.setState({
				isbuttondisabled:false
			});
			this.setState((prevState)=>{
				return{
					texte:todoItems[this.state.textg-1]
			};
			});
		}
		e.preventDefault();
	}
	editItem(e){
		if(this.state.texte!==0){
			this.setState({
				isButtonDisabled:false
			});
			this.setState({
				isbuttondisabled:true
			});
			var listitems=[];
		  for(var i=0;i<todoItems.length;i++){
			  if(i===this.state.textg-1){
				  listitems.push(this.state.texte);
				  continue;
			  }
			  listitems.push(todoItems[i]);
		  }
			todoItems=[];
			for(var i=0;i<listitems.length;i++){
			  todoItems.push(listitems[i]);
		  }		
			var newItem={
			  texte:this.state.texte,
			    id:Date.now()
		  };
			this.setState((prevState)=>{
				return{
					texte:"",
					textg:0
			};
			});
		}
		e.preventDefault();
	}
	deleteItem(e){
		if(this.state.textn!==""){
		  var listitems=[];
		  for(var i=0;i<todoItems.length;i++){
			  if(i===this.state.textn-1){
				  continue;
			  }
			  listitems.push(todoItems[i]);
		  }
			todoItems=[];
			for(var i=0;i<listitems.length;i++){
			  todoItems.push(listitems[i]);
		  }
		var newItem={
			  textn:this.state.textn,
			    id:Date.now()
		  };
		  console.log(this.state.textn);
		  console.log(newItem);
		  this.setState((prevState) => {
      return { 
        todoItems: prevState.todoItems.concat(newItem) ,
		text:""
      };
    });
		
	  }
	  		e.preventDefault();
	}
  addItem(e){
	  if(this.state.text!==""){
		  var listitems=[];
		  var pos=-1;
		  for(var i=0;i<todoItems.length;i++){
			  if(todoItems[i]==="Todo1" && pos===-1){
				  listitems.push(this.state.text);
				  pos=0;
				  continue;
			  }
			  else if(todoItems[i]==="Todo2"&& pos===-1){
				  listitems.push(this.state.text);
				  pos=0;
				  continue;
			  }
			  else if(todoItems[i]==="Todo3"&& pos===-1){
				  listitems.push(this.state.text);
				  pos=0;
				  continue;
			  }
			  
			  listitems.push(todoItems[i]);
		  }
		  if(pos===-1){
			  listitems.push(this.state.text);
		  }
			todoItems=[];
			for(var i=0;i<listitems.length;i++){
			  todoItems.push(listitems[i]);
		  }
		var newItem={
			  text:this.state.text,
			    id:Date.now()
		  };
		  this.setState((prevState) => {
      return { 
        todoItems: prevState.todoItems.concat(newItem) ,
		text:""
      };
    });
		
	  }
	  e.preventDefault();
  }
  
}

export default App;
