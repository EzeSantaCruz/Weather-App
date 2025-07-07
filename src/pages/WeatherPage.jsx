
import useWeatherApi from '../hooks/useWeatherApi'
import Weathers from '../components/Weathers'
import NavBar from '../components/NavBar'
import '../CSS/weatherPage.css'
import Footer from '../components/footer'
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
            <NavBar />
        </header>

        <main>
            <Weathers weathers={weather}/>
        </main>
        
        <footer>
            <Footer />
        </footer>
        </>
    )
}

export default WeatherPage