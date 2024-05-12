import React, { useState } from 'react'
import './Contador.css'

/* ------------------------------------------------------------ */
/*       Componente ReactJS class (stateful: con estado)        */
/* ------------------------------------------------------------ */
class ContadorClass extends React.Component {

    state = {
        //contador: Number(this.props.ini)
        contador: this.props.ini
    }

    render() {
        const { id, color } = this.props
        const { contador } = this.state

        console.log('render Contador ' + id)

        return (
            <div className="Contador">
                <div className="jumbotron" style={{backgroundColor: color}}>
                    <h3>Contador Nro {id}</h3>
                    <hr />

                    {/* ----- representamos el valor de cuenta -------- */}
                    {/* <h4>Valor: { this.state.contador }</h4> */}
                    <h4>Valor: { contador }</h4>

                    {/* ------- decrementamos la cuenta ------- */}
                    <button className="btn btn-warning mt-3 mr-2" onClick={
                        () => {
                            //console.log('Click en dec -> id: ' + id)
                            this.setState( prevstate => ({ contador: prevstate.contador - 1 }) )
                        }
                    }>Decrementar</button>

                    {/* ------- incrementamos la cuenta ------- */}
                    <button className="btn btn-success mt-3" onClick={
                        () => {
                            //console.log('Click en inc -> id: ' + id)
                            this.setState( prevstate => ({ contador: prevstate.contador + 1 }) )
                        }
                    }>Incrementar</button>

                </div>
            </div>
        )
    }
}

/* ------------------------------------------------------------ */
/*   Componente ReactJS funcional Hook (stateful: con estado)   */
/* ------------------------------------------------------------ */
function Contador(props) {
    console.log('function Contador')

    const { id, color, ini } = props
    
    const [ contador, setContador ] = useState(ini)     // Array destructuring en useState hook

    return (
        <div className="Contador">
            <div className="jumbotron" style={{backgroundColor: color}}>
                <h3>Contador Nro {id}</h3>
                <hr />
                
                {/* ----- representamos el valor de cuenta -------- */}
                <h4>Valor: { contador }</h4>

                {/* ------- decrementamos la cuenta ------- */}
                <button className="btn btn-warning mt-3 mr-2" onClick={
                    () => setContador(contador - 1)
                }>Incrementar</button>

                {/* ------- incrementamos la cuenta ------- */}
                <button className="btn btn-success mt-3" onClick={
                    () => setContador(contador + 1)
                }>Incrementar</button>

            </div>
        </div>
    )
}

export default Contador