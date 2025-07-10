import { useState } from "react"
import { FetchableDevEnvironment } from "vite"


const useSearchCity = () => {

    const [lon, setLon] = useState("")
    const [lat, setLat] = useState("")
    const [err, setError] = useState("")
    const [weather, setWeather] = useState(null)
    const [loading, setLoading] = useState(true)
    const [Ciudad, setCiudad] = useState("")
    
    const baseURL = import.meta.env.VITE_SEARCH_LON_LAT_CITY
    const baseURLweather= import.meta.env.VITE_WEATHER_API_ENDPOINT
    const searchLatLon = async (ciudad) =>{
        const url = `${baseURL}?q=${ciudad}&format=json`
        const res = await fetch(url)
        const data = await res.json()
        setLon(data[0].lon)
        setLat(data[0].lat)
        setCiudad(ciudad)
        searchWeatherCity()
    }

    const searchWeatherCity = async () => {
        setLoading(true)
        setError(null)

        try
        {
            
            const url = `${baseURLweather}?latitude=${lat}&longitude=${lon}&current_weather=true`
            const res = await fetch(url)
            if(!res.ok)
            {
                throw new Error(`Error al realizar la consulta HTTP: ${response.status}`)
            }else{
                const data = res.json()
                const result = {
                    nombre: Ciudad,
                    clima: data.current_weather
                }
                setWeather(result)
            }
        }
        catch(Error){
            setError(Error)
            setWeather([])
        }finally{
            setLoading(false)
        }
    }
    return {
        searchLatLon,
        weather,
        err,
        loading
    }
}
export default useSearchCity