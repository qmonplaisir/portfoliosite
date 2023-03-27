// Send contact form to API
const contact = document.querySelector('.contactform');

contact.addEventListener('submit', event => {
    event.preventDefault();

    const formData = new FormData(contact);
    const data = Object.fromEntries(formData);

    fetch('https://getpantry.cloud/apiv1/pantry/c71cd673-64e5-44a9-b1ab-2bd00639c06c/basket/testBasket', {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(res => res.json())
        .then(data => console.log(data))
        .catch(error => console.log(error));
});