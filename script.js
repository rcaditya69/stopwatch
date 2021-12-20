var seconds=00;
var tens=00;                                         
var OutputSeconds=document.getElementById('Second');
var OutputTens=document.getElementById('Tens');
var btnStart=document.getElementById('Start');
var btnStop=document.getElementById('Stop');
var btnReset=document.getElementById('Reset');
var Interval;
btnStart.addEventListener('click',()=>{    //adding event listener for start button,so when the event is triggered clear interval function is called first
   clearInterval(Interval);        //clear interval stops the event which is called by set interval   
  Interval=setInterval(startTime,10);   //set interval calls the start time function
});
btnStop.addEventListener('click',()=>{
clearInterval(Interval);    //clear interval stops the event which is called by set interval   
});
btnReset.addEventListener('click',()=>{
clearInterval(Interval);
tens="00";
seconds="00";
OutputSeconds.innerHTML=seconds;   //reseting to default values
OutputTens.innerHTML=tens;
});
function startTime(){     //this is the main function for the timmer works and displays the values in the browser according the conditions
tens++;
if(tens<9)
OutputTens.innerHTML="0"+tens;
if(tens>9)
OutputTens.innerHTML=tens;
if(tens>99){
seconds++;
OutputSeconds.innerHTML="0"+seconds;
tens="0";
OutputTens.innerHTML="0"+tens;

}
if(seconds>99){
    OutputSeconds.innerHTML=seconds;
}
}
