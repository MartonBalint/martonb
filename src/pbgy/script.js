//Loader
window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");
  
    loader.classList.add("loader-hidden");
    document.getElementById("navbarrr").classList = "navbar";
  
    loader.addEventListener("transitionend", () => {
      document.body.removeChild("loader");
    })
  })


  /* Csempék */
  function csempeactive(){
    document.getElementById("csempetitle").classList.add('cimsoractive');}
  function csempeoff(){
    document.getElementById("csempetitle").classList.remove('cimsoractive');}

  function csempeactive2(){
    document.getElementById("csempetitle2").classList.add('cimsoractive');}
  function csempeoff2(){
    document.getElementById("csempetitle2").classList.remove('cimsoractive');}

  function csempeactive3(){
    document.getElementById("csempetitle3").classList.add('cimsoractive');}
  function csempeoff3(){
    document.getElementById("csempetitle3").classList.remove('cimsoractive');}

  function csempeactive4(){
    document.getElementById("csempetitle4").classList.add('cimsoractive');}
  function csempeoff4(){
    document.getElementById("csempetitle4").classList.remove('cimsoractive');}

  function csempeactive5(){
    document.getElementById("csempetitle5").classList.add('cimsoractive');}
  function csempeoff5(){
    document.getElementById("csempetitle5").classList.remove('cimsoractive');}
  
    function csempeactive6(){
    document.getElementById("csempetitle6").classList.add('cimsoractive');}
  function csempeoff6(){
    document.getElementById("csempetitle6").classList.remove('cimsoractive');}
  
    function csempeactive7(){
    document.getElementById("csempetitle7").classList.add('cimsoractive');}
  function csempeoff7(){
    document.getElementById("csempetitle7").classList.remove('cimsoractive');}
  
    function csempeactive8(){
    document.getElementById("csempetitle8").classList.add('cimsoractive');}
  function csempeoff8(){
    document.getElementById("csempetitle8").classList.remove('cimsoractive');}

    function csempeactive9(){
    document.getElementById("csempetitle9").classList.add('cimsoractive');}
  function csempeoff9(){
    document.getElementById("csempetitle9").classList.remove('cimsoractive');}
  
    function csempeactive10(){
    document.getElementById("csempetitle10").classList.add('cimsoractive');}
  function csempeoff10(){
    document.getElementById("csempetitle10").classList.remove('cimsoractive');}
  
    function csempeactive11(){
    document.getElementById("csempetitle11").classList.add('cimsoractive');}
  function csempeoff11(){
    document.getElementById("csempetitle11").classList.remove('cimsoractive');}

    function csempeactive12(){
    document.getElementById("csempetitle12").classList.add('cimsoractive');}
  function csempeoff12(){
    document.getElementById("csempetitle12").classList.remove('cimsoractive');}
  
    function csempeactive13(){
    document.getElementById("csempetitle13").classList.add('cimsoractive');}
  function csempeoff13(){
    document.getElementById("csempetitle13").classList.remove('cimsoractive');}

    addEventListener("load", (event) => {
      document.getElementById("navbarrr").className.remove (".hide");

    });


    //CountDown
    var curday;
    var secTime;
    var ticker;
     
    function fooldal() {
     var nowDate = new Date();
     var dy = 0 ;
     var countertime = new Date(nowDate.getFullYear(),nowDate.getMonth(),nowDate.getDate(),10,0,0);
     
     var curtime = nowDate.getTime();
     var atime = countertime.getTime();
     var diff = parseInt((atime - curtime)/1000);
     if (diff > 0) { curday = dy - nowDate.getDay() }
     else { curday = dy - nowDate.getDay() -1 }
     if (curday < 0) { curday += 7; }
     if (diff <= 0) { diff += (86400 * 7) }
     startTimer (diff);
    }
    function ifi() {
     var nowDate = new Date();
     var dy = 5 ;
     var countertime = new Date(nowDate.getFullYear(),nowDate.getMonth(),nowDate.getDate(),18,30,0);
     
     var curtime = nowDate.getTime();
     var atime = countertime.getTime();
     var diff = parseInt((atime - curtime)/1000);
     if (diff > 0) { curday = dy - nowDate.getDay() }
     else { curday = dy - nowDate.getDay() -1 }
     if (curday < 0) { curday += 7; }
     if (diff <= 0) { diff += (86400 * 7) }
     startTimer (diff);
    }
    function bib() {
     var nowDate = new Date();
     var dy = 4 ;
     var countertime = new Date(nowDate.getFullYear(),nowDate.getMonth(),nowDate.getDate(),18,30,0);
     
     var curtime = nowDate.getTime();
     var atime = countertime.getTime();
     var diff = parseInt((atime - curtime)/1000);
     if (diff > 0) { curday = dy - nowDate.getDay() }
     else { curday = dy - nowDate.getDay() -1 }
     if (curday < 0) { curday += 7; }
     if (diff <= 0) { diff += (86400 * 7) }
     startTimer (diff);
    }
    function vas() {
     var nowDate = new Date();
     var dy = 0 ;
     var countertime = new Date(nowDate.getFullYear(),nowDate.getMonth(),nowDate.getDate(),10,0,0);
     
     var curtime = nowDate.getTime();
     var atime = countertime.getTime();
     var diff = parseInt((atime - curtime)/1000);
     if (diff > 0) { curday = dy - nowDate.getDay() }
     else { curday = dy - nowDate.getDay() -1 }
     if (curday < 0) { curday += 7; }
     if (diff <= 0) { diff += (86400 * 7) }
     startTimer (diff);
    }
     
    function startTimer(secs) {
     secTime = parseInt(secs);
     ticker = setInterval("tick()",1000);
     tick()
    }
     
    function tick() {
     var secs = secTime;
     if (secs>0) {
      secTime--;
     }
     else {
      clearInterval(ticker);
      ifi();
      bib();
      vas();
    }
     
     var days = Math.floor(secs/86400);
     secs %= 86400;
     var hours= Math.floor(secs/3600);
     secs %= 3600;
     var mins = Math.floor(secs/60);
     secs %= 60;
     
     document.getElementById("days").innerHTML = curday;
     document.getElementById("hours").innerHTML = ((hours < 10 ) ? "0" : "" ) + hours;
     document.getElementById("minutes").innerHTML = ( (mins < 10) ? "0" : "" ) + mins;
     document.getElementById("seconds").innerHTML = ( (secs < 10) ? "0" : "" ) + secs;
    }