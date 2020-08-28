import React from 'react';
import People from './components/People'
// import logo from './logo.svg';
import './App.css';
import * as moment from 'moment'

 class App extends React.Component {
   constructor(props) {
     super(props) 
     this.state = {
       results: []
     }
   }
   componentDidMount(){
    fetch('https://randomuser.me/api/?results=50')
    
    .then(response => response.json())
    .then(data => {
      console.log(data)
      this.setState({results:data.results})})

   }
 
  render(){
    return (
      <div className="App">
      <People results = {this.state.results}/>
      </div>
    );
  }
}

export default App;
