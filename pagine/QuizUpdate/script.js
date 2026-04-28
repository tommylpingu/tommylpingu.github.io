let RispostaDomanda2 = ["1","2","4","256"]
let Risposte = ["SQL","2","dinamiche","void","char","byte"]
let p=0;

function Riempi(){
    let menudati = document.getElementById("risposta2")
    let t ="";
    for(let i=0;i<RispostaDomanda2.length;i++)
    {
        t+= "<option>"+RispostaDomanda2[i]+"</option>";
    }
    menudati.innerHTML = t;
}

function prossimaPagina1(){
    setCookie("risposta1",document.getElementById("risposta1").value,1);
   window.location.href = "domanda2.html";
}

function prossimaPagina2(){
    setCookie("risposta2",document.getElementById("risposta2").value,1);
    window.location.href = "domanda3.html";
}

function prossimaPagina3(){
    if(document.getElementById("statiche").checked)
    {
       setCookie("risposta3","statiche",1);
    }
    else{
        setCookie("risposta3","dinamiche",1);
    }
    
    window.location.href = "domanda4.html";
}

function prossimaPagina4(){
    if(document.getElementById("check1").checked==true)
    {
        setCookie("risposta4-1","void",1);
    }
     if(document.getElementById("check2").checked==true)
    {
        setCookie("risposta4-2","integer",1);
    }
     if(document.getElementById("check3").checked==true)
    {
        setCookie("risposta4-3","char",1);
    }
    
    window.location.href = "domanda5.html";
}

function prossimaPagina5(){
    setCookie("risposta5",document.getElementById("risposta5").value,1);
    window.location.href = "riepilogo.html";
}

function setCookie(nome, valore, giorni){
    let data = new Date();
    data.setTime(data.getTime() + (giorni * 24 * 60 * 60 * 1000));
    document.cookie = nome + "=" + encodeURIComponent(valore) + ";expires=" + data.toUTCString() + ";path=/";

}

function getCookie(nome){
    let cookies = document.cookie.split(";");
    for (let i = 0; i < cookies.length; i++){
        let c = cookies[i].trim();
        if(c.startsWith(nome+"=")){
            return decodeURIComponent(c.substring(nome.length+1))
        }
    }
    return "";
}
function Riepilogo()
{
    let s = "";
    let punti =0;
    let r1 = getCookie("risposta1");
    if(r1===Risposte[0])
    {
        punti++;
    }
    let r2 = getCookie("risposta2")
    if(r2===Risposte[1])
    {
       punti++;
    }
    let r3 = getCookie("risposta3")
    if(r3===Risposte[2])
    {
        punti++;
    }
    let r4_1 = getCookie("risposta4-1");
    let r4_2 = getCookie("risposte4-2");
    let r4_3 = getCookie("risposta4-3");
    if(r4_1 === Risposte[3] && r4_2 != "integer" && r4_3 === Risposte[4])
    {
       punti++;
    }
    let r5 = getCookie("risposta5");
    if(r5===Risposte[5])
    {
        punti++;
    }
    s += "Complimenti Quiz terminato!! <br>";
    s += "Hai fatto: " + punti + " Punti";

    document.getElementById("ciao2").innerHTML = s;
}
