"use strict"

const options = {
  name: 'test',
  width: 1280,
  height: 1024,
  colors: {
    bg: 'red',
    border: 'black',
  }
};

let counter = 0;

for (let key in options) {
  if (typeof(options[key]) === 'object') {
    for (let i in options[key]) {
      console.log(`Свойство ${i} имеет значение: ${options[key][i]}`);
      counter++;
    }
  } else {
      console.log(`Свойство ${key} имеет значение: ${options[key]}`)
      counter++;
  }

}

console.log(counter)
