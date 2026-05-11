let studenti = [];
let datiSalvati = localStorage.getItem("studenti");
if(datiSalvati != null)
{
    studenti = JSON.parse(datiSalvati);
}
mostraStudenti();

function aggiungiStudente()
{
    let nome = document.getElementById("nome").value;

    let regexNome = /^[a-zA-Z\s]+$/;
    
    if(!regexNome.test(nome))
    {
      alert("Il nome deve contenere solo caratteri e spazi");
      return;
    }
    studenti.push(nome);
    localStorage.setItem("studenti", JSON.stringify(studenti));
    mostraStudenti();
    
    document.getElementById("nome").value = "";
}

function mostraStudenti()
{
    let lista = document.getElementById("listaStudenti");
    lista.innerHTML = "";
    for(let i =0; i<studenti.length;i++)
    {
        let p = document.createElement("p");
        p.innerHTML = studenti[i];
        let b = document.createElement("button");
        b.textContent = "ELIMINA";
        b.onclick = function () {eliminaStudente(i)}
        p.appendChild(b);
        lista.appendChild(p);

    }
}

function eliminaStudente(indice)
{
    studenti.splice(indice,1);
    localStorage.setItem("studenti", JSON.stringify(studenti));
    mostraStudenti();
}