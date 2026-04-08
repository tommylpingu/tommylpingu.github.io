let menu = document.getElementById("menu");
let annoCorrente = new Date().getFullYear();

function riempiAnni()
{
    let html = "";
    for(let i=1900; i<= annoCorrente-18;i++)
       html += "<option value=" +i+">"+i+"</option>";
    menu.innerHTML = html;
}


function stampaSelezionato()
{
    if(Termini.checked)
    {
        console.log("Gentile sig./sig.ra " + textBox2.value + " "+ textBox1.value,)
        console.log("la ringraziamo per la registrazione.")
    }
    else{
        console.log("BISOGNA ACCETTARE LE CONDIZIONI")
    }
    
}
document.addEventListener("DOMContentLoaded",riempiAnni);


