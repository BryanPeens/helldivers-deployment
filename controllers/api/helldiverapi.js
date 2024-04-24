fetch('https://helldiverstrainingmanual.com/api/v1/war/campaign')
    .then(response => response.json())
    .then(campaign => {
        console.log(campaign); 
    })
    .catch(error => {
        console.error('Error:', error);
    });

    
