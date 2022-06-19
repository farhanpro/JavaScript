var name = "Hitesh Choudary";

console.log("line nummber 2");

function sayName() {
    // var name = "Farhan Shaikh";
    console.log("line number 6",name);
    sayName2();
    
    function sayName2(){
        // var name =  "Faheem";
        console.log("line number 10",name);
    }
}

sayName()
