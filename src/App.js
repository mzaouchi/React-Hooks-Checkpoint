import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import MovieList from './Components/MovieList';
import AddCard from './Components/AddCard';
import FilterCard from './Components/FilterCard';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  const [film,setFilm] = useState(
[
  {title : "The Father" , description : "Film de Florian Zeller avec Olivia Colman, Anthony Hopkins, Mark Gatiss" , posterURL : "/1.jpg" , rating : "5" },
  {title : "Nomadland " , description : "Film de Chloé Zhao avec Frances McDormand, David Strathairn, Gay DeForest" , posterURL : "/2.jpg" , rating : "3" },
  {title : "Les Mitchell contre les machines" , description : "Long-métrage d'animation de Michael Rianda et Jeff Rowe avec Abbi Jacobson, Danny McBride, Maya Rudolph" , posterURL : "/3.jpg" , rating : "2" },
  {title : "Zack Snyder's Justice League " , description : "Film de Zack Snyder avec Ben Affleck, Gal Gadot, Henry Cavill" , posterURL : "/4.jpg" , rating : "5" }
]
  );

  const[textT,setTextT] = useState('');
  const[rateR,setRateR] = useState('');


  return (
    <div>
      <br/>
      <AddCard film = {film} setFilm = {setFilm}></AddCard>
      <br/>
      <FilterCard  setTextT = {setTextT} setRateR = {setRateR}></FilterCard>
      <br/>
      <MovieList film = {film}  textT = {textT} rateR = {rateR} setFilm={setFilm}></MovieList>

    </div>
  );
}

export default App;
