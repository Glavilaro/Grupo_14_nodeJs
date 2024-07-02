const params = new URLSearchParams(window.location.search);
const email  = params.get('email');

document.getElementById('email').innerHTML = 'Para el email: <b>' + email + '</b>';

document.getElementById("home").addEventListener("click", function() {
    window.location.href = './index.html';
});

const SOLO_PROMOS    = '1';
const SOLO_NOVEDADES = '2';
const CANCELAR       = '3';
const TODOS          = '4';

document.getElementById("send").addEventListener("click", function() {
   if(email === null) {
        alert('No tiene un email informado');
        return;
    }

    const radios = document.querySelectorAll('input[name="subscription"]');
    let selectedValue;
    for (const radio of radios) {
        if (radio.checked) {
            selectedValue = radio.value;
            break;
        }
    }

    document.getElementById("send").style.display = 'none';

    if(selectedValue === SOLO_PROMOS || selectedValue === SOLO_NOVEDADES || selectedValue === TODOS) {
        console.log('Actualizar');
        updateSubscription(selectedValue);
    }
    else if(selectedValue === CANCELAR) { 
        console.log('Cancelar');
        deleteSubscription();
    }
});

function updateSubscription(value) {
    const message = document.getElementById('message');

    fetch(`https://grupo14.alwaysdata.net/subscription`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: `{"email": "${email}", "updateCode": ${value}}`
    })
    .then(response => response.json())
    .then((response) => message.textContent = response.message )
    .catch(error => message.textContent = error);
}

function deleteSubscription() {
    const message = document.getElementById('message');

    fetch(`https://grupo14.alwaysdata.net/subscription`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: `{"email": "${email}"}`
    })
    .then(response => response.json())
    .then((response) => message.textContent = response.message )
    .catch(error => message.textContent = error);
}
