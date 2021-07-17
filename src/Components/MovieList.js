import MovieCard from "./MovieCard";

function MovieList({film,textT,rateR,setFilm}){
    let x = film.filter(el=> el.title.toLowerCase().includes(textT.toLowerCase()) && el.rating>=rateR).map((el,i) =>(
                    
        <MovieCard el ={el} film = {film} setFilm = {setFilm} i = {i}></MovieCard>
    ))
      
    return(
        <div className="cards-Container">
                 

           {    x.length > 0 ? x : <img src="/notfound.PNG"/>

                }
          

        </div>
    )
}

export default MovieList;