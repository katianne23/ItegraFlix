import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Container } from './styles';
import { ReactComponent as Star } from '../../img/star.svg';
import { ReactComponent as Heart } from '../../img/heart.svg';
import Loading from '../Loading';




function Details() {
  const { id } = useParams()
  const [movie, setMovie] = useState([])

  const imagePath = 'https://image.tmdb.org/t/p/w500/'


  try {
    useEffect(() => {
      fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=5606d9131efb01c195a8ed5a8d09de6d&language=pt-PT`)
        .then(response => response.json())
        .then(data => {
          const { title, poster_path, overview, vote_average, popularity, genres, production_companies } = data
          const movie = {
            id,
            title,
            image: `${imagePath}${poster_path}`,
            vote: vote_average,
            sinopse: overview,
            popular: popularity,
            genre: genres.id,
            produ: production_companies.name

          }

          setMovie(movie)

        })
    }, [id])

    return (


      <Container>
        <span className="title">{movie.title}</span>
        <div className="movie">
          <img src={movie.image} alt={movie.sinopse} />
          <div className='infor'>
            <Star />
            <span className='vote' >{movie.vote} </span>
            <Heart />
            <span className='popular' >{movie.popular} </span>
            <span className='gen'> Gêneros: {movie.genre}</span>
            <span className='pro'> Produtoras: {movie.produ}</span>
            <span className='sin'>{movie.sinopse}</span>


          </div>
        </div>
      </Container>

    );
  } catch (error) {
    return (<Loading />);
  }


}

export default Details;