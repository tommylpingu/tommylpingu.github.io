let costi = [16,25,350,200]
let metodiPag = ["contanti","carta","bonifico"]
function Totale()
{
   let q1 = document.getElementById("Q1").value;
   let totQ1 = q1 * costi[0];
   document.getElementById("tot1").innerHTML = totQ1;
   let q2 = document.getElementById("Q2").value;
   let totQ2 = q2 * costi[1];
   document.getElementById("tot2").innerHTML = totQ2;
   let q3 = document.getElementById("Q3").value;
   let totQ3 = q3 * costi[2];
   document.getElementById("tot3").innerHTML = totQ3;
   let q4 = document.getElementById("Q4").value;
   let totQ4 = q4 * costi[3];
   document.getElementById("tot4").innerHTML = totQ4;
   let tot = totQ1 + totQ2 + totQ3 + totQ4;
   document.getElementById("totFin").innerHTML = tot;
}

function inviaOrdine()
{
    
}








function riempi()
{
    let menu = document.getElementById("combo1")
    let s ="";
    for(let i=0;i<metodiPag.length;i++)
    {
        s+= "<option>"+metodiPag[i]+"</option>";
    }
    menu.innerHTML = s;
}

riempi();