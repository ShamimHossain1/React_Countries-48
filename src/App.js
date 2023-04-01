
import './App.css';
import { useEffect, useState } from 'react';

import Person from './components/Person/Person';
import Header from './components/Header/Header';
import Countries from './components/Countries/Countries';

function App() {
  return (
    <div className="App">
      {/* <LoadCountries></LoadCountries> */}
      <Header></Header>
      
      <Person></Person>
      <Countries></Countries>
      
    </div>
  );
}

// function LoadCountries(){
//   const [countries, setCountries] = useState([]);
//   useEffect( () =>{
//     fetch('https://restcountries.com/v3.1/all')
//     .then(res => res.json())
//     .then(data => setCountries(data))

//   }, [])
//   return (
//     <div>
//       <h1>country</h1>
//       <h3>a: {countries.length}</h3>
//       {
//         countries.map(country => <Country name= {country.name.common} population={country.population} ></Country>)
//       }
//     </div>
//   )
// }

// function Country(props){
//   return (
//     <div>
//       <h2>Name: {props.name}</h2>
//       <h4>Population {props.population}</h4>
//     </div>
//   )
// }

export default App;
