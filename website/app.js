/* Global Variables */

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + "." + d.getDate() + "." + d.getFullYear();

const init = async () => {
  try {
    const res = await fetch("http://127.0.0.1:3001/mango"),
      parsedRes = await res.json();
    console.log(parsedRes);
  } catch (err) {
    console.log(err);
  }
};

window.onload = () => {
  init();
};
