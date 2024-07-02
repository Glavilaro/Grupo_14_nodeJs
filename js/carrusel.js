let index  = 0;
let textos = [];

document.addEventListener('DOMContentLoaded', function () 
{
    //fetch('./data/promos.json')
    fetch('https://grupo14.alwaysdata.net/promotions')
        .then(response => response.json())
        .then(data => mostrarPromos(data))
        .catch(error => console.error('Error al obtener los datos:', error));
});

function mostrarPromos(promos) 
{
    const container = document.getElementById('header-container');
    let   idx       = 0;

    promos.forEach(promo => {
        addPromo(container, promo, idx++, 'animate__bounceInLeft');
        addPromo(container, promo, idx++, 'animate__fadeOutRightBig');
    });
    textos = document.querySelectorAll('.header-carrusel-text');
}

function addPromo(container, promo, idx, animate)
{
    const promoElement = document.importNode(document.getElementById('header-template').content, true);

    promoElement.querySelector('.header-text').textContent = promo;
    const div = promoElement.querySelector('.header-carrusel-text');
    div.classList.add(animate);
    if(idx > 0)
        div.style.display = 'none'; // Oculto todos menos el primero

    container.appendChild(promoElement);
}

function mostrarProximaPromo()
{
    textos[index].style.display = 'none';   // Oculto el texto actual
    index = (index + 1) % textos.length;    // Obtengo el indice al proximo texto
    textos[index].style.display = 'block';  // Muestro el proximo texto
}

setInterval
(
    function() 
    {
        mostrarProximaPromo();

        if(index % 2 !== 0)
        {
            setTimeout(() => mostrarProximaPromo(), 300);
        }
    },
    5500 
); 
