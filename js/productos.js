/************************************************************************/
/****************         Obtener los productos          ****************/
/************************************************************************/ 

document.addEventListener('DOMContentLoaded', function () 
{
    const seccion = actualizarPagina();

    fetch(`./data/${seccion}.json`)
        .then(response => response.json())
        .then(data => mostrarProductos(data))
        .catch(error => console.error('Error al obtener los datos:', error));
});

function actualizarPagina()
{
    const urlParams = new URLSearchParams(window.location.search);
    const seccion   = urlParams.size > 0 ? urlParams.keys().next().value : "hombres";
    if(seccion === 'mujeres')
    {
        document.querySelector('.categoria').innerHTML = 'Mujeres';
    }
    else
    {
        document.querySelector('.categoria').innerHTML = 'Hombres';
    }
    return seccion;
}

function mostrarProductos(productos) 
{
    document.getElementById('productos-cant').innerHTML = productos.length.toString();

    const container = document.getElementById('productos-container');

    productos.forEach(producto => {
        const productoElement  = document.importNode(document.getElementById('producto-template').content, true);
        const productoDiv      = productoElement.querySelector('.producto');
        const imagenPrincipal  = productoElement.querySelector('.producto-imagen.principal');
        const imagenSecundaria = productoElement.querySelector('.producto-imagen-hover.secundaria');
        
        imagenPrincipal.src  = producto.imagenPrincipal;
        imagenPrincipal.alt  = producto.nombre;
        imagenSecundaria.src = producto.imagenSecundaria;
        imagenSecundaria.alt = producto.nombre + ', imagen secundaria';

        productoElement.querySelector('.producto-nombre').textContent = producto.nombre;

        const precioElement = productoElement.querySelector('.producto-precio');
        if(producto.precioOferta > 0) {
            const ofertaElement       = document.createElement('div');
            ofertaElement.className   = 'oferta';
            ofertaElement.textContent = 'OFERTA';
            productoDiv.appendChild(ofertaElement);

            precioElement.textContent = `Precio de lista: $${new Intl.NumberFormat("es-AR").format(producto.precio)}`;
            precioElement.classList.add('texto-tachado');
            productoElement.querySelector('.producto-precio-oferta').textContent = `Nuevo precio: $${new Intl.NumberFormat("es-AR").format(producto.precioOferta)}`;
        }
        else {
            precioElement.textContent = `Precio: $${new Intl.NumberFormat("es-AR").format(producto.precio)}`;
            productoElement.querySelector('.producto-precio-oferta').innerHTML = "&nbsp;";
        }

        if(producto.novedad) {
            const nuevoElement = document.createElement('div');
            nuevoElement.className   = 'producto-nuevo';
            nuevoElement.textContent = 'Nuevo!'
            productoDiv.appendChild(nuevoElement);
        }

        productoDiv.addEventListener('mouseenter', function() {
            imagenPrincipal.style.display  = 'none';
            imagenSecundaria.style.display = 'block';
        });
        productoDiv.addEventListener('mouseleave', function() {
            imagenSecundaria.style.display = 'none';
            imagenPrincipal.style.display  = 'block';
        });
        
        productoElement.querySelector('.producto-colores').innerHTML = getColors(producto.colores);
        
        container.appendChild(productoElement);
    });
}

function getColors(colores)
{
    let result = "Colores disponibles:";

    colores.forEach(color => {
        result += `&nbsp;<div class="cuadradito" style="background-color: ${color};"></div>`;
    });
    return result;
}
