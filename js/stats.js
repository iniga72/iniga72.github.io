window.addEventListener('DOMContentLoaded', function (evt) {
    
    var a = document.querySelector('#menu_good');//idasfwq
    var good = localStorage.getItem("console_good");
    if(good == "")good = 0;
    a.textContent = good;

    var a = document.querySelector('#menu_bad');//idasfwq
    var good = localStorage.getItem("console_bad");
    if(good == "")good = 0;
    a.textContent = good;

    var params = "";
    var x = new XMLHttpRequest();
    x.open("GET", "http://exe.feature-hack.ru/stats.php?pk=" + localStorage.getItem('id'), false);
    x.onload = function (){
        params=x.responseText;
        document.querySelector('#menu_last').textContent = params.split('-')[4];
    document.querySelector('#menu_pass').textContent = params.split('-')[3];
    document.querySelector('#menu_old').textContent = params.split('-')[0];
    document.querySelector('#menu_new').textContent = params.split('-')[2];
    document.querySelector('#menu_count').textContent = params.split('-')[5];
    document.querySelector('#menu_money').textContent = params.split('-')[6];
    }
    x.send(null);
    

    

    
});