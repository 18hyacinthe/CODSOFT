function add(){
    var a = 0, b = 0;
    a = f.display.value;
    b =a.charAt(a.length-1);
    if(b=='+' || b=='-' || b=='*' || b=='/'){
       f.display.value = a.substring(0,a.length-1);
       f.display.value += '+';
    } else{
        f.display.value += '+';
    }
}

function sub(){
    var a = 0, b = 0;
    a = f.display.value;
    b =a.charAt(a.length-1);
    if(b=='+' || b=='-' || b=='*' || b=='/'){
       f.display.value = a.substring(0,a.length-1);
       f.display.value += '-';
    } else{
        f.display.value += '-';
    }
}

function div(){
    var a = 0, b = 0;
    a = f.display.value;
    b =a.charAt(a.length-1);
    if(b=='+' || b=='-' || b=='*' || b=='/'){
       f.display.value = a.substring(0,a.length-1);
       f.display.value += '/';
    } else{
        f.display.value += '/';
    }
}

function mul(){
    var a = 0, b = 0;
    a = f.display.value;
    b =a.charAt(a.length-1);
    if(b=='+' || b=='-' || b=='*' || b=='/'){
       f.display.value = a.substring(0,a.length-1);
       f.display.value += '*';
    } else{
        f.display.value += '*';
    }
}