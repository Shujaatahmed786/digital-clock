function time()
  {
    var datetime = new Date();
    var hours = datetime.getHours();
    var minutes = datetime.getMinutes();
    var secounds = datetime.getSeconds();
    var session = document.getElementById("session");
    if(hours >= 12){
        session.innerHTML = 'PM';
    } 
    else{   
        session.innerHTML = 'AM';

    }
    if(hours > 12){
        hours = hours - 12
    }

    document.getElementById('hours').innerHTML = hours
    document.getElementById('minutes').innerHTML = minutes
    document.getElementById('secounds').innerHTML = secounds
    //document.getElementById('session').innerHTML = session
}
//setInterval(time, 10);
