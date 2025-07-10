// Create an object for a sutdent with name, age, and isEnrolled.
let obj = {
    name: "sanju",
    age: 20,
    isEnrolled: true,
}


// Access the value of "first-name" from this object.
const user = {
    "first-name": "sanju",
}
user["first-name"]


// Deep clone this obj1 safely.
const obj1 = {info: {score: 80 }};
let newobj = JSON.parse(JSON.stringify(obj1))
newobj.info.score = 100
