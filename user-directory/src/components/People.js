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
          <td><img src={item.picture.large}/></td>
          <td>{item.name.first} {item.name.last}</td>
          <td>{item.cell}</td>
          <td>{item.email}</td>
          <td>{moment(item.dob.date).format("l")}</td>
          </tr>)
        })}
        </tbody>
        </table>
        {[1,2,3,4]}
        </div>
      );
    }
  
  
  export default People;
  