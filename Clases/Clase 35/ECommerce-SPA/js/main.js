// -------------------------------------------
//           Variables Globales
// -------------------------------------------


// -------------------------------------------
//           Funciones Globales
// -------------------------------------------
function cargarPlantilla(id) {

    //id = id? id : 'inicio'      // vista default con navegación hash vacía (operador ternario)
    id = id || 'inicio'           // vista default con navegación hash vacía (operador short circuit)

    const main = document.querySelector('main')
    const url = './plantillas/' + id + '.html'
    //console.log(url)

    const start = {
        inicio: startInicio,
        alta: startAlta,
        carrito: startCarrito,
        contacto: startContacto,
        nosotros: startNosotros,
        otra: startOtra
    }

    const xhr = new XMLHttpRequest()
    xhr.open('get',url)
    xhr.addEventListener('load', () => {
        if(xhr.status == 200) {
            const plantilla = xhr.response
            //console.log(plantilla)
            
            // Cargamos el código HTML de la plantilla seleccionada
            main.innerHTML = plantilla

            // Cargamos el código JS de la plantilla seleccionada
            /* if(id == 'inicio') startInicio()
            else if(id == 'alta') startAlta()
            else if(id == 'carrito') startCarrito()
            else if(id == 'contacto') startContacto()
            else if(id == 'nosotros') startNosotros()
            else if(id == 'otra') startOtra() */

            start[id]()
        }
    })
    xhr.send()
}

function cargarPlantillas() {
    const links = document.querySelectorAll('header nav a')
    //console.log(links)
    
    // --------- carga de la vista de navegación inicial ---------
    const id = location.hash.slice(1)
    cargarPlantilla(id)

    // --------- carga de las vistas de navegación (dinámicas) ---------
    links.forEach(link => {
        //console.log(link)
    
        link.addEventListener('click', e => {
            e.preventDefault()
    
            //console.log('Click en algún a')
            //console.dir(link)
    
            const id = link.id
            //console.log(id)
            //cargarPlantilla(id)
            location.hash = id
        })
    })
    
    const link = document.querySelector('#carrito2')
    link.addEventListener('click', e => {
        e.preventDefault()
    
        const id = 'carrito'
        //console.log(id)
        //cargarPlantilla(id)
        location.hash = id
    })

    window.addEventListener('hashchange', () => {
        //console.log('Cambió el hash (#) en la URL')

        const id = location.hash.slice(1)
        //console.log('Hash id: ['+id+']')
        cargarPlantilla(id)
    })
}

function startMain() {
    console.error('startMain')
    
    cargarPlantillas()
}

// -------------------------------------------
//               Ejecución
// -------------------------------------------
//startMain()
window.onload = startMain

