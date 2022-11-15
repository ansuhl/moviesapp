import { movies } from "./GetMovies";
import React, { Component } from 'react'
import axios from 'axios'

export default class Banner extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
          data:[]
        }
    }
    
    render() {
    let allMovies=movies.results[0];
    // let currMovie=allMovies.map((allMovies)=>{
    //     return <div className="card">
    //     <img src={`https://image.tmdb.org/t/p/original${allMovies.backdrop_path}`} className="card-img-top" alt={`${allMovies.title}`}/>
    //     <div className="card-body">
    //         <h5 className="card-title">{`${allMovies.title}`}</h5>
    //         <p className="card-text">{`${allMovies.overview}`}</p>
    //         <a href="#" className="btn btn-primary">Go somewhere</a>
    //     </div>
    //     </div>
    // })
    return (
      <>
        {
          
                 allMovies.length==0?<div class="spinner-border text-secondary" role="status">
                                    <span class="visually-hidden">Loading...</span>
                                    </div>:
                                    <div className="card banner-card">
                                                                                     <img src={`https://image.tmdb.org/t/p/original${allMovies.backdrop_path}`} className="card-img-top banner-img" alt={`${allMovies.title}`}/>
                                                                                     {/* <div className="card-body"> */}
                                                                                         <h5 className="card-title banner-title">{`${allMovies.title}`}</h5>
                                                                                         <p className="card-text banner-text">{`${allMovies.overview}`}</p>
                                                                                         {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                                                                                     {/* </div> */}
                                                                                     </div> 

                                                                                
                
            }
      </>
    );
  }
}


// <div className="card banner-card">
//                                                                                     <img src={`https://image.tmdb.org/t/p/original${allMovies.backdrop_path}`} className="card-img-top banner-img" alt={`${allMovies.title}`}/>
//                                                                                     {/* <div className="card-body"> */}
//                                                                                         <h5 className="card-title banner-title">{`${allMovies.title}`}</h5>
//                                                                                         <p className="card-text banner-text">{`${allMovies.overview}`}</p>
//                                                                                         {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
//                                                                                     {/* </div> */}
//                                                                                     </div> 