import Weathers from '../components/Weathers-Marine'
import useMarineWeather from '../hooks/useMarineWeather'
import '../CSS/weatherPage.css'
import Hero from '../components/hero'
import marineHeroImg from '../assets/Hero-Marine.png'

function MarinePage() {


    const {err,weather,loading} = useMarineWeather()
    const titulo ="Aqui puede saber todo sobre los mares"
    const desc = "Aqui podras saber todo lo necesario sobre los mares. Si trabajas en el mar, soles ir a pescar con tus amigos, o tenes curiosidad Weather-app es tu aplicacion de confianza."
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
            <h2>Resultados no encontrados, Vuelva a Intentarlo</h2>
            <p> {err.message} </p>
            </>
        )}


return (
        <>
        

        <main>
            <Hero titulo={titulo} desc={desc} img={marineHeroImg} />
            <h1>Aqui podras consultar oleaje, temperatura del mar y altura de las olas.</h1>
            <Weathers weathers={weather}/>
        </main>
        

        </>
    )
}

export default MarinePage