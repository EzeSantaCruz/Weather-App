import React from 'react' 
// import '../CSS/weathers.css'
function Weathers({weathers}) {


    if(!weathers || weathers.length === 0){
        return (
            <>
            <p>Intenta cargar otra pagina o verifica la conexion.</p>
            </>
        )
    }

    // cuando haga x ciudad ahi manejo con .map

    return (
    <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
    {weathers.map((ciudad, index) => {
        return (
        <div key={index} className="card">
            <img src={ciudad.img} class="card-img-top" alt="..."></img>
            <div className="card-body">
            <h5 className="card-title">{ciudad.nombre}</h5>
            <h6 className="card-subtitle mb-2 text-body-secondary">
                🌡️Altura de las Olas: {ciudad.clima.wave_height}
            </h6>
            <p className="card-text">
                💨temperatura del Mar: {ciudad.clima.sea_surface_temperature}
            </p>
            </div>
        </div>
        );
        })}
    </div>
)

}

export default Weathers