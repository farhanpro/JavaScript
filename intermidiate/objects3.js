const info = {
    name : "Shaikh Farhan",
    login : true,
    courselist : [ ],
    coursecount : function(Coursename){
        return this.courselist.push(Coursename);
    },
}
courselist = true;
console.log(`${info.name} has enrolled in ${info.coursecount("React Js")} and course name is ${info.courselist}`  );
//console.log();