const fs = require('fs');

fetch('https://helldiverstrainingmanual.com/api/v1/war/campaign')
    .then(response => response.json())
    .then(campaign => {
        console.log(campaign);
        /*
        loop over campaign array
        forEach campaign element 
            create a new campaign object that matche the Campaign model
            check if campaign exists in the database
            if it exists, update the campaign with new data
            if it does not exist, create a new campaign
        */
    campaign.forEach(campaign);
    })
    .catch(error => {
        console.error('Error:', error);
    });

// fetch('https://helldiverstrainingmanual.com/api/v1/planets')
//     .then(response => response.json())
//     .then(planet => {
//         console.log(planet);
//         fs.writeFile('planet.json', JSON.stringify(planet), (err) => {
//             if (err) throw err;
//             console.log('The file has been saved!');
//         });
//     })
//     .catch(error => {
//         console.error('Error:', error);
//     });


