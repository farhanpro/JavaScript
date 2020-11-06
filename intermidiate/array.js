// var name = ['farhan','shaikh','faheem']
// console.log(name);  
var countries = ['India','Japan','Vieatnam',];
var state = new Array("Maharashtra","Delhi","Mumbai");
console.log(state);
console.log(state.length);
state[0]="punjab";
console.log(state);

var user = [ "farhan","shaikhfarhan549@gmail.com",3,34,true];
user.pop();//remove last array
user.pop();
user.pop();
user.pop();
user.pop();
user.push("Shaikh","Shaikhfarhan424",22,true)
user.unshift("Web developer");//adding in first array 
user.shift();//removing first array
console.log(user);
console.log(user.indexOf("Shaikh"));
