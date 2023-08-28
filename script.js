let parties=[];
const partyList=document.querySelector('#partyList');

function renderParties(){
    const html=parties.map((party)=>{
        return `
            <div>
                <h2>${party.name}</h2>
                <button class="delete">Delete</button>
                <h3>${party.description}</h3>
            </div>`
    }).join('');
    console.log(html);
    console.log(partyList);
    partyList.innerHTML=html;
}

async function fetchParties(){
    const response=await fetch('https://fsa-crud-2aa9294fe819.herokuapp.com/api/2307-ftb-et-web-ft/events');
    const json=await response.json();
    console.log(json.data)
    parties=json.data
    renderParties();
}

fetchParties();