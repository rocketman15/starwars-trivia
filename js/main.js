var score=0;
var qAsked=0;
var willPlay= confirm("yould you like to play this game"); 
console.log(willPlay);
if(!willPlay){
    alert("ok another time");
}
if(willPlay){
    alert("allright!!! lets go!!"); 
     startTrivia();
    
}












function startTrivia(){
    
    askQuestion("true or false, TIE stands for two ion engons","true");

} 
function askQuestion(question, answer) {
    var response = prompt(question );
    qAsked =qAsked+1;
    if (response != null) {
        // document.getElementById("demo").innerHTML =
        // "Hello " + answer + "! How are you today?";
        if (response === answer){
            score++;
        alert("corect"); 
        } else{
            alert("incorect");
        }
    }

    console.log("qAsked", qAsked, "score" , score);
}