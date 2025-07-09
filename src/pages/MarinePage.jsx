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
        

        <main>
            <h1>Aqui podras consultar oleaje, temperatura del mar y altura de las olas.</h1>
            {console.log(weather)}
            <Weathers weathers={weather}/>
        </main>
        

        </>
    )
}

export default MarinePage