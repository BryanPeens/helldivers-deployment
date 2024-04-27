const factionEl = document.querySelectorAll('.faction');
const campaignCardEl = document.querySelectorAll('.campaign-card');

campaignCardEl.forEach((campaign , i) => {
if (factionEl[i].textContent === 'Automatons') {
    campaign.style.backgroundColor = '#c71a1a';
    factionEl[i].innerHTML += ' <img class = "automatonsImage" src="./images/automaton.png" alt="Automaton">';
} else if (factionEl[i].textContent === 'Terminids') {
    campaign.style.backgroundColor = '#a08c61';
    factionEl[i].innerHTML += ' <img class = "terminidsImage" src="./images/terminids.png" alt="Terminids">';
}
// factionEl.forEach((faction , i) => {
//     if (faction.textContent === 'Automatons') {
//         campaignCardEl[i].style.backgroundColor = '#c71a1a';
//     } else if (faction.textContent === 'Terminids') {
//         campaignCardEl[i].style.backgroundColor = '#a08c61';
//         faction.innerHTML += '<img src="terminids.png" alt="Terminids">';
//     }
});