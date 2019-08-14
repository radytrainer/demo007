var urls = "https://jsonplaceholder.typicode.com/users";
fetch(urls)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        let table = document.querySelector('table');
        for (let i = 0; i < data.length; i++) {
            table.innerHTML += '<tr>' +
                '<td>' + data[i].id + '</td>' +
                '<td>' + data[i].name + '</td>' +
                '<td>' + data[i].email + '</td>' +
                '<td>' + data[i].address + '</td>' +
                '<td>' + data[i].thumbnailUrl + '</td>' +
                '</tr>';
        }
    });

// var urls = "https://jsonplaceholder.typicode.com/comments";
// var table = document.querySelector('#post');
// fetch(urls)
//     .then(function (response) {
//         return response.json();
//     })
//     .then(function (data) {
//         data.forEach(function (element) {
//             if (element.id <= 5) {
//                 table.innerHTML += `
//                 <div class="card mt-5">
//                    <div class="card-header">${element.name}</div>
//                    <div class="card-body">${element.body}</div>
//                    <div class="card-footer">${element.email} </div>
//                </div>
//             `;
//             }

//         })
//     })
//     .catch(function (error) {
//         return console.log("Cannot get data");
//     })

// var url = "https://jsonplaceholder.typicode.com/comments";
// var table = document.querySelector('#post');
// var xmlRequest = new XMLHttpRequest();
// xmlRequest.open('GET', url, true);
// xmlRequest.onload = () => {
//     data = JSON.parse(xmlRequest.responseText)
//     data.forEach(function (element) {
//         if (element.id <= 5) {
//             table.innerHTML += `
//                         <div class="card mt-5">
//                            <div class="card-header">${element.name}</div>
//                            <div class="card-body">${element.body}</div>
//                            <div class="card-footer">${element.email} </div>
//                        </div>
//                     `;
//         }

//     })
// }
// xmlRequest.send();

