
//import dependencies
import aiModel from "./aiModel.js";
import 'dotenv/config';

const apiKey = process.env.TOKEN;
const modelType = "stability-ai";
const modelCode = "stable-diffusion:db21e45d3f7023abc2a46ee38a23973f6dce16bb082a930b0c49861f96d1e5bf";

let model = new aiModel(apiKey, modelType, modelCode);

console.log(model.getModel());

// function print(text) {
//     console.log(text);
// }

// const print = function(text) {
//     console.log(text);
// }

// const print = (text) => {
//     console.log(text);
// }

// const print = (text) => console.log(text);


const print = text => console.log(text);
print("Hello World");