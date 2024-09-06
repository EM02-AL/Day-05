const object = {
    name : "agent"
}; 
const agentString = JSON.stringify(object); 
const car = "Aston Martin";

    function addCar (agentString, car) {
        const object = JSON.parse(agentString);
        object.car = car; 
        return object
    }
 
console.log(addCar(agentString, car));
