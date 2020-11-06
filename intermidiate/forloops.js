const states = ["MAHARASHTRA","RAJESTAN","ASSAM","TELANGANA","GUJRAT",1947];
// for (var i = 0; i < states.length; i++){
//     if (typeof states[i] !== "string") continue;
//     console.log(states[i]);
// }
let i = 0;
while (i<states.length) {
    if(typeof states[i] !== "string") continue;
    console.log(states[i]);
    i = i + 1;

}
