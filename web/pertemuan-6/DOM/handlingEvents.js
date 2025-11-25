// event handling
let button = document.getElementById('myButton');

button.addEventListener('click', function() {
    alert('Button was clicked!');
});

// common events
let myElement = document.getElementById('myElement');

myElement.addEventListener('mouseover', function() {
    console.log('Mouse over the element');
});

// event object
button.addEventListener('click', function(event){
    console.log('Button clicked')
    console.log('Event type:', event.type)
    console.log('Target element:', event.target)
})