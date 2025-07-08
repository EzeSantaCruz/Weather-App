import Weathers from '../components/Weathers-Marine'
import useMarineWeather from '../hooks/useMarineWeather'
import NavBar from '../components/NavBar'
import '../CSS/weatherPage.css'
import Footer from '../components/footer'

function MarinePage() {


    const {err,weather,loading} = useMarineWeather()

    if(loading){
        return (
            <>
            <NavBar />
                Cargando Climas...
            </>
        )
    }


        if(err){
        return (
            <>
            <NavBar />
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
            <h1>Clima, Oleaje, altura y demas</h1>
            {console.log(weather)}
            <Weathers weathers={weather}/>
        </main>
        
        <footer>
            <Footer />
        </footer>
        </>
    )
}

export default MarinePage