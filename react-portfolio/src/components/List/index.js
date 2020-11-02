import React, { Component } from 'react'
//import React from 'react'
import "./style.css";
import apps from "../apps.json";

class List extends Component {
   constructor(props) {
      super(props) //since we are extending class Table so we have to use super in order to override Component class constructor
      this.state = {apps};
   }
   renderTableData() {
    return this.state.apps.map((app, index) => {
       const {name, description, technology, repo, deployed} = app //destructuring
       return (
          <tr key={name}>
             <td>{name}</td>
             <td>{description}</td>
             <td>{technology}</td>
             <td>{repo}</td>
             <td>{deployed}</td>
          </tr>
       )
    })
 }

 renderTableHeader() {
    let header = Object.keys(this.state.apps[0])
    return header.map((key, index) => {
       return <th key={index}>{key.toUpperCase()}</th>
    })
 }

 render() {
    return (
       <div>
          {/* <h1 id='title'>React Dynamic Table</h1> */}
          <table id='app'>
             <tbody>
                <tr>{this.renderTableHeader()}</tr>
                {this.renderTableData()}
             </tbody>
          </table>
       </div>
    )
 }
}

export default List;