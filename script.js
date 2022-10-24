console.log("Connected");

const rand = function(){
  const mix = Math.floor(Math.random() * randColor.length)
  body = mix;
}
const randColor = ['red','orange','purple','pink']

const body = document.body.style.backgroundColor = randColor[];
const button = document.querySelector('.btn')

button.addEventListener('click', rand);
