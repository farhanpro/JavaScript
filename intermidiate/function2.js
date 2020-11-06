var answer = function (name ,role) {
    if (role == "admin") {
        return `${name}, With full access . `;
        
    }
    if (role =="subadmin") {
        return `${name}, With access to Create and Delete Course . `;
    }
    if(role == "testprer"){
        return `${name},With access to Create and Delete Test . `;
    }
    if (role == "user"){
        return `${name},With access to Purchased Courses .`;
    }
    else{
        return `${name},Trial USer .`;
    }
}

console.log(answer("Farhan","subadmin"));