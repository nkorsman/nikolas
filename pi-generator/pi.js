 $('#calc-button').click(function(e){
   e.preventDefault();
   calculate();    
});

function calculate(){
    var num = document.myForm.num.value;
    var pi=4,top=4,bot=3,minus = true;
    next(pi,top,bot,minus,num);
}
function next(pi,top,bot,minus,num){
    var cur_time = Date.now();
    for(var i=0;i<num;i++){
        pi += (minus == true)?-(top/bot):(top/bot);
        minus = !minus;
        bot+=2;
    }
    var end_time = Date.now();
    var total_time = end_time - cur_time;
    if(total_time >= 1000){
        total_time = (total_time/1000)+"seconds";
    }else{
        total_time += "ms";
    }
    
    document.myForm.result.value = pi;
    document.getElementById('time').innerHTML = "Result calculated in: " + total_time + "...";
}
 
