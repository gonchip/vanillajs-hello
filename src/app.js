/* eslint-disable */
import "./style.css";

window.onload = () => {
  document.querySelector("#excuse").innerHTML = generateExcuse();
  console.log("Hello Rigo from the console!");
};

let generateExcuse = () => {
  let pronoun = ["A ", "The "];
  let subject = ["man ", "cat ", "dog ", "driver ", "employee ", "teacher "];
  let action = [
    "took my ",
    "threw my ",
    "yelled at my ",
    "stole my ",
    "kept my "
  ];
  let possetion = ["homework ", "toe ", "car ", "shoe "];
  let where = ["on the street ", "in my house ", "in my driveway "];

  let proIndx = Math.floor(Math.random() * pronoun.length);
  let subIndx = Math.floor(Math.random() * subject.length);
  let actionIndx = Math.floor(Math.random() * action.length);
  let possetionIndx = Math.floor(Math.random() * possetion.length);
  let whereIndx = Math.floor(Math.random() * where.length);

  return (
    pronoun[proIndx] +
    "" +
    subject[subIndx] +
    "" +
    action[actionIndx] +
    "" +
    possetion[possetionIndx] +
    "" +
    where[whereIndx]
  );
};
