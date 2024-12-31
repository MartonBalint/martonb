/*Navbar*/
function respnav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

/*Language Change*/
var lang = "HUN";

function language() {
  if (lang === "HUN") {
    lang = "ENG";
    document.getElementById("name").innerHTML = "Bálint Marton"; /*English*/
    document.getElementById("selfdesc").innerHTML = "I'm a 18 years old student, and i live in Pécel.<br>I'm currently attendig<br>BMSZC Pataky István Technikum.<br>You can check my CV if you click me.<br><br>(John 3:16)"; /*English*/

    document.getElementById("navtask").innerHTML = "Assignments"; /*English*/
    document.getElementById("navsee").innerHTML = "Check this out!"; /*English*/
    document.getElementById("navproject").innerHTML = "Projects"; /*English*/
    document.getElementById("navcert").innerHTML = "Certifications"; /*English*/
    document.getElementById("navexp").innerHTML = "My Works"; /*English*/
    document.getElementById("navcon").innerHTML = "Contact"; /*English*/

    document.getElementById("ttask").innerHTML = "Assignments"; /*English*/
    document.getElementById("tsee").innerHTML = "Check this out!"; /*English*/
    document.getElementById("tproject").innerHTML = "Projects"; /*English*/
    document.getElementById("tcert").innerHTML = "Certifications"; /*English*/
    document.getElementById("texp").innerHTML = "My Works"; /*English*/

    document.getElementById("protmb").innerHTML = "The first project I ever participated in was a game made in Scratch in which we can control a wizard."; /*English*/
    document.getElementById("prourak").innerHTML = "We worked on this project until 2021-2022 and we were created a website about Elon Musk.<br>A quiz is also available on the website where you can test your knowledge."; /*English*/
    document.getElementById("protr").innerHTML = "On 15/04/2022, the first Tűzróka youth conference was held at the Péceli Baptist Church. I participated as an organizer and lighting technician in this event with more than 270 people. It was a life-changing experience and to this day it feels good to think back on it."; /*English*/
    document.getElementById("pronac").innerHTML = "In this project, we examined nationalism from many perspectives, in different spaces and in time."; /*English*/
    document.getElementById("procaf").innerHTML = "Among other things, we created the drinks menu, website, and placemats for a coffee house."; /*English*/
    document.getElementById("protop").innerHTML = "We worked on this project until 2022-2023 and we are creating a website/database dealing with pizzerias with login and registration options."; /*English*/
    document.getElementById("protr2").innerHTML = "The second Tűzróka youth conference was held on 15/04/2023 at the Rhema Conference Center in Budapest. An event with more than 500 people, in which I participated as an organizer, cameraman, photographer and lighting technician, and it was a life-changing experience for me, it was a very blessed occasion."; /*English*/
    document.getElementById("proeliza").innerHTML = "The first website i made for someone else,<br>im still working on it."; /*English*/
    document.getElementById("propbi").innerHTML = "I made this website for my church."; /*English*/

    document.getElementById("certcisco").innerHTML = "I obtained it in the 2022-2023 academic year at the BMSZC Pataky István Híradásipari és Informatikai Technikum."; /*English*/
    document.getElementById("certciscoo").innerHTML = "I obtained it in the 2022-2023 academic year at the BMSZC Pataky István Híradásipari és Informatikai Technikum."; /*English*/
    document.getElementById("inprog").innerHTML = "In progress..."; /*English*/

    document.getElementById("copyright").innerHTML = "TRADEMARK™ 2023 MARTON BÁLINT. ALL RIGHTS RESERVED"; /*English*/
  } else if (lang = "ENG") {
    lang = "HUN";
    document.getElementById("name").innerHTML = "Marton Bálint"; /*Hungaryan*/
    document.getElementById("selfdesc").innerHTML = "18 éves tanuló vagyok, Pécelen élek.<br>A BMSZC Pataky István Technikumába járok.<br>A CV-met a profilképemre kattintva megtekintheted.<br><br>(János 3:16)"; /*Hungaryan*/

    document.getElementById("navtask").innerHTML = "Feladatok"; /*Hungaryan*/
    document.getElementById("navsee").innerHTML = "Ezt nézd!"; /*Hungaryan*/
    document.getElementById("navproject").innerHTML = "Projektek"; /*Hungaryan*/
    document.getElementById("navcert").innerHTML = "Tanulmányok"; /*Hungaryan*/
    document.getElementById("navexp").innerHTML = "Munkáim"; /*Hungaryan*/
    document.getElementById("navcon").innerHTML = "Kapcsolat"; /*Hungaryan*/

    document.getElementById("ttask").innerHTML = "Feladatok"; /*Hungaryan*/
    document.getElementById("tsee").innerHTML = "Ezt nézd!"; /*Hungaryan*/
    document.getElementById("tproject").innerHTML = "Projektek"; /*Hungaryan*/
    document.getElementById("tcert").innerHTML = "Tanulmányok"; /*Hungaryan*/
    document.getElementById("texp").innerHTML = "Munkáim"; /*Hungaryan*/

    document.getElementById("protmb").innerHTML = "Az első projekt amiben valaha részt vettem egy Scratch-ben készült játék volt megvalósítva amiben egy varázslót irányíthatunk."; /*Hungaryan*/
    document.getElementById("prourak").innerHTML = "Ezen a projekten 2021-2022-ig dolgoztunk és egy Elon Muskkal foglalkozó weboldalt készítünk. A weboldalon elérhető már egy quiz is ahol próbára teheti a tudását."; /*Hungaryan*/
    document.getElementById("protr").innerHTML = "2022.04.15.-én került megrendezésre az első Tűzróka ifjúsági konferencia, a Péceli Baptista Gyülekezetben.amin szervezőként, és fénytechnikusként vettem részt, ezen a több mint 270 fős rendezvényen. Életreszóló élmény volt és a mai napig jó érzés rá visszagondolni."; /*Hungaryan*/
    document.getElementById("pronac").innerHTML = "Ebben a projektben a nacionalizmust vizsgáltuk meg rengeteg szempontból, külömböző térben, és időben."; /*Hungaryan*/
    document.getElementById("procaf").innerHTML = "Többekközt egy kávéház itallapját, weboldalát, tányéralátéteit készítettük el."; /*Hungaryan*/
    document.getElementById("protop").innerHTML = "Ezen a projekten 2022-2023-ig dolgoztunk és egy Pizzériával foglalkozó weboldalt/adatbázist készítünk bejelentkezési és regisztrálási lehetőséggel."; /*Hungaryan*/
    document.getElementById("protr2").innerHTML = "2023.04.15.-én került megrendezésre a második Tűzróka ifjúsági konferencia,Budapesten a Rhema Konferencia Központban.Egy több mint 500 fős rendezvény, amin szervezőként, operatőrként, fotósként és fénytechnikusként vettem részt,és egy életreszóló élmény volt számomra, nagyon áldásos alkalom volt."; /*Hungaryan*/
    document.getElementById("proeliza").innerHTML = "Az első weblap amit másnak készítek, még folyamatban van."; /*Hungaryan*/
    document.getElementById("propbi").innerHTML = "Ezt a weblapot a gyülekezetem számára készítettem."; /*Hungaryan*/

    document.getElementById("certcisco").innerHTML = "A BMSZC Pataky István Híradásipari és Informatikai Technikum-ban, a 2022-2023-as tanévben szereztem meg."; /*Hungaryan*/
    document.getElementById("certciscoo").innerHTML = "A BMSZC Pataky István Híradásipari és Informatikai Technikum-ban, a 2022-2023-as tanévben szereztem meg."; /*Hungaryan*/
    document.getElementById("inprog").innerHTML = "Folyamatban..."; /*Hungaryan*/

    document.getElementById("copyright").innerHTML = "TRADEMARK™ 2023 MARTON BÁLINT. MINDEN JOG FENNTARTVA"; /*Hungaryan*/
  }
}

window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");

  loader.classList.add("loader-hidden");

  loader.addEventListener("transitionend", () => {
    document.body.removeChild("loader");
  })
})