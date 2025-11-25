// select elements
let heading = document.getElementById("main-heading");
let paragraphs = document.getElementsByClassName('paragraph');
let fistparagraph = document.querySelector('p');

// manipulation elements
heading.innerHTML = 'New Heading'
paragraphs[0].style.color = 'blue'
fistparagraph.setAttribute('class', 'important')

// creating and appending elements
let newParagraph = document.createElement('p')
newParagraph.innerHTML = 'This is a new paragraph.'
document.body.appendChild(newParagraph)