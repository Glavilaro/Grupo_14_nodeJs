document.querySelector('.discount-form').addEventListener('submit', function(event) {
  event.preventDefault();

  const email = document.getElementById('email').value;
  fetch(`https://grupo14.alwaysdata.net/subscription`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: `{"email": "${email}"}`
  })
  .then(response => response.json())
  .then((response) => {
    console.log('Mensaje del servidor: ', response.message);
    document.querySelector('.overlay').style.display = 'block';
    document.querySelector('.popup'  ).style.display = 'block';
  })
  .catch(error => console.error('Error al obtener los datos:', error));
});

function closePopup() {
  document.querySelector('.overlay').style.display = 'none';
  document.querySelector('.popup'  ).style.display = 'none';
}

document.addEventListener('DOMContentLoaded', function () 
{
    fetch('https://grupo14.alwaysdata.net/token/new')
        .then(response => response.json())
        .then(data => guardarToken(data))
        .catch(error => console.error('Error al obtener los datos:', error));
});

function guardarToken(response) {
  console.log('Token', response.token);

  if (typeof(Storage) !== "undefined") {
    localStorage.setItem("token", response.token);
    localStorage.setItem("token-expires-in", response.expiresIn);
    console.log("Datos guardados.");
  } 
  else {
    console.log("Web Storage no soportado.");
  }    
}

function leerToken()
{
  if (typeof(Storage) !== "undefined") {
    return localStorage.getItem("token");
  } 
  else {
    return "Web Storage no soportado.";
  }
}
