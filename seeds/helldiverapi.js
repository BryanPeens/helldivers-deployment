const fs = require('fs');
const axios = require('axios');

axios.get('https://helldiverstrainingmanual.com/api/v1/war/campaign')
    .then(response => {
        const campaign = response.data;
        console.log(campaign);

        fs.writeFile('campaignData.json', JSON.stringify(campaign), (err) => {
            if (err) throw err;
            console.log('The campaign file has been saved!');
        });
    })
    .catch(error => {
        console.error('Error:', error);
    });

