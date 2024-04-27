const fs = require('fs');
const axios = require('axios');

axios.get('https://helldiverstrainingmanual.com/api/v1/war/campaign')
    .then(response => {
        const campaign = response.data;
        console.log(campaign);
        fs.writeFile('campaign.json', JSON.stringify(campaign), (err) => {
            if (err) throw err;
            console.log('The campaign file has been saved!');
        });
    })
    .catch(error => {
        console.error('Error:', error);
    });

axios.get('https://helldiverstrainingmanual.com/api/v1/planets')
    .then(response => {
        const planet = response.data;
        console.log(planet);
        fs.writeFile('planet.json', JSON.stringify(planet), (err) => {
            if (err) throw err;
            console.log('The planet file has been saved!');
        });
    })
    .catch(error => {
        console.error('Error:', error);
    });
