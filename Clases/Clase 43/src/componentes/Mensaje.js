import './Mensaje.css'


/* ------------------------------------------------------- */
/*  Componente ReactJS funcional (stateless: sin estado)   */
/* ------------------------------------------------------- */
function Mensaje(props) {
    console.log('function Mensaje')
    //console.log(props)

    //let titulo = 'Mensaje Nro 1'
    //const titulo = props.titulo
    //const color = props.color

    /* const { titulo, color } = props         // Object destructuring
    console.log(titulo, color) */

    const { titulo:enunciado, color:colorFondo } = props    // Object destructuring con alias
    //console.log(enunciado, colorFondo)

    let contador
    if(contador === undefined) contador = 0
    contador++

    return (
        <div className="Mensaje">
            <div className="jumbotron" style={{backgroundColor: colorFondo}}>
                {/* <h3>Mensaje Nro 1</h3> */}
                <h3>{ enunciado }</h3>
                {/* { 3 + 4 } */}
                {/* { new Date().toLocaleString() } */}
                {/* { Date.now() } */}
                {/* { Math.random() } */}
                {/* { contador } */}
                <hr />
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis itaque voluptatem inventore tenetur nam maxime quisquam cupiditate similique recusandae voluptatibus totam, corrupti et voluptates minima nulla unde magni soluta in!
                </p>
            </div>
        </div>
    )
}

export default Mensaje