 const names = ["Youtube","Twitter","Facebook","Whatsaap"];
 for(const i of names){ // for of is used to access array in js (Mostly)
     console.log(i);
 }
 console.log("----------------------------------------break--------------------------");
const name = {
    yt : "Youtube",
    fb : "Facebook",
    wts : "Whatsaap",
    fb : "Farhan Blogs"
}

for (const ins in name){  //  for in is used to access objects in javascript (Mostly)
    console.log(`Key is  : ${ins} value is : ${name[ins]}`);
}