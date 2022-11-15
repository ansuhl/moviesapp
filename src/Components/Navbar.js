import { movies } from "./GetMovies";
import React, { Component } from 'react'
export default class Navbar extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         
      }
    }
    
    render() {
    let allMovies=movies.results;
    console.log(allMovies);
    return (
        <>
            <div style={{display:'flex',backgroundColor:'blue',padding:'0.5'}}>
                <h1 style={{marginTop:'15px'}}>Movies</h1>
                <h3 style={{marginLeft:'20px',marginTop:'20px'}}>Favourites</h3>
            </div>
        </>
    )
  }
}
{/*  */}