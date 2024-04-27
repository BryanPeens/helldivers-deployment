const factionEl = document.querySelectorAll('.faction');
const campaignCardEl = document.querySelectorAll('.campaign-card');
campaignCardEl.forEach((campaign , i) => {
if (factionEl[i].textContent === 'Automatons') {
    campaign.style.backgroundColor = '#C71A1A';
    factionEl[i].innerHTML += ' <img class = "automatonsImage" src="./images/automaton.png" alt="Automaton">';
} else if (factionEl[i].textContent === 'Terminids') {
    campaign.style.backgroundColor = '#A08C61';
    factionEl[i].innerHTML += ' <img class = "terminidsImage" src="./images/terminids.png" alt="Terminids">';
}
// factionEl.forEach((faction , i) => {
//     if (faction.textContent === 'Automatons') {
//         campaignCardEl[i].style.backgroundColor = '#C71A1A';
//     } else if (faction.textContent === 'Terminids') {
//         campaignCardEl[i].style.backgroundColor = '#A08C61';
//         faction.innerHTML += '<img src="terminids.png" alt="Terminids">';
//     }
});