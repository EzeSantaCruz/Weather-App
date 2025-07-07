
import useWeatherApi from '../hooks/useWeatherApi'
import Weathers from '../components/Weathers'
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
        <header>
            
        </header>


        <main>
            <Weathers weathers={weather}/>

        </main>
        <footer>
            
        </footer>
        </>
    )
}

export default WeatherPage