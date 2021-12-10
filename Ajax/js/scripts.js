fetch('./JSON/contacts.json')
    .then((response) => {
        if (response.ok)
            return response.json();

        Promise.reject(new Error(response.status + ': ' + response.statusText));


    })
    .then((dataJson) => {
        console.log(dataJson);
        document.querySelector('table caption').textContent = dataJson.title;
        let tbody = document.querySelector('table tbody')
        dataJson.data.forEach(element => {
            let tr = document.createElement('tr')
            let td = document.createElement('td')
            td.textContent = element.identifiant;
            tr.appendChild(td);
            td = document.createElement('td');
            td.textContent = element.nom;
            tr.appendChild(td);
            td = document.createElement('td');
            td.textContent = element.prenom;
            tr.appendChild(td);
            td = document.createElement('td');
            td.textContent = element.codepostal;
            tr.appendChild(td);
            td = document.createElement('td');
            td.textContent = element.ville;
            tr.appendChild(td);
            tbody.appendChild(tr);



        });
        excercice71();
    })
    .catch((error) => {
        console.log(error);
    });

function excercice71() {
    $('table tbody tr:eq(0) td:eq(2)').next().css('background-color', 'red')

    $('table tbody tr:eq(1) td:eq(2)').nextAll().css(
        {
            'background-color': 'blue',
            'color': 'white'

        })
    $('table tbody tr:eq(2) td:eq(2)').nextAll().addBack().css(
        {
            'background-color': 'yellow',
            'color': 'red'

        })
    $('table tbody tr:eq(3) td:eq(2)').prev().css(
        {
            'background-color': 'lime',
            'color': 'black '

        })

    $('table tbody tr:eq(4) td:eq(2)').prevAll().css(
        {
            'background-color': 'brown',
            'color': 'black '

        })
    $('table tbody tr:eq(5) td:eq(2)').prevAll().addBack().css(
        {
            'background-color': 'magenta',
            'color': 'black '

        })
    $('table tbody tr:eq(6) td:eq(2)').parent().children().css(
        {
            'background-color': 'cyan',
            'color': 'black '

        })
    $('table tbody tr td:contains(Tours)').css(
        {
            'background-color': 'red',
            'text-decoration' : 'underline',
            'color': 'black '

        })




}