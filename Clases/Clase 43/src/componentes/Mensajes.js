import Mensaje from "./Mensaje"

function Mensajes() {
    return (
        <>
            <div className="row">
                <div className="col-4"> <Mensaje titulo="Mensaje Nro 1" color="green" /> </div>
                <div className="col-4"> <Mensaje titulo="Mensaje Nro 2" color="orangered" /> </div>
                <div className="col-4"> <Mensaje titulo="Mensaje Nro 3" color="blue" /> </div>
            </div>

            {/* <div className="row">
                <div className="col-3"> <Mensaje titulo="Mensaje Nro 4" color="blueviolet" /> </div>
                <div className="col-5"> <Mensaje titulo="Mensaje Nro 5" color="teal" /> </div>
                <div className="col-4"> <Mensaje titulo="Mensaje Nro 6" color="crimson" /> </div>
            </div> */}
        </>
    )
}

export default Mensajes