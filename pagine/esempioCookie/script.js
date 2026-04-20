function setCookie(nome,valore,giorni)
{
  let data = new Date();
  data.setTime(data.getTime()+ (giorni *24 *60*60*1000)); /*transforma in giorni da millisecondi*/
  document.cookie = nome + "="+ encodeURIComponent(valore) + ";expires" + data.toUTCString() + ";path=/"; /*il path vuoto (/)prende tutte le pagine */
}

function getCookie(nome)
{
  let cookies = document.cookie.split(";");
}
function salvaDati()
{
  let nome = document.getElementById("nome").value;
  let cognome = document.getElementById("cognome").value;
  setCookie("nome",nome,giorni);
  setCookie("cognome",cognome,1);
  window.location.href = "pag2.html";
}
function caricaRiepilogo()
{
  let nome = getCookie("nome");
  let cognome = getCookie("cognome");
  let s ="";
  s+= "nome: "+nome;
  s+= "<br>";
  s+= "Cognome: " + cognome;
  document.getElementById("riepilogo").innerHTML =s;
}