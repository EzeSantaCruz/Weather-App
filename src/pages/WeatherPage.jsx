
import useWeatherApi from '../hooks/useWeatherApi'
import Weathers from '../components/Weathers'
import NavBar from '../components/NavBar'
import '../CSS/weatherPage.css'
import Footer from '../components/footer'
import Hero from '../components/hero'
function WeatherPage() {

const {err,weather,loading} = useWeatherApi()

    if(loading){
        return (
            <>
                Cargando Climas...
            </>
        )
    }

    if(err){
        return (
            <>
                <h2>Error al cargar los datos</h2>
                <p> {err.message} </p>
            </>
        )}

    return (
        <>
            <Hero />
            <h1 className='title'>Alguna de las Ciudades que podras consultar:</h1>
            <Weathers weathers={weather}/>
        </>
    )
}

export default WeatherPage