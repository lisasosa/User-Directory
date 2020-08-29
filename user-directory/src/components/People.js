import React from 'react';
// import logo from './logo.svg';

import * as moment from 'moment'

 function People (props) {
    return (
        <div className="People">
        <table>
        <tbody>
        {props.results.map((item, index) => {
          return (<tr key={index}>
          <td><img src={item.picture.thumbnail} alt="person-pic"/></td>
          <td>{item.name.first} {item.name.last}</td>
          <td>{item.cell}</td>
          <td>{item.email}</td>
          <td>{moment(item.dob.date).format("l")}</td>
          </tr>)
        })}
        </tbody>
        </table>
       
        </div>
      );
    }
  
  
  export default People;
  