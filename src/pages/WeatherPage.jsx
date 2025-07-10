
import useWeatherApi from '../hooks/useWeatherApi'
import Weathers from '../components/Weathers'
import '../CSS/weatherPage.css'
import Hero from '../components/hero'
import heroImage from '../assets/Wheater-App-Hero.png'
function WeatherPage() {

const {err,weather,loading} = useWeatherApi()
const titulo = "Weather-App"
const desc ="Consultá el estado del tiempo en cualquier parte del mundo de forma rápida y sencilla. Nuestra app te muestra información actualizada sobre temperatura, viento, y más, usando datos en tiempo real para que estés siempre preparado."
const img = heroImage
    if(loading){
        return (
            <>
                Cargando Pagina, Espere Por Favor...
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
            <Hero titulo={titulo} desc={desc} img={img} />
            <h1 className='title'>Alguna de las Ciudades que podras consultar:</h1>
            <Weathers weathers={weather}/>
        </>
    )
}

export default WeatherPage