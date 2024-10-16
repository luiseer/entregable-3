import './styles.css';
import axios from 'axios'
import  {useState, useEffect} from 'react'
import LocationInfo from './components/LocationInfo';
import ResidentsList from './components/ResidentsList';
// import ResidentInfo from './components/ResidentInfo';
import SearchBox from './components/SearchBox';

const randomId = Math.floor(Math.random() * 126) + 1;


const App =() => {
const [location, setLocation] = useState({})

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/location/${randomId}`)
      .then(res => setLocation(res.data))
      .catch(err => console.log(err))
  }, [])

  
  //console.log(location)
  // console.log(location.residents?.map(resident => resident))
    return (
      <>
        <h1>Ryck & Morty</h1>
        <SearchBox setLocation={setLocation}/>
        <LocationInfo location={location}/>
        <ResidentsList location={location}/>
          {/* <ResidentInfo location={location}/> */}
        
      </>
   
  );
}

export default App;
