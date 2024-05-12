import Contador from "./Contador"

function Contadores() {
    return (
        <div className="row">
            {/* <Contador id="1" color="crimson" ini="123" />
            <Contador id="2" color="black" ini="456" /> */}
            <div className="col-6"> <Contador id="1" color="crimson" ini={123} /> </div>
            <div className="col-6"> <Contador id="2" color="black" ini={456} /> </div>
        </div>
    )
}

export default Contadores