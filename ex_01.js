addEventListener('DOMContentLoaded', function() {
const obj = {
    // key : value
    age : 57,
    code : "007",
    firstName : "James",
    lastName : "Bond",
}
 const displayAgentInfo = "My name is" + " "+ " " + obj.lastName + ", " + obj.firstName + " " + obj.lastName+ "!" + " " + "I'm the agent" + " " + obj.code + " "+  "and I'm" + " " + obj.age + " " + "years old."

document.getElementsByTagName("p")[0].textContent = displayAgentInfo
});
