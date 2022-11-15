import { movies } from "./GetMovies";
import axios from 'axios'
import React, { Component } from 'react'

export default class Movies extends Component {
    constructor(props) {
      console.log('constructor called');
      super(props)
      
      this.state = {
         parr:[1],
         currPage:1,
         moviesData:[]
      }
    }
    
    async componentDidMount(){
        console.log('component did mount');
        const res=await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=a3dceeab2b15db48360cc5d20a05ae69&language=en-US&page=${this.state.currPage}`); 
        const data=await res.data.results;
        console.log(data);
        this.setState({
          moviesData:[...data]
        })
        console.log('mounting done');
    }

    changeMovies=async()=>{
        const res=await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=a3dceeab2b15db48360cc5d20a05ae69&language=en-US&page=${this.state.currPage}`); 
        const data=await res.data.results;
        console.log(data);
        this.setState({
        moviesData:[...data]
        })
    }

    handelRight=()=>{
      let temparr=[];
      for(let i=1;i<=this.state.parr.length+1;i++){
        temparr.push(i);
      }
      // set state function will work asynchronously
      this.setState({
        parr:temparr,
        currPage:this.state.currPage+1
      },this.changeMovies)
    }

    handelLeft=()=>{
      if(this.state.currPage==1){
        return;
      }else{
          let temparr=[];
          for(let i=1;i<=this.state.parr.length-1;i++){
          temparr.push(i);
          }
          // set state function will work asynchronously
          this.setState({
          parr:temparr,
          currPage:this.state.currPage-1
          },this.changeMovies)
      }
    }

    handelClick=(value)=>{
      if(value!=this.state.currPage){
        this.setState({
          currPage:value
        },this.changeMovies)
      }
    }

    render() {
    // let allMovies=movies.results;s
    const {parr,moviesData}=this.state;
    console.log('render called');
    return (
      <>
        {
          
          moviesData.length==0?<div className="spinner-border text-secondary" role="status">
                             <span className="visually-hidden">Loading...</span>
                             </div>:
                             <div className="movies-list">
                                 {/* <h1 style={{textAlign:'center'}}>Trending</h1> */}
                                 {
                                     moviesData.map((allMovies)=>{
                                         return <div key={allMovies.title}>
                                                     
                                                                              <div className="card movies-card">
                                                                              <img src={`https://image.tmdb.org/t/p/original${allMovies.backdrop_path}`} className="card-img-top banner-img" style={{height:'40vh',width:'20vw'}} alt={`${allMovies.title}`}/>
                                                                              {/* <div className="card-body"> */}
                                                                                  <h5 className="card-title movies-title">{`${allMovies.title}`}</h5>
                                                                                  {/* <p className="card-text movies-text" style={{color:'black'}}>{`${allMovies.overview}`}</p> */}
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
                <li className="page-item"><a className="page-link" onClick={this.handelLeft}>Previous</a></li>
                {
                    parr.map((value)=>{
                        return <><li className="page-item"><a className="page-link" onClick={()=>this.handelClick(value)}>{value}</a></li></>
                    })
                }
                {/* <li className="page-item"><a className="page-link">{this.state.parr.length}</a></li> */}
                <li className="page-item"><a className="page-link" onClick={this.handelRight}>Next</a></li>
            </ul>
        </nav>
        </div>
      </>
    )
  }
}
