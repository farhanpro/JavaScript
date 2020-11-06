const uid = "codingbook";
var name = prompt("Enter your name");
var email = prompt("Enter Email ");
var password = promt("Enter Passowrd");
var confirmPassword = prompt("Confirm Your Password");
var courseCount = 0;
var isLoggedInFromGoogle = false;

//InterPolation
console.log(`
Full name : ${name}
Email : ${email}
And password  : ${password}
User LoggedIn : ${courseCount}
LoggedInFromGoogle : ${isLoggedInFromGoogle}
operatoris : ${typeof(courseCount)}
`);
// console.log("Email",email);
// console.log(password);
// console.log(confirmPassword);
// console.log(courseCount);
// console.log(isLoggedInFromGoogle);