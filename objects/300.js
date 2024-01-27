// Predict and explain...
// What will happen when this program is run?
// Check your prediction and explanation by running the program.
// Fix anything that needs fixing.

function checkLivesNearCYF(person) {
  const cyfLocations = [
    "Birmingham",
    "Cape Town",
    "Glasgow",
    "London",
    "Manchester",
  ];
  console.log(person.city);
  return cyfLocations.includes(person.city);
}

const mo = {
  name: "Mo",
  city: "Glasgow",
  focus: "React",
};

const sayed = {
  name: "Sayed",
  city: "Edinburgh",
  focus: "SQL",
};

// console.assert(checkLivesNearCYF(mo), "test 1");
// console.assert(!checkLivesNearCYF(sayed), "test 2");
