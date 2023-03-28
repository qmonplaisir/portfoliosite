// Visualizing data in a user friendly way
// Project 1 chart

// var xValues = ["HTML", "CSS", "JavaScript"];
// var yValues = [58.1, 39.4, 2.5];
// var barColors = [
//     "#162169",
//     "#00acd7",
//     "#ff2ad4"
// ];

// new Chart("confectioneryChart", {
//     type: "doughnut",
//     data: {
//         labels: xValues,
//         datasets: [{
//         backgroundColor: barColors,
//         data: yValues
//         }]
// },
// options: {
//     title: {
//     display: true,
//     text: "Languages Displayed in Percentages"
//     }
// }
// });

// // Project 2 chart
// var xValues = ["JavaScript", "CSS", "HTML"];
// var yValues = [65.4, 23.2, 11.4];
// var barColors = [
//     "#00acd7", 
//     "#ff2ad4",
//     "#162169"
    
// ];

// new Chart("topTracksChart", {
// type: "doughnut",
// data: {
//     labels: xValues,
//     datasets: [{
//     backgroundColor: barColors,
//     data: yValues
//     }]
// },
// options: {
//     title: {
//     display: true,
//     text: "Languages Displayed in Percentages"
//     }
// }
// });

// // Project 3 chart
// var xValues = ["CSS", "HTML", "Javascript"];
// var yValues = [48.6, 47.4, 4.0];
// var barColors = [
//     "#ff2ad4",
//     "#162169",
//     "#00acd7"
// ];

// new Chart("portfolioChart", {
// type: "doughnut",
// data: {
//     labels: xValues,
//     datasets: [{
//     backgroundColor: barColors,
//     data: yValues
//     }]
// },
// options: {
//     title: {
//     display: true,
//     text: "Languages Displayed in Percentages"
//     }
// }
// });

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

// Contact form validation
    //Full Name

var fullName = document.getElementById('fullname');
var contactForm = document.getElementById('contactform');
let fullNameErr = document.getElementById('nameErr');

fullName.addEventListener('input', function(e) {
    let regex = /[A-Za-z]+ [A-Za-z]+/i;
    let currentValue = e.target.value;
    let valid = regex.test(currentValue);

    if(valid) {
        fullNameErr.style.display = 'none'
    } else {
        fullNameErr.style.display = 'block'
    }
})

    //E-mail

    let email = document.getElementById('email');
    
    let emailErr = document.getElementById('emailErr');

email.addEventListener('input', function(e) {
    let regex = /[-A-Za-z0-9!#$%&'*+/=?^_`{|}~]+(?:\.[-A-Za-z0-9!#$%&'*+/=?^_`{|}~]+)*@(?:[A-Za-z0-9](?:[-A-Za-z0-9]*[A-Za-z0-9])?\.)+[A-Za-z0-9](?:[-A-Za-z0-9]*[A-Za-z0-9])?/i;
    let currentValue = e.target.value;
    let valid = regex.test(currentValue);

    if(valid) {
        emailErr.style.display = 'none'
    } else {
        emailErr.style.display = 'block'
    }
})

    //phone number

    let phoneNum = document.getElementById('phonenum');
    
    let phoneNumErr = document.getElementById('phoneNumErr');

phoneNum.addEventListener('input', function(e) {
    let regex = /^([+-]?(?=\.\d|\d)(?:\d+)?(?:\.?\d*))(?:[Ee]([+-]?\d+))?[0-9]+\d{9}$/i;
    let currentValue = e.target.value;
    let valid = regex.test(currentValue);

    if(valid) {
        phoneNumErr.style.display = 'none'
    } else {
        phoneNumErr.style.display = 'block'
    }
})