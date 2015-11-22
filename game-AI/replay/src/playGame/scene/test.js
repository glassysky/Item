/**
 * Created by cui on 2015/11/22.
 */
var z;
if(z){
    console.log(1);
} else {
    console.log(2);
}\


function people(){
    this.eye = 2;
    this.callname = function(){
        console.log(this.name);
    }
}

var arr = [1,2,3];
for (var key in arr) {
    console.log(key);
}

var people = {
    name : "cui",
    age : 19,
    eyes : 2
};
for(var key in people){
    console.log(people[key]);
}

function x(a){
    var b = "123";
    console.log(a);
    return b;
}
var b = x(2);
console.log(b);
//js
document.getElementById("#test");
document.getElementsByClassName(".classname");
//jq
$("#test")
$(".className")