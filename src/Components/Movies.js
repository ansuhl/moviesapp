import { movies } from "./GetMovies";

import React, { Component } from 'react'

export default class Movies extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         parr:[1]
      }
    }
    
    render() {
    let allMovies=movies.results;
    const {parr}=this.state;
    return (
      <>
        {
          
          allMovies.length==0?<div className="spinner-border text-secondary" role="status">
                             <span className="visually-hidden">Loading...</span>
                             </div>:
                             <div className="movies-list">
                                 {/* <h1 style={{textAlign:'center'}}>Trending</h1> */}
                                 {
                                     allMovies.map((allMovies)=>{
                                         return <div>
                                                     
                                                                              <div className="card movies-card">
                                                                              <img src={`https://image.tmdb.org/t/p/original${allMovies.backdrop_path}`} className="card-img-top banner-img" style={{height:'40vh',width:'20vw'}} alt={`${allMovies.title}`}/>
                                                                              {/* <div className="card-body"> */}
                                                                                  <h5 className="card-title movies-title">{`${allMovies.title}`}</h5>
                                                                                  <p className="card-text movies-text">{`${allMovies.overview}`}</p>
                                                                                  <div className="button-wrapper" style={{display:'flex',width:'100%',justifyContent:'center'}}>
                                                                                    <a href="#" className="btn btn-primary movies-button">Add To Favourite</a>
                                                                                  </div>
                                                                              {/* </div> */}
                                                                              </div> 
                                                </div>
                                     })
                                 }
                             </div>                                    
     }
     <div style={{display:'flex',justifyContent:'center'}}>
        <nav aria-label="Page navigation example">
            <ul className="pagination">
                <li className="page-item"><a className="page-link" href="#">Previous</a></li>
                {/* <li className="page-item"><a className="page-link" href="#">1</a></li>
                <li className="page-item"><a className="page-link" href="#">2</a></li>
                <li className="page-item"><a className="page-link" href="#">3</a></li> */}

                {
                    parr.map((parr)=>{
                        return <><li className="page-item"><a className="page-link" href="#">{parr}</a></li></>
                    })
                }

                <li className="page-item"><a className="page-link" href="#">Next</a></li>
            </ul>
        </nav>
        </div>
      </>
    )
  }
}
