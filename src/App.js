import './styles.css';
import axios from 'axios'
import  {useState, useEffect} from 'react'
import LocationInfo from './components/LocationInfo';
import ResidentsList from './components/ResidentsList';
import ResidentInfo from './components/ResidentInfo';
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
        <div className='location-info'>
          <p className='ubication-bg'> Ubicación: <b>{location.name}</b></p>
          <p className='type-bg'> Tipo de Lugar: <b>{location.type}</b></p>
          <p className='dimension-bg'> Dimension: <b>{location.dimension}</b></p>
          <p className='residents-bg'> Cantidad de Residentes: <b>{location.residents?.length}</b></p>
        </div>
        <div className='card'>
          <ResidentInfo location={location.residents} key={location.id}/>
        </div>
        
        {/* <ResidentsList location={location}/> */}
      </>
   
  );
}

export default App;
