const information = {
    FirstName : "Shaikh", //First name of user taken.
    SecondName : "Farhan",//Second name of user taken.
    ThirdName : "Faheem",//Third name of user taken.
    CourseList : [], //list of courses but is now empty.
    BuyCourse: function(CourseName){   //Buy course takes a value called CourseName 
        this.CourseList.push(CourseName); //This is refered to upper CourseList not the down one
    }, // End of function
    GetCourseCount : function(){ //Get Course Content 
        return `${this.FirstName} is Enrolled in total of  ${this.CourseList.length} courses`; // in this function firstname is called and the Length of CourseList is been called
    },
};
var CourseList = true; //this is another variable to understand this keyword.
console.log(information.FirstName,information.SecondName); //this prints first and second  name
console.log(information.GetCourseCount()); //this will print zero
information.BuyCourse("Angular Course"); //Ok so here Buy Course will inject Angular Course in CourseName 
console.log(information.GetCourseCount()); // and Now its value will be 01