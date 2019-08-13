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
