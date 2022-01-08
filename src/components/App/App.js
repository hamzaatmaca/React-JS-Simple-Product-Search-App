import React from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import MovieList from '../MovieList/MovieList';


export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state ={

      movies:[],
     
      searchMovie:""

    }
  }

  async componentDidMount(){
    const api="https://fakestoreapi.com/products";
    const response = await fetch(api);
    console.log(response)
    const data = await response.json();
    console.log(data);
    this.setState({movies:data})
  }

  deleteMovie = (movie)=>{

    const movieList = this.state.movies.filter( m => m.id !== movie.id)


    this.setState(state=>({
      movies: movieList
    }))

  }

  searchMovie = (event)=>{

      this.setState({searchMovie:event.target.value})
    
  }

  render() {

    let filterMovie = this.state.movies.filter(
        (movie) => {
          return movie.title.toLowerCase().indexOf(this.state.searchMovie.toLowerCase()) !== -1
        }

      )

    return (
      <div>

          <div className="container">

            <div className="row">
              <div className="col-sm-12">
                  <SearchBar
                    searchMovieProp={this.searchMovie}

                  />
              </div>
            </div>

            <div className="row">
              <div className="col-sm-12">
                  <MovieList
                    movies={filterMovie}
                    deleteEvent={this.deleteMovie}
                  />
              </div>
            </div>

          </div>

      </div>
      );
  }
}



