import { useState, useEffect } from 'react';
import { Container, MovieList, Movie } from './styles';
import { Link } from 'react-router-dom';
import { ReactComponent as Star } from '../../img/star.svg';
import { ReactComponent as Heart } from '../../img/heart.svg';
import Loading from '../Loading';

function Home() {

  const [movies, setMovies] = useState([])
  const image = 'https://image.tmdb.org/t/p/w500/';


  try {
    useEffect(() => {
      fetch(`https://api.themoviedb.org/3/movie/popular?api_key=5606d9131efb01c195a8ed5a8d09de6d&language=pt-PT`)
        .then(response => response.json())
        .then(data => setMovies(data.results.slice(0, 10)));
    }, [])


    return (



      <Container>
        <h1>Populares</h1>
        <MovieList>

          {movies.map(movie => {
            return (
              <Movie key={movie.id}>
                <Link to={`/details/${movie.id}`}>
                  <img src={`${image}${movie.poster_path}`} alt={movie.title} />
                </Link>
                <span className="title">{movie.title}</span>
                <span className='infor'>
                  <Star />
                  <div className='vote'>{movie.vote_average}</div>
                  {movie.release_date}
                  <Heart />
                  {movie.popularity}
                </span>


              </Movie>
            )
          })}

        </MovieList>
      </Container>


    )
  } catch (error) {
    return (<Container>
      <h1>Populares</h1>
      <Loading />
    </Container>)

  }



}

export default Home
