var user = "user";

switch (user) {
    case "admin":
        console.log("Gets the full access");
        break;
    case "subadmin":
        console.log("Gets half access");
        break;
    case "user":
        console.log("Gets access to  paid content only");
        break;
    case "testpreps":
        console.log("Gets access to create/delete test");
    default:
        console.log("Trial user");
        break;
}