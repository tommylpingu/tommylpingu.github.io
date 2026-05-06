let Citta = ["Milano","Bergamo","Brescia","Como","Cremona","Lecco","Lodi","Mantova","Monza","Pavia","Sondrio","Varese"];
let Mesi = ["Genanio","Febbraio","Marzo","Aprile","Maggio","Giugno","Luglio","Agosto","Settembre","Ottobre","Novembre","Dicembre"];

function riempiComboCitta()
{
   let menu = document.getElementById("combo1");
   let menu2 = document.getElementById("combo2");
   let s = "";
   for(let i =0;i<Citta.length;i++)
    {
        s += "<option>"+Citta[i]+"</option>";
    }
    menu.innerHTML = s;
    menu2.innerHTML = s;
}
function riempiMesi()
{
    let menu = document.getElementById("comboMesi");
    let s = "";
    for(let i =0;i<Mesi.length;i++)
     {
         s += "<option>"+Mesi[i]+"</option>";
     }
     menu.innerHTML = s;
}

function PortaACitta()
{
 let n = document.getElementById("txtNome").value;
 let nV = true;
 let c = document.getElementById("txtCognome").value;
 let cV = true;

 if(n.length>=3)
    {
        for(let i = 0; i<n.length;i++)
            {
                if(n[0]>="A" && n[0]<="Z")
                    {
                        if(n[i]>="a" && n[i]<="z" || n[i]>="A" && n[i]<="Z")
                            {
    
                            }
                        else
                        {
                            nV=false;
                            break;
                        }
                    }
                else
                {
                    nV =false;
                    break;
                }
            }
    }
    else{
        nV=false;
    }

    if(c.length>=3)
        {
            for(let i = 0; i<c.length;i++)
                {
                    if(c[0]>="A" && c[0]<="Z")
                        {
                            if(c[i]>="a" && c[i]<="z" || c[i]>="A" && c[i]<="Z")
                                {
        
                                }
                            else
                            {
                                cV=false;
                                break;
                            }
                        }
                    else
                    {
                        cV =false;
                        break;
                    }
                }
        }
        else{
            cV=false;
        }
    
   if(nV===true && cV===true)
    {
        setCookie("nome",n,1);
        setCookie("cognome",c,1);
        window.location.href = "Pagina2.html";
    }
    else{
        window.alert("Campi non validi, i campi devono avere minimo 3 caratteri, la prima lettera deve eseere maiuscola e solamente lettere");
    }
   

}

function PortaAPagina3()
{
    let c1 = document.getElementById("combo1").value;
    let c2 = document.getElementById("combo2").value;
    if(c1===c2)
        {
            window.alert("Campi non validi mettere destinazioni differenti");
            return;
        }
    else{
        setCookie("citta1",c1,1);
        setCookie("citta2",c2,1);
        window.location.href = "Pagina3.html";
    }
}

//tutti i mesi 30 giorni per questioni tempistiche
function PortaARiepilogo()
{
   let g = document.getElementById("txtgiorno").value;
   let m = document.getElementById("comboMesi").value;
   let a = document.getElementById("txtanno").value;
   let valoreMese = 0;
   
    for(let i=0;i<Mesi.length;i++)
        {
            if(m===Mesi[i])
                {
                   valoreMese = i+1; //cosi gennaio vale 1 e cosi via
                }
        }
    let giorni = valoreMese*3 ;
    giorni += g;
    let giorniattuali = (new Date().getMonth() +1)*30;
    giorniattuali += new Date().getDate();
    let diff = giorni - giorniattuali;
    if(diff>=1 && diff <= 30)
        {
            setCookie("giorno",g,1);
            setCookie("mese",m,1);
            setCookie("anno",a,1);
            window.location.href = "Riepilogo.html";
        }
    else{
        window.alert("Data errata inserire una data succesiva a massimo 30 giorni di distanza ");
        return;
    }
}
function tornainizio()
{
    window.location.href = "Pagina1.html";
}
function Riepilogo()
{
    let s = "";
    let n = getCookie("nome");
    let c = getCookie("cognome");
    let c1 = getCookie("citta1");
    let c2 = getCookie("citta2");
    let g = getCookie("giorno");
    let m = getCookie("mese");
    let a = getCookie("anno");

    s+= "Grazie per l'ordine signor "+ n +" "+c+"<br>";
    s+= "partirà da: "+ c1 + " con destinazione: "+c2+"<br>";
    s+= "la data sarà:"+g +" "+ m+" "+a;

    document.getElementById("pFinale").innerHTML = s;
     return s;
}
 

//Prese da w3school

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

  function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }