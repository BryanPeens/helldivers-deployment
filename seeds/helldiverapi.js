const fs = require('fs');


fetch('https://helldiverstrainingmanual.com/api/v1/war/campaign')
    .then(response => response.json())
    .then(campaign => {
        console.log(campaign);
        fs.writeFile('campaign.json', JSON.stringify(campaign), (err) => {
            if (err) throw err;
            console.log('The file has been saved!');
        });
    })
    // .catch(error => {
    //     console.error('Error:', error);
    // });

fetch('https://helldiverstrainingmanual.com/api/v1/planets')
    .then(response => response.json())
    .then(planet => {
        console.log(planet);
        fs.writeFile('planet.json', JSON.stringify(planet), (err) => {
            if (err) throw err;
            console.log('The file has been saved!');
        });
    })
    .catch(error => {
        console.error('Error:', error);
    });


