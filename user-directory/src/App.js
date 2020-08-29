import React from 'react';
import People from './components/People'
// import logo from './logo.svg';
import './App.css';
import * as moment from 'moment'

 class App extends React.Component {
   constructor(props) {
     super(props) 
     this.state = {
       searchValue: "",
       results: []
     }
   }
   componentDidMount(){
     //life cycle method
    fetch('https://randomuser.me/api/?results=50')
    
    .then(response => response.json())
    .then(data => {
      console.log(data)
      this.setState({results:data.results})
    })

   }
   search =  (e) => {
     console.log(e.target.value)
     this.setState({searchValue: e.target.value})
   }
 
  render(){
    var results = this.state.results
    var searchValue = this.state.searchValue.toLowerCase()
    if (searchValue) {
      results = results.filter((item) => {
        const fullName = (item.name.first + " " + item.name.last).toLowerCase()
    
        return fullName.includes(searchValue)
        //returns true or false
      }) 
    }
    return (
      <div className="App">
      <input onKeyUp = {this.search}/>
      <People results = {results}/>
      </div>
    );
  }
}

export default App;
