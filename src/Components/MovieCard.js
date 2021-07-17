import ReactStars from "react-rating-stars-component";
import EditCard from "./EditCard";

function MovieCard({el,film,setFilm,i}){
        
    return(
                   
         
        <div className="card">
            <h3>{el.title}</h3>
            <img src={el.posterURL} alt="" style={{width :"184PX", height :"273px"}}/>
            <p>{el.description}</p>
            <ReactStars count={el.rating}  size={24} color="#ffd700"/>    
            <EditCard el = {el} film = {film} setFilm = {setFilm} i ={i}></EditCard>       
        </div>
                
        
        
    )
}

export default MovieCard;